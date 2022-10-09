import { useState } from 'react';
import { Badge, Box, Button, Card, Center, Container, Accordion, Grid, Group, Stack, Text, Tabs, TextInput } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths  } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';


import MainLayout from '../../layouts/mainLayout/mainLayout';
import FooterLinks from '../../components/footer/footer';
import { footerData } from '../../constants/footer';
import { colors } from '../../constants/colors';
import { urls } from '../../constants/urls';
import { IconArrowLeft, IconBook, IconClipboard, IconPlus } from '@tabler/icons';
import { courseThumbnail } from '.';


const courseId = [ 59260, 58949, 60012, 60097, 58871, 59343, 59060, 59655, 59032, 59683, 60199, 59971, 59996, 59380, 58879, 60179, 59174 ];

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const getAllCourseInfo = async (activePage: number) => {
        try {

            const respose = await fetch(`${urls.tutorLms}/courses?paged=${activePage}`);
            const data = await respose.json();    
            if (data.status_code === "success"){
                return data.data.posts
            }
        } catch (error) {
          console.log("error", error)
        }  
    }

    const getCourseInfo = async () => {
        let coursesArrOne = await getAllCourseInfo(1);
        let courseArrTwo = await getAllCourseInfo(2);

        const coursesArr = [...coursesArrOne, ...courseArrTwo];

        return coursesArr.filter((course: any)=>{
            return course.ID === Number(params?.id);
        });
    }

    const singleCourseData =  async () => {
       try {
            const { data } = await axios.get(`${urls.tutorLms}/course-detail/${params?.id}`);
            if(data.status_code === "course_detail"){
                return data.data.video
            }
       } catch (error) {
        console.log("error", error);
       }
    }

    const embedUrl =  (url: string) => {
        const splitUrl = url.split("/");
        return splitUrl[splitUrl.length - 1];
    }

    const getVideoUrl = async () => {
       let videoData = await singleCourseData();
       let videoUrl = "";

       switch (videoData[0].source) {
        case "-1":
            videoUrl = "-1";
            break;
        case "youtube":
            videoUrl = videoData[0].source_youtube;
            break;
       
        default:
            break;
       }

       return embedUrl(videoUrl);
    }

    const getCourseTopics = async() => {
        try {
            const { data } = await axios.get(`${urls.tutorLms}/course-topic/${params?.id}`);
            if (data.status_code === "get_topic"){
                return data.data;
            }
        } catch (error) {
            console.log("error", error)
        }
    }
  
    const courseContent = await getCourseInfo();
    const videoUrl =  await getVideoUrl();
    const topics = await getCourseTopics();

    return {
        props: {
            courseContent,
            videoUrl,
            topics
        }
      }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = courseId.map((id) => ({params: {id: id.toString()}}));      
    return {
        paths,
        fallback: true
    }
}



const Contact: NextPage = (props: any) => {

  return (
    <>
      <Head>
        <title>Luddoc | {props?.courseContent[0].post_title}</title>
        <meta name="description" content="Contact us Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container >
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
                    <Text weight={600} size={28} mb="lg" color={`${colors.secondaryColor}`}>    {props?.courseContent[0].post_title}
                    </Text>
                    <Center>
                        {props.videoUrl === "-1" ? 
                            (
                                <Image 
                                    src={courseThumbnail(props.courseContent[0].ID)}
                                    width={600}
                                    height={400}
                                    
                                />
                            ) : 
                            (
                            <iframe
                                    src={`https://youtube.com/embed/${props.videoUrl}`}
                                    width="100%"
                                    height={400}
                            >

                            </iframe> 
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
                            <div dangerouslySetInnerHTML={{ __html: props.courseContent[0].post_content}} />
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
                                {props.topics.map((element: any) => (
                                     <Accordion.Item value={element.ID} key={element.ID}>
                                        <Accordion.Control>
                                            {element.post_title}
                                        </Accordion.Control>
                                     </Accordion.Item>  
                                ))}
                             
                            </Accordion>
                        </Tabs.Panel>
                    </Tabs>
                   
                </Grid.Col>
                <Grid.Col md={4}>
                    <Card  withBorder mt={60} radius="lg">
                        <Group mt="lg">
                            <Text>Price:</Text>
                            <Badge color="dark" variant='filled'>2000 KES</Badge>
                        </Group>

                        <Button 
                            fullWidth 
                            my="lg"
                            color="dark"
                            variant='outline'
                            radius="xl"
                        >
                            Enroll Course
                        </Button>
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

export default Contact;