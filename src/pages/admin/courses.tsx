import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Badge, Center, Container, Grid, Group, Pagination, Paper, Text } from '@mantine/core';

import { AdminLayout } from '../../layouts/adminLayout/adminLayout';
import { AddButton, CourseTable, ExcelButton, PdfButton, PrintButton } from '../../features/courses';
import { colors } from '../../constants/colors';


const data = [
    {
       courseName: 'care giving' ,
       totalLessons: 5,
       numberOfEnrolledStudents: 12,
       pricing: "0.00"
    },
    {
        courseName: 'first aid' ,
        totalLessons: 2,
        numberOfEnrolledStudents: 12,
        pricing: "0.00"
    },
    {
        courseName: 'self development' ,
        totalLessons: 3,
        numberOfEnrolledStudents: 12,
        pricing: "0.00"
    },
    {
        courseName: 'communication' ,
        totalLessons: 1,
        numberOfEnrolledStudents: 12,
        pricing: "0.00"
    },
];


const Tutors: NextPage = () => { 
    const [activePage, setPage] = useState(1);

    return (
        <>
            <Head>
                <title>Luddoc | Courses</title>
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
                                        src='/course.svg'
                                        height={350}
                                        width={400}
                                    />
                                </Center>
                            </Grid.Col>
                            <Grid.Col md={6} p="xl">
                                <Text size={28} color={`${colors.secondaryColor}`} weight={600} mt="lg" >Luddoc Courses</Text>
                                <Group position="apart" mt="lg"> 
                                    <Text>Total Courses</Text>
                                    <Badge color='dark' size='lg'>10 Courses</Badge>
                                </Group>
                                <Group position="apart" mt="lg"> 
                                    <Text>Courses Added this month</Text>
                                    <Badge color='dark' size='lg'>2 courses</Badge>
                                </Group>
                                <Group position="apart" mt="lg"> 
                                    <Text>Course with highest enrollment</Text>
                                    <Badge color='dark' size='lg'>caregiving</Badge>
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
                                    <AddButton id={1} type="Course"/>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Paper>

                    <Paper>
                        <CourseTable data={data} />
                        <Center mt="xl"> 
                            <Pagination total={4} color='gray' page={activePage} onChange={setPage}/>
                        </Center>
                    </Paper>

                </Container>
            </AdminLayout>
        </>
    );
}

export default Tutors;