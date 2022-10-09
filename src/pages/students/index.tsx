import { useEffect } from 'react';
import { ActionIcon, Badge, Button, Card, Center, Container, createStyles, Grid, Group, Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { StudentLayout } from '../../layouts/studentLayout/studentLayout';
import { colors } from '../../constants/colors';
import moneyImage from '../../assets/money.jpg';
import tutorImage from '../../assets/tutor.jpg';
import { IconBook, IconSchool, IconTrophy } from '@tabler/icons';

const StudentDashboard: NextPage = () => {
    

    const getGreetings = () => {
        const date = new Date();
        const hourString = date.getHours();
        let greetings = '';

        if (hourString <  12) greetings = "Good Morning";
        if (hourString >=  12 && hourString < 17) greetings = "Good Afternoon";
        if (hourString >=  17 && hourString <= 24) greetings = "Good Evening";

        return greetings;
    }

    return (
        <StudentLayout>
            <Container>
                <Center>
                    <Text mt="xl" weight={600} size={25} color={`${colors.secondaryColor}`}>{getGreetings()} John Doe!</Text>
                </Center>
                <Grid mt="xl">
                    <Grid.Col sm={6} md={4}>
                        <Card withBorder>
                            <Stack justify="center" align="center">
                                <IconBook color='green' size={45}/>
                                <Text size={20}>Enrolled Courses</Text>
                                <Text size={23}>2</Text>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col sm={6} md={4}>
                        <Card withBorder>
                            <Stack justify="center" align="center">
                                <IconSchool color='green' size={45}/>
                                <Text size={20}>Active Courses</Text>
                                <Text size={23}>2</Text>
                            </Stack>
                        </Card>
                    </Grid.Col>
                    <Grid.Col sm={6} md={4}>
                        <Card withBorder>
                            <Stack justify="center" align="center">
                                <IconTrophy color='green' size={45}/>
                                <Text size={20}>Courses Completed</Text>
                                <Text size={23}>0</Text>
                            </Stack>
                        </Card>
                    </Grid.Col>
                  
                </Grid>
            </Container>
        </StudentLayout>
    )
}

export default StudentDashboard;