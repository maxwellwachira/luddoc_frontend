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


const Certificates: NextPage = () => {

    return (
        <StudentLayout>
            <Container>
                <Card withBorder px={30} radius="md" mt="xl">
                    <Stack align="center">
                        <IconTrophy color='green' size={45}/>
                        <Text mt="lg">You have no Certificate</Text>
                        <Text >Complete a course to get one</Text>
                    </Stack>
                </Card>
            </Container>
        </StudentLayout>
    )
}

export default Certificates;