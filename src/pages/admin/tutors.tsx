import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Badge, Center, Container, Grid, Group, Pagination, Paper, Text } from '@mantine/core';

import { AdminLayout } from '../../layouts/adminLayout/adminLayout';
import { StudentsTable, ExcelButton, PdfButton, PrintButton, SearchBar  } from '../../features/students';
import { colors } from '../../constants/colors';
import tutorImage from '../../assets/tutor.jpg';


const data = [
    {
        firstName: 'John',
        lastName: 'Kamau',
        phoneNumber: '254703519593'
    },
    {
        firstName: 'Mary',
        lastName: 'Otieno',
        phoneNumber: '214703519593'
    },
    {
        firstName: 'Dennis',
        lastName: 'Okumu',
        phoneNumber: '224703519593'
    },
    {
        firstName: 'Martha',
        lastName: 'Wachira',
        phoneNumber: '244703519593'
    },
    {
        firstName: 'Teresa',
        lastName: 'Omiko',
        phoneNumber: '234703519593'
    }

];


const Tutors: NextPage = () => { 
    const [activePage, setPage] = useState(1);
    const router = useRouter();
 
    return (
        <>
            <Head>
                <title>Luddoc | Students</title>
                <meta name="description" content="Admin Luddoc" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AdminLayout>
                <Container>
                    <Paper withBorder mt="lg" p="md">
                        <Grid>
                            <Grid.Col md={6}>
                                <Center>
                                    <Image 
                                        src={tutorImage}
                                        height={350}
                                        width={400}
                                    />
                                </Center>
                            </Grid.Col>
                            <Grid.Col md={6}>
                                <Text mt={60} size={28} color={`${colors.secondaryColor}`} weight={600}>Luddoc Tutors</Text>
                                <Group mt="lg">
                                    <Text>Total Tutors</Text>
                                    <Badge color='dark'>5 Tutors</Badge>
                                </Group>
                                <Group mt="lg">
                                    <Text>Tutors who Enrolled this month</Text>
                                    <Badge color='dark'>1 Tutor</Badge>
                                </Group>
                                <Group mt="lg">
                                    <Text>Comparison with previous month</Text>
                                    <Badge color='green'>2 % rise</Badge>
                                </Group>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                    <Paper mt={40}  p={10}>
                        <Grid>
                            <Grid.Col md={8}>
                                <Group>
                                    <PrintButton />
                                    <ExcelButton />
                                    <PdfButton />
                                </Group>
                            </Grid.Col>
                            <Grid.Col md={4}>
                                <Center>
                                    <SearchBar />
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                    <StudentsTable data={data} />
                    <Center mt="xl"> 
                        <Pagination total={4} color='gray' page={activePage} onChange={setPage}/>
                    </Center>
                </Container>
            </AdminLayout>
        </>
    );
}

export default Tutors;