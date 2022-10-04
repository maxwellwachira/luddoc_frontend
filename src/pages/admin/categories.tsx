import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Badge, Center, Container, Grid, Group, Pagination, Paper, Text } from '@mantine/core';

import { AdminLayout } from '../../layouts/adminLayout/adminLayout';
import { AddButton, CategoriesTable, ExcelButton, PdfButton, PrintButton } from '../../features/courses';
import { colors } from '../../constants/colors';



const data = [
    {
       categoryName: 'care giving' ,
       numberOfCourses: 5
    },
    {
        categoryName: 'first aid' ,
        numberOfCourses: 2
    },
    {
        categoryName: 'self development' ,
        numberOfCourses: 3
    },
    {
        categoryName: 'communication' ,
        numberOfCourses: 1
    },
];


const Tutors: NextPage = () => { 
    const [activePage, setPage] = useState(1);
    return (
        <>
            <Head>
                <title>Luddoc | Categories</title>
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
                                        src='/categories.svg'
                                        height={350}
                                        width={400}
                                    />
                                </Center>
                            </Grid.Col>
                            <Grid.Col md={6} p="xl">
                                <Text size={28} color={`${colors.secondaryColor}`} weight={600} mt="lg" >Luddoc Courses Categories</Text>
                                <Group position="apart" mt="lg"> 
                                    <Text>Total Categories</Text>
                                    <Badge color='dark' size='lg'>4 categories</Badge>
                                </Group>
                                <Group position="apart" mt="lg"> 
                                    <Text>Categories Added this month</Text>
                                    <Badge color='dark' size='lg'>2 categories</Badge>
                                </Group>
                                <Group position="apart" mt="lg"> 
                                    <Text>Category with highest enrollment</Text>
                                    <Badge color='dark' size='lg'>eldery</Badge>
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
                                    <AddButton id={1} type="Category"/>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Paper>

                    <Paper>
                        <CategoriesTable data={data} />
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