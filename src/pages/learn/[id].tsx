import { useEffect, useState } from 'react';
import { LoadingOverlay, Box, Button, Card, Center, Container, Accordion, Grid, Group, Stack, Text, Tabs, TextInput, Divider } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';

import { CourseLayout } from '../../layouts/courseLayout/courseLayout';
import { colors } from '../../constants/colors';
import { urls } from '../../constants/urls';
import { IconArrowLeft, IconBook, IconCheck, IconClipboard, IconDashboard, IconPlus, IconQuestionMark } from '@tabler/icons';
import { useAuthContext } from '../../features/authentication';

interface TopicData {
    totalTopics: number;
    totalPages: number;
    currentPage: number;
    topics: {
        id: string;
        topicName: string;
        createdAt: string;
        updatedAt: string;
    }[]
};

interface LessonData {
    totalLessons: number;
    totalPages: number;
    currentPage: number;
    lessons: {
        id: string;
        lessonTitle: string;
        lessonContent: string;
        createdAt: string;
        updatedAt: string;
    }[]
};

interface TopicLessonData {
    topicTitle: string;
    topicLessons: {
        id: string;
        lessonTitle: string;
        lessonContent: string;
        createdAt: string;
        updatedAt: string;
    }[]
}

interface Topic {
    id: string;
    topicName: string;
    createdAt: string;
    updatedAt: string;
}

interface EnrolmentData {
    id: string;
    progress: number;
    CourseId: string;
    UserId: string;
    createdAt: string;
    updatedAt: string;
}


const capitalizeFirsLetter = (sentence: string) => {
    const words = sentence.split(" ");
    return words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const getInitialLessonId = async() => {
        try {
            const response = await fetch(`${urls.baseUrl}/lesson/${params?.id}?page=1&limit=10000`);
            const data = await response.json();
            if (data.totalLessons > 0){
                const lessonId = Number(data.lessons[0].id);
                return lessonId
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    const initialLessonId = await getInitialLessonId();
    return {
        props: {
            initialLessonId: initialLessonId ? initialLessonId : 1
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
            if (status === 200) {
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

    const paths = courseIds.map((id) => ({ params: { id } }));
    return {
        paths,
        fallback: true
    }
}

const Learn: NextPage = (props : any) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [enrolled, setEnrolled] = useState(true);
    const [topicData, setTopicData] = useState<TopicData | null>(null);
    const [lessonData, setLessonData] = useState<LessonData | null>(null);
    const [topicLessonData, setTopicLessonData] = useState<TopicLessonData[] | null>(null);
    const [enrolmentData, seEnrolmentData] = useState<EnrolmentData | null>(null);
    const [topic, setTopic] = useState(0);
    const [lesson, setLesson] = useState(props.initialLessonId);

    const { auth, userMe } = useAuthContext();

    const pathNameArr = router.asPath.split('/');
    const courseId = pathNameArr[pathNameArr.length - 1];

    const isEnrolled = async () => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/enrolment/course/${courseId}/user/${userMe.id}`);
            if (data.exists) {
                setEnrolled(true);
                seEnrolmentData(data.data);
                return data.data;
            } else {
                setEnrolled(false);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getTopicLessons = async (topicId: string) => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/lesson/topic/${topicId}?page=1&limit=100000`);
            setLessonData(data);
            return data;
        } catch (error) {
            console.log("error", error);
        }
    }

    const setTopicAndLessonIds = async(topicData: TopicData, topicLessonData: TopicLessonData[]) => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${urls.baseUrl}/lesson/${courseId}?page=1&limit=10000`);
            
            const enrolmentData = await isEnrolled();
            let position = Math.floor((enrolmentData.progress * data.totalLessons / 100) -1);
            if (position < 0) position = 0;
            const lessonId = data.lessons[position].id;
            const realTopicId = data.lessons[position].TopicId;
            const topicInfo = topicData.topics.filter(topic => {
                return topic.id === realTopicId
            });
            const topicId = topicLessonData.findIndex(object => {
                return object.topicTitle === topicInfo[0].topicName
            });
            setLesson(Number(lessonId));
            setTopic(topicId);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }


    const getCourseTopics = async () => {
        const lessonTopicData: TopicLessonData[] = [];
        try {
            const { data } = await axios.get(`${urls.baseUrl}/topic/${courseId}?page=1&limit=1000`);
            setTopicData(data);
            await Promise.all(data.topics.map(async (topic: Topic) => {
                const lessonData: LessonData = await getTopicLessons(topic.id);
                const topicLessonData = {
                    topicTitle: topic.topicName,
                    topicLessons: lessonData.lessons
                };
                lessonTopicData.push(topicLessonData);
            }));
            setTopicLessonData(lessonTopicData);
            await setTopicAndLessonIds(data, lessonTopicData);
        } catch (error) {
            console.log("error", error);
        }
    }


    const layoutLinks = (data: TopicLessonData[]) => {
        const navlinks = data.map((element, index) => ({
            label: capitalizeFirsLetter(element.topicTitle),
            initiallyOpened: topic === index,
            index: index,
            active: topic === index,
            links: element.topicLessons.map((el) => ({
                label: capitalizeFirsLetter(el.lessonTitle),
                link: `#${index}#${el.id}`,
                lessonId: el.id,
                topicId: index.toString(),
                content: el.lessonContent,
                courseId: courseId,
                disabled: Number(el.id) > lesson ? true : false,
                active: (topic === index && Number(el.id) === lesson) ? true : false,
                onClick: () => {
                    setLesson(Number(el.id));
                    setTopic(index);
                }
            })).sort((a, b) => Number(a.lessonId) - Number(b.lessonId)),


        }));
        return navlinks.sort((a, b) => {
            return Number(a.index) - Number(b.index)
        });
    }

    const content = () => {
        if (!topicLessonData) return [{
            lessonTitle: 'Loading...',
            lessonContent: 'loading...'
        }];
        const data = topicLessonData[topic].topicLessons.filter((el) => Number(el.id) === lesson);
        return data;
    }

    const updateProgress = async(progress: number) => {
        try {
            const { data } = await axios.put(`${urls.baseUrl}/enrolment/${enrolmentData?.id}`, { progress });
            if (data.message === "success"){
                await isEnrolled();
                return true;
            };
            return false;
        } catch (error) {
            console.log(error)
        }
    }

    const computeProgress = async() => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${urls.baseUrl}/lesson/${courseId}?page=1&limit=10000`);
            const position = data.lessons.findIndex((object: any) => {
                return Number(object.id) === lesson;
            });
            const calcProgress = Math.floor((position + 1) * 100 / data.totalLessons);
            if (enrolmentData && calcProgress > enrolmentData.progress) await updateProgress(calcProgress);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const goBack = () => {
        const topicData = topicLessonData ? topicLessonData[topic] : null;
        if (topicData) {
            const position = topicData.topicLessons.findIndex(object => {
                return Number(object.id) === lesson
            })
            if (position > 0) {
                const lessonId = Number(topicData.topicLessons[position - 1].id);
                setLesson(lessonId);
            } else if (position === 0) {
                const newTopicData = topicLessonData ? topicLessonData[topic - 1] : null;
                if (newTopicData) {
                    const newLessonId = Number(newTopicData.topicLessons[newTopicData.topicLessons.length - 1].id);
                    setTopic(topic - 1);
                    setLesson(newLessonId);
                }
            }
        }
    }

    const markComplete = async() => {
        const topicData = topicLessonData ? topicLessonData[topic] : null;
        if (topicData) {
            const position = topicData.topicLessons.findIndex(object => {
                return Number(object.id) === lesson
            })
            if (position >= 0) {
                await computeProgress();
                if (topicData.topicLessons.length > position + 1) {
                    const lessonId = Number(topicData.topicLessons[position + 1].id);
                    setLesson(lessonId);
                } else {
                    const newTopicData = topicLessonData ? topicLessonData[topic + 1] : null;
                    if (newTopicData) {
                        const newLessonId = Number(newTopicData.topicLessons[0].id);
                        setTopic(topic + 1);
                        setLesson(newLessonId);
                    }
                }
            }
        }
    }

  
    useEffect(() => {
        if(!userMe.id){
            setLoading(true);
        }else {
            setLoading(false);
            isEnrolled();
            getCourseTopics();
        }
       
    }, [userMe]);

    if(!enrolled) {
        setTimeout(() => {
            router.push(`/courses/${courseId}`);
        }, 3000);
        return(
            <Container mt={70}>
                <Text align="center" color={colors.primaryColor} weight={600}>You have not enrolled in this particular course course</Text>
                <Text align="center"  color={colors.primaryColor} weight={600}>Redirect you to course enrol page</Text>
            </Container>
        );
    }


    return (
        <>
            <Head>
                <title>Luddoc | Learn</title>
                <meta name="description" content="Contact us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CourseLayout data={topicLessonData ? layoutLinks(topicLessonData) : null}>
                <Container mt="xs">
                    <Grid>
                        <Grid.Col md={3}>
                            <Center>
                                <Text>{content()[0].lessonTitle}</Text>
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
                                    onClick={goBack}
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
                                    onClick={markComplete}
                                >
                                    Mark as Complete
                                </Button>
                            </Center>
                        </Grid.Col>
                    </Grid>

                    <Tabs color="dark" defaultValue="courseInfo" mb="lg">
                        <Tabs.List>
                            <Tabs.Tab value="courseInfo" icon={<IconBook size={14} />}>Overview</Tabs.Tab>
                            <Tabs.Tab value="curriculum" icon={<IconQuestionMark size={14} />}>Exercise Files</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="courseInfo" pt="xs">
                            <Grid >
                                <Grid.Col md={12} sm={12}>
                                    <LoadingOverlay visible={loading} overlayBlur={2} />
                                    <div dangerouslySetInnerHTML={{ __html: content()[0].lessonContent }} />
                                </Grid.Col>
                            </Grid>
                        </Tabs.Panel>
                        <Tabs.Panel value="curriculum" pt="xs">
                        </Tabs.Panel>
                    </Tabs>
                    <Divider mb="xl" />
                    <Grid>
                        <Grid.Col md={4}>
                            <Center>
                                <Button
                                    component='a'
                                    href='/students'
                                    size='xs'
                                    color="dark"
                                    variant='outline'
                                    leftIcon={<IconDashboard />}
                                    radius="xl"
                                >
                                    Back to Dashbord
                                </Button>
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Center>
                                <Button
                                    size='xs'
                                    color="dark"
                                    variant='outline'
                                    leftIcon={<IconArrowLeft />}
                                    radius="xl"
                                    onClick={goBack}
                                    loading={loading}
                                >
                                    Previous Lesson
                                </Button>
                            </Center>
                        </Grid.Col>

                        <Grid.Col md={4}>
                            <Center>
                                <Button
                                    size='xs'
                                    color="dark"
                                    variant='outline'
                                    leftIcon={<IconCheck />}
                                    radius="xl"
                                    onClick={markComplete}
                                >
                                    Mark as Complete
                                </Button>
                            </Center>
                        </Grid.Col>
                    </Grid>
                </Container>
            </CourseLayout>
        </>
    );
}

export default Learn;