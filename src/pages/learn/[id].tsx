import { useEffect, useState } from 'react';
import { LoadingOverlay, Box, Button, Card, Center, Container, Accordion, Grid, Group, Stack, Text, Tabs, TextInput } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths  } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';


import { CourseLayout } from '../../layouts/courseLayout/courseLayout';
import FooterLinks from '../../components/footer/footer';
import { footerData } from '../../constants/footer';
import { colors } from '../../constants/colors';
import { urls } from '../../constants/urls';
import { IconArrowLeft, IconBook, IconCheck, IconClipboard, IconDashboard, IconPlus, IconQuestionMark } from '@tabler/icons';


const courseId = [ 59260, 58949, 60012, 60097, 58871, 59343, 59060, 59655, 59032, 59683, 60199, 59971, 59996, 59380, 58879, 60179, 59174 ];

interface CourseData {
    topicId: string;
    topicTitle: string;
    data: {
        ID: string;
        post_title: string;
        post_content: string;
        post_name: string;
        course_id: string;
        attachment: Array<any>;
        thumbnail: boolean;
        video: Array<any>;
    }[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const getLessonData = async (courseTopicsData: Array<any>) => {
        let links: CourseData[] = [];
        try {
            await Promise.all(courseTopicsData.map(async (element: any) => {
                const { data } = await axios.get(`${urls.tutorLms}/lesson/${element.ID}`);
                if (data.status_code === "success"){
                    links.push({
                        topicId: element.ID,
                        topicTitle: element.post_title,
                        data: data.data
                    });
                }        
            }));

            return links;
        } catch (error) {
            console.log("error", error)
        }
    }
  
    const getCourseTopics = async() => {
        try {
            const { data } = await axios.get(`${urls.tutorLms}/course-topic/${params?.id}`);
            if (data.status_code === "get_topic"){
                return await getLessonData(data.data);
            }
        } catch (error) {
            console.log("error", error)
        }
    }
  
    const courseData = await getCourseTopics();
    const data = courseData?.sort((a, b) => {
        return Number(a.topicId) - Number(b.topicId)
    })

    return {
        props: {
           data
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



const Learn: NextPage = (props: any) => {
    const router = useRouter();
    const [content, setContent] = useState({
        post_content: '',
        post_title: '',
        ID: ''
    });
    const [loading, setLoading] = useState(true);

    const postContentFilter = (id: string) => {
        setLoading(true);
        const postContent = props.data.map((element: any) => {
           return element.data.filter((el: any) => {
                return el.ID === id
            });
        });
        const data = postContent.filter((element: any) => {
            return element.length > 0;
        });
        setLoading(false);
        return data[0];
    }

    const getContent = () => {
        const route = router.asPath;
        const idArr = route.split("#");
        const id = idArr[idArr.length - 1];
        console.log(route)
        return postContentFilter(id);

    }
    const layoutLinks = () => {
        const navlinks = props.data.map((element: any)=> ({
            label: element.topicTitle,
            initiallyOpened: true,
            links : element.data.map((el: any) => ({
                label: el.post_title,
                link: `#${el.ID}`,
                id: el.ID,
                content: el.post_content,
                courseId: el.course_id,
                active: router.asPath.includes(`#${el.ID}`) ? true : false
            }))
        }));
        return navlinks;
    }

    const buttonAction = (topicId: string, lessonId: string) => {
        const topicIndex = props.data.findIndex((object: CourseData) => {
            return object.topicId === topicId
        });

        const lessonIndex = props.data.map((object: CourseData) => {
           return object.data.findIndex((obj) => {
                return obj.ID === lessonId
           });
        });

        const topicData = props.data.filter((object: CourseData) => {
            return object.topicId === topicId;
        });

        console.log("topic data", topicData)

        if (lessonIndex === 0){

        } else if (lessonIndex > 0) {

        }
    }

    useEffect (() => {
        const lessonData = getContent();
        setContent(lessonData[0]);
        console.log(lessonData[0])
    }, []);
    

    const goBack = () => {
        setLoading(true);
        router.back();
        router.reload();
        setLoading(false);
    }

  return (
    <>
      <Head>
        <title>Luddoc | Learn</title>
        <meta name="description" content="Contact us Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CourseLayout data={layoutLinks()}>
        <Container mt="xs">
            <Grid>
                <Grid.Col md={3}>
                    <Center>
                        <Text>{content.post_title}</Text>   
                    </Center>
                </Grid.Col>
                <Grid.Col md={3}>
                    <Center>
                        <Button
                            component='a'
                            href='/students'
                            size='xs'
                            mb="lg"
                            color="dark"
                            variant='outline'
                            leftIcon={<IconDashboard />}
                            radius="xl"
                        >
                            Back to Dashbord
                        </Button>
                    </Center>
                </Grid.Col>
                <Grid.Col md={3}>
                    <Center>
                        <Button
                            size='xs'
                            mb="lg"
                            color="dark"
                            variant='outline'
                            leftIcon={<IconArrowLeft />}
                            radius="xl"
                            onClick = {goBack}
                            loading={loading}
                        >
                            Previous Lesson
                        </Button>    
                    </Center>
                </Grid.Col>
                
                <Grid.Col md={3}>
                    <Center>
                        <Button
                            size='xs'
                            mb="lg"
                            color="dark"
                            variant='outline'
                            leftIcon={<IconCheck />}
                            radius="xl"
                            // onClick={buttonAction( ,content.ID)}
                        >
                            Mark as Complete
                        </Button>     
                    </Center>
                </Grid.Col>
            </Grid>

            <Tabs color="dark" defaultValue="courseInfo"  mb="lg">
                <Tabs.List>
                    <Tabs.Tab value="courseInfo" icon={<IconBook size={14} />}>Overview</Tabs.Tab>
                    <Tabs.Tab value="curriculum" icon={<IconQuestionMark size={14} />}>Exercise Files</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="courseInfo" pt="xs">
                    <Group>
                        <LoadingOverlay visible={loading} overlayBlur={2} />
                        <div dangerouslySetInnerHTML={{ __html: content.post_content}} />
                    </Group>
                </Tabs.Panel>
                <Tabs.Panel value="curriculum" pt="xs">
                </Tabs.Panel>
            </Tabs>
        </Container>
      </CourseLayout>
    </>
  );
}

export default Learn;