import { useEffect, useState } from 'react';
import { Badge, Button, Card, Center, Container, createStyles, Grid, Group, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';

import { AdminLayout } from '../../layouts/adminLayout/adminLayout';
import { colors } from '../../constants/colors';
import tutorImage from '../../assets/tutor.jpg';
import { useAuthContext } from '../../features/authentication/context/authContextProvider';
import { urls } from '../../constants/urls';


const useStyles = createStyles((theme) => ({
    themeButton: {
        background: `${colors.secondaryColorLight}`,

        '&:hover': {
            background: `${colors.secondaryColorLight}`,
            opacity:0.7 
        }
    },
    blackText: {
        color: 'black'
    }
}))

interface CategoryData {
    totalCategories: number;
    totalPages: number;
    currentPage: number;
    categories: {
        id: string;
        categoryName: string;
        createdAt: string;
        updatedAt: string;
    }[]
};

interface CourseData {
    totalCourses: number;
    totalPages: number;
    currentPage: number;
    courses: {
        id: string;
        courseTitle: string;
        CategoryId: string;
        coursePricing: string;
        courseDescriptionTitle: string;
        courseDescriptionContent: string;
        courseThumbnailUrl: string;
        hasVideo: boolean;
        videoSource: string;
        videoUrl: string;
        grannysId: string;
        createdAt: string;
        updatedAt: string;
    }[]
};

interface StudentData {
    totalStudents: number;
    totalPages: number;
    currentPage: number;
    students: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phoneNumber: string;
        role: string;
        active: boolean;
        disabled: boolean;
        createdAt: string;
        updatedAt: string;
    }[]
};

interface TutorData {
    totalTutors: number;
    totalPages: number;
    currentPage: number;
    tutors: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phoneNumber: string;
        role: string;
        active: boolean;
        disabled: boolean;
        createdAt: string;
        updatedAt: string;
    }[]
};


const Dashboard: NextPage = () => { 
    const router = useRouter();
    const { classes } = useStyles();
    const [courseData, setCourseData] = useState<CourseData | null>(null);
    const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
    const [studentData, setStudentData] = useState<StudentData | null>(null);
    const [tutorData, setTutorData] = useState<TutorData | null>(null);
    const { auth, userMe } = useAuthContext();

    const getGreetings = () => {
        const date = new Date();
        const hourString = date.getHours();
        let greetings = '';

        if (hourString <  12) greetings = "Good Morning";
        if (hourString >=  12 && hourString < 17) greetings = "Good Afternoon";
        if (hourString >=  17 && hourString <= 24) greetings = "Good Evening";

        return greetings;
    }

    const getAllCourses = async() => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/course?page=${1}&limit=${1000}`);
            setCourseData(data);
            console.log(data);
        } catch (error) {
            
        }
    }

    const getAllCategories = async() => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/category?page=${1}&limit=${1000}`);
            setCategoryData(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllStudents = async() => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/user/students?page=${1}&limit=${1000}`);
            setStudentData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllTutors = async() => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/user/tutors?page=${1}&limit=${1000}`);
            setTutorData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        //if(!auth || userMe.role !== "admin") router.push('/auth/sign-in');
        getAllCourses();
        getAllCategories();
        getAllStudents();
        getAllTutors();
    }, []);

    // if (!auth || userMe.role !== "admin") return <></>
    return (
        <>
            <Head>
                <title>Luddoc | Admin Dashboard</title>
                <meta name="description" content="Admin Luddoc" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AdminLayout>
               <Container>
                <Center>
                    <Text my="xl" size={25}  weight={700}>{`${getGreetings()} ${userMe.firstName} ${userMe.lastName}`}, Welcome to Admin's Dashboard</Text>
                </Center>
                <Grid gutter="xl">
                    <Grid.Col md={6}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Center>
                                <Text weight={700} color={`${colors.secondaryColor}`} size={23}>Luddoc Students Summary</Text>
                            </Center>
                            <Card.Section>
                               <Center>
                                    <Image 
                                        src='/student.svg'
                                        height={200}
                                        width={300}
                                    />
                               </Center>
                            </Card.Section>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Total Students</Text>
                                <Badge color="dark" variant="light">
                                    {studentData?.totalStudents} students
                                </Badge>
                                <Button variant="light"className={classes.themeButton} fullWidth mt="md" radius="md" onClick={() => router.push('/admin/students')}>
                                    <span className={classes.blackText}>See More</span>
                                </Button>
                            </Group>
                        </Card>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Center>
                                <Text weight={700} color={`${colors.secondaryColor}`} size={23}>Luddoc Courses Summary</Text>
                            </Center>
                            <Card.Section>
                               <Center>
                                    <Image 
                                        src='/course.svg'
                                        height={200}
                                        width={300}
                                    />
                               </Center>
                            </Card.Section>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Total Courses</Text>
                                <Badge color="dark" variant="light">
                                    {courseData?.totalCourses} courses
                                </Badge>
                                <Button variant="light"className={classes.themeButton} fullWidth mt="md" radius="md" onClick={() => router.push('/admin/courses')}>
                                    <span className={classes.blackText}>See More</span>
                                </Button>
                            </Group>
                        </Card>
                    </Grid.Col>
                    
                </Grid>
                <Grid my={40} gutter="xl">
                    <Grid.Col md={6}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Center>
                                <Text weight={700} color={`${colors.secondaryColor}`} size={23}>Luddoc Categories Summary</Text>
                            </Center>
                            <Card.Section>
                               <Center>
                                    <Image 
                                        src='/categories.svg'
                                        height={200}
                                        width={300}
                                    />
                               </Center>
                            </Card.Section>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Total Categories</Text>
                                <Badge color="dark" variant="light">
                                   {categoryData?.totalCategories} Categories
                                </Badge>
                                <Button variant="light"className={classes.themeButton} fullWidth mt="md" radius="md" onClick={() => router.push('/admin/categories')}>
                                    <span className={classes.blackText}>See More</span>
                                </Button>
                            </Group>
                        </Card>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Center>
                                <Text weight={700} color={`${colors.secondaryColor}`} size={23}>Luddoc Tutors Summary</Text>
                            </Center>
                            <Card.Section>
                               <Center>
                                    <Image 
                                        src={tutorImage}
                                        height={200}
                                        width={300}
                                    />
                               </Center>
                            </Card.Section>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Total Tutors</Text>
                                <Badge color="dark" variant="light">
                                   {tutorData?.totalTutors} tutors
                                </Badge>
                                <Button variant="light"className={classes.themeButton} fullWidth mt="md" radius="md" onClick={() => router.push('/admin/tutors')}>
                                    <span className={classes.blackText}>See More</span>
                                </Button>
                            </Group>
                        </Card>
                    </Grid.Col>
                    
                </Grid>
               </Container>
            </AdminLayout>
        </>
    );
}

export default Dashboard;