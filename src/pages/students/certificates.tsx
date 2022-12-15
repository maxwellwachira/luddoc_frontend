import { useEffect } from 'react';
import { Card, Container, Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'

import { StudentLayout } from '../../layouts/studentLayout/studentLayout';
import { IconTrophy } from '@tabler/icons';
import { useAuthContext } from '../../features/authentication';


const Certificates: NextPage = () => {
    const { auth } = useAuthContext();
    const router = useRouter();
    
    useEffect(() => {
        if (!auth) router.push('/auth/logout');
    }, [])

    if (!auth) return <></>

    return (
        <>
            <Head>
                <title>Luddoc Student Dashboard</title>
                <meta name="description" content="Luddoc Skills For Life" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StudentLayout>
                <Container>
                    <Card withBorder px={30} radius="md" mt="xl">
                        <Stack align="center">
                            <IconTrophy color='green' size={45} />
                            <Text mt="lg">You have no Certificate</Text>
                            <Text >Complete a course to get one</Text>
                        </Stack>
                    </Card>
                </Container>
            </StudentLayout>
        </>
    )
}

export default Certificates;