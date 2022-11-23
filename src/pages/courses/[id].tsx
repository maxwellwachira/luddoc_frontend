import { useState, useEffect } from 'react';
import { Badge, Box, Button, Card, Center, Container, Accordion, Grid, Group, Text, Tabs } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths  } from 'next';
import { useRouter } from 'next/router';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import axios from 'axios';

import MainLayout from '../../layouts/mainLayout/mainLayout';
import FooterLinks from '../../components/footer/footer';
import { footerData } from '../../constants/footer';
import { colors } from '../../constants/colors';
import { urls } from '../../constants/urls';
import { IconArrowLeft, IconBook, IconClipboard, IconPlus } from '@tabler/icons';
import { useAuthContext } from '../../features/authentication';

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const getAllCourseInfo = async (activePage: number) => {
        try {
            const response = await fetch(`${urls.baseUrl}/course?page=${activePage}&limit=1000`); 
            const data = await response.json();
            //console.log(response)
            return data.courses
        } catch (error) {
          console.log("error", error)
        }  
    }

    const getCourseInfo = async () => {
        const allCourses = await getAllCourseInfo(1);

        return allCourses.filter((course: any) => {
            return course.id == params?.id;
        });
    }

    // const getCourseTopics = async() => {
    //     try {
    //         const { data } = await axios.get(`${urls.tutorLms}/course-topic/${params?.id}`);
    //         if (data.status_code === "get_topic"){
    //             return data.data;
    //         }
    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }
  
    const courseContent = await getCourseInfo();
    //console.log(courseContent)
    //const topics = await getCourseTopics();

    return {
        props: {
            courseContent
        }
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    let courseIds: Array<string> = [];

    const getAllCourseInfo = async (activePage: number) => {
        try {
            let status = 200;
            const response = await fetch(`${urls.baseUrl}/course?page=${activePage}&limit=1000`); 
            const data = await response.json();
            if (status === 200){
                data.courses.map((el: any) => {
                    let courseId = el.id;
                    courseIds.push(courseId);
                })
            }
        } catch (error) {
          console.log("error", error)
        } 
    }
    
    await getAllCourseInfo(1);

    const paths = courseIds.map((id) => ({params: {id}}));      
    return {
        paths,
        fallback: true
    }
}


const SingleCourse: NextPage = (props: any) => {
    const { userMe } = useAuthContext();
    const [response, setResponse] = useState('');
    const [enrolled, setEnrolled] = useState(false);
    const router = useRouter();

    const embedUrl =  (url: string) => {
        const splitUrl = url.split("=");
        return splitUrl[splitUrl.length - 1];
    }

    const getVideoUrl = (source: string, url: string) => {
        let videoUrl = url;
       switch (source) {
        case "youtube":
            videoUrl = embedUrl(videoUrl);
            break;
       
        default:
            break;
       }

       return videoUrl;
    }

    const enroll = async(UserId: string, CourseId: string) => {
        try {
            const { status } = await axios.post(`${urls.baseUrl}/enrolment`, {UserId, CourseId});
            if (status === 201){
                setResponse("success");
                return {
                    message: "success"
                };
            }
        } catch (error) {
            console.log(error);
            setResponse("error");
            return {
                message: "error"
            };
        }
    }

    const isEnrolled = async() => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/enrolment/course/${props.courseContent[0].id}/user/${userMe.id}`);
            if ( data.exists ) {
                setEnrolled(true);
            }else {
                setEnrolled(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onClick = async() => {
        //Check if role is admin or tutor or course pricing is free
        if (userMe.role === "admin" || userMe.role === "tutor" || Number(props.courseContent[0].coursePricing) === 0){
            const enrolment = await enroll(userMe.id, props.courseContent[0].id);
            if (enrolment?.message === "success"){
                router.push("/students/courses");
            }
        }else {
            try {
                const darajaData = {
                    amount : Number(props.courseContent[0].coursePricing),
                    phoneNumber: "254703519593",
                    accountNumber: `Payment for ${props.courseContent[0].courseTitle}`
                };
                const { data } = await axios.post(`${urls.baseUrl}/daraja/lipa-na-mpesa`, darajaData);
                if(data.transaction.ResponseCode == 0){
                    setCookie('checkoutRequestID', data.transaction.CheckoutRequestID);
                    setTimeout(async() => {
                        const query = await axios.post(`${urls.baseUrl}/daraja/lipa-na-mpesa-query`, {checkoutRequestID: getCookie('checkoutRequestID')});
    
                        if(Number(query.data.transaction.ResultCode) === 0){
                            const enrolment = await enroll(userMe.id, props.courseContent[0].id);
                            if (enrolment?.message === "success"){
                                deleteCookie("checkoutRequestID");
                                router.push("/students/courses");
                            }
                        }
                    }, 15000);
                    
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        isEnrolled();
    }, []);

  return (
    <>
      <Head>
        <title>Luddoc | {props?.courseContent[0].courseTitle}</title>
        <meta name="description" content="Contact us Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container mt="md">
            <Button
                component='a'
                href='/courses'
                size='md'
                mb="lg"
                color="dark"
                variant='outline'
                leftIcon={<IconArrowLeft />}
                radius="xl"
            >
                Go Back
            </Button>
           <Grid gutter="xl">
                <Grid.Col md={8}>
                    <Text weight={600} size={28} mb="lg" color={`${colors.secondaryColor}`}>    {props?.courseContent[0].courseTitle}
                    </Text>
                    <Center>
                        {props.courseContent[0].hasVideo ? 
                            (
                            <iframe
                                    src={`https://youtube.com/embed/${getVideoUrl(props.courseContent[0].videoSource, props.courseContent[0].videoUrl)}`}
                                    width="100%"
                                    height={400}
                            >
                            </iframe> 
                            ) :
                            (
                                <Image 
                                    src={`${urls.baseUrl}/image?filePath=public${props?.courseContent[0]?.courseThumbnailUrl}`}
                                    width={600}
                                    height={400}
                                    alt="course thumbnail"
                                />
                            ) 
                        }   
                    </Center>
                    <Tabs color="dark" defaultValue="courseInfo" mt="xl" mb="lg">
                        <Tabs.List>
                            <Tabs.Tab value="courseInfo" icon={<IconBook size={14} />}>Course Info</Tabs.Tab>
                            <Tabs.Tab value="curriculum" icon={<IconClipboard size={14} />}>Curriculum</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="courseInfo" pt="xs">
                            <Text weight={600} size={25} mt="md">About Course</Text>
                            <Text component='h1' size={19}>{props.courseContent[0].courseDescriptionTitle}</Text>
                            <Text>{props.courseContent[0].courseDescriptionContent}</Text>
                        </Tabs.Panel>
                        <Tabs.Panel value="curriculum" pt="xs">
                            <Text weight={600} size={25} mt="md">Curriculum</Text>
                            <Accordion 
                                chevron={<IconPlus size={16} />}
                                styles={{
                                    chevron: {
                                    '&[data-rotate]': {
                                        transform: 'rotate(45deg)',
                                    },
                                    },
                                }}
                            >
                                {/* {props?.topics.map((element: any) => (
                                     <Accordion.Item value={element.ID} key={element.ID}>
                                        <Accordion.Control>
                                            {element.post_title}
                                        </Accordion.Control>
                                     </Accordion.Item>  
                                ))} */}
                             
                            </Accordion>
                        </Tabs.Panel>
                    </Tabs>
                   
                </Grid.Col>
                <Grid.Col md={4}>
                    <Card  withBorder mt={60} radius="lg">
                        
                        {
                            enrolled ? 
                                <Button 
                                    fullWidth 
                                    my="lg"
                                    color="dark"
                                    variant='outline'
                                    radius="xl"
                                    onClick={onClick}
                                >
                                Continue Learning
                                </Button> 
                            :
                                <>
                                    <Group mt="lg">
                                        <Text>Price:</Text>
                                        <Badge color="dark" variant='filled'>{props.courseContent[0].coursePricing == 0 ? 'FREE' : `${props.courseContent[0].coursePricing} KES`}</Badge>
                                    </Group>
                                    <Button 
                                        fullWidth 
                                        my="lg"
                                        color="dark"
                                        variant='outline'
                                        radius="xl"
                                        onClick={onClick}
                                    >
                                        Enroll Course
                                    </Button>
                                </>
                        }
                    </Card>
                </Grid.Col>
           </Grid>
        </Container>
        <Box>
            <FooterLinks data={footerData}/>
        </Box>
      </MainLayout>
    </>
  );
}

export default SingleCourse;