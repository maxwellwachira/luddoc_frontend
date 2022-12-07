import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { Badge, Center, Container, Grid, Group, Pagination, Paper, Text } from '@mantine/core';

import { AdminLayout } from '../../layouts/adminLayout/adminLayout';
import { AddButton, CategoriesTable, ExcelButton, PdfButton, PrintButton } from '../../features/lms';
import { colors } from '../../constants/colors';
import { urls } from '../../constants/urls';
import { useRefreshContext } from '../../features/lms/contexts/refreshDataContexProvider';

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

interface TableData {
    id: string;
    count: number;
    categoryName: string;
    numberOfCourses: number;
};


const Tutors: NextPage = () => { 
    const [activePage, setPage] = useState(1);
    const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
    const { refreshData} = useRefreshContext();
    const limit = 5;


    const getAllCategories = async() => {
        try {
            const { data } = await axios.get(`${urls.baseUrl}/category?page=${activePage}&limit=${limit}`);
            setCategoryData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const tableData = () => {
        let data: TableData[] = [];
        categoryData?.categories.map((el, index) => {
            let categoryData = {
                id: el.id,
                count: (activePage - 1) * limit + ++index,
                categoryName: el.categoryName,
                numberOfCourses: 2
            }
            data.push(categoryData);
        });

        return data;
    }
    

    useEffect(() => {
        getAllCategories();
    }, [activePage, refreshData]);

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
                                    <Badge color='dark' size='lg'>{categoryData?.totalCategories} categories</Badge>
                                </Group>
                                <Group position="apart" mt="lg"> 
                                    <Text>Categories Added this month</Text>
                                    <Badge color='dark' size='lg'>Loading ...</Badge>
                                </Group>
                                <Group position="apart" mt="lg"> 
                                    <Text>Category with highest enrollment</Text>
                                    <Badge color='dark' size='lg'>Loading ...</Badge>
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
                        <CategoriesTable data={tableData()} />
                        <Center mt="xl"> 
                            <Pagination total={categoryData ? categoryData.totalPages : 2} color='gray' page={activePage} onChange={setPage}/>
                        </Center>
                    </Paper>

                </Container>
            </AdminLayout>
        </>
    );
}

export default Tutors;