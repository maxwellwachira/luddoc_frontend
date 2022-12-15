import { useEffect } from 'react';
import { Button, Center, Container, Grid, Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { StudentLayout } from '../../layouts/studentLayout/studentLayout';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../features/authentication';

const LiveSession: NextPage = () => {
    const { auth, userMe } = useAuthContext();
    const router = useRouter();

    const getGreetings = () => {
        const date = new Date();
        const hourString = date.getHours();
        let greetings = '';

        if (hourString < 12) greetings = "Good Morning";
        if (hourString >= 12 && hourString < 17) greetings = "Good Afternoon";
        if (hourString >= 17 && hourString <= 24) greetings = "Good Evening";

        return greetings;
    }

    useEffect(() => {
        if (!auth) router.push('/auth/logout');
    }, [])

    if (!auth) return <></>

    return (
        <>
            <Head>
                <title>Luddoc Student Live Session</title>
                <meta name="description" content="Luddoc Skills For Life" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StudentLayout>
                <Container>
                    <Center>
                        <Text mt="xl" weight={600} size={25} color={`${colors.secondaryColor}`}>{`${getGreetings()} ${userMe.firstName} ${userMe.lastName}`}</Text>
                    </Center>
                    <Grid gutter={40}>
                        <Grid.Col md={7}>
                            <Center>
                                <Image
                                    src="/live.svg"
                                    height={400}
                                    width={400}
                                />
                            </Center>
                        </Grid.Col>
                        <Grid.Col md={5}>
                            <Stack justify="center" p="xl">
                                <Text mt={40}>Click the button to join a live session</Text>
                                <Button
                                    component='a'
                                    href='/meeting/live-session'
                                    variant='outline'
                                    color='dark'
                                    mt="xl"
                                    radius="xl"
                                    fullWidth
                                >
                                    Join Now
                                </Button>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Container>
            </StudentLayout>
        </>
    )
}

export default LiveSession;