import { Button, Center, Container, Grid, Paper, Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { AdminLayout } from '../../layouts/adminLayout/adminLayout';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../features/authentication';

const LiveSession: NextPage = () => {
    const { userMe } = useAuthContext();

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
        <>
         <Head>
            <title>Luddoc | Live session</title>
            <meta name="description" content="Live session" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <AdminLayout>
            <Container>
                <Center>
                    <Text mt="xl" weight={600} size={25} color={`${colors.secondaryColor}`}>{`${getGreetings()} ${userMe.firstName} ${userMe.lastName}`}</Text>
                </Center>
                <Paper withBorder p="xl" radius={15} mt={25}>
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
                            <Stack justify="center" p="xl" style={{minHeight: 400}}>    
                                <Text mt={40}>Click the button to start a live session</Text>
                                <Button
                                    component='a'
                                    href='/meeting/live-session'
                                    variant='outline'
                                    color='dark'
                                    mt="xl"
                                    radius="xl"
                                    fullWidth

                                >
                                    Start Live Session
                                </Button>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Container>
        </AdminLayout>
        </>
    )
}

export default LiveSession;