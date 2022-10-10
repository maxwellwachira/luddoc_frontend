import { useEffect } from 'react';
import { Badge, Button, Card, Center, Container, createStyles, Grid, Group, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { AdminLayout } from '../../layouts/adminLayout/adminLayout';
import { colors } from '../../constants/colors';
import moneyImage from '../../assets/money.jpg';
import tutorImage from '../../assets/tutor.jpg';
import { useAuthContext } from '../../features/authentication/context/authContextProvider';



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

const Dashboard: NextPage = () => { 
    const router = useRouter();
    const { classes } = useStyles();
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

    useEffect(() =>{
        if (!auth) {
            router.push('/auth/sign-in');
        }
    }, []);

    if (!auth) return <></>
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
                                    10 students
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
                                    10 courses
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
                                <Text weight={700} color={`${colors.secondaryColor}`} size={23}>Luddoc Payments Summary</Text>
                            </Center>
                            <Card.Section>
                               <Center>
                                    <Image 
                                        src={moneyImage}
                                        height={200}
                                        width={300}
                                    />
                               </Center>
                            </Card.Section>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Total Money Paid</Text>
                                <Badge color="dark" variant="light">
                                   1000 KES
                                </Badge>
                                <Button variant="light"className={classes.themeButton} fullWidth mt="md" radius="md" onClick={() => router.push('/admin/payments')}>
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
                                   3 tutors
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