import { Badge, Box, Button, Card, Center, Container, createStyles, Grid, Group, Loader, Pagination, Stack, Text,  } from '@mantine/core';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';

import MainLayout from '../../layouts/mainLayout/mainLayout';
import FooterLinks from '../../components/footer/footer';
import { footerData } from '../../constants/footer';
import { colors } from '../../constants/colors';
import { urls } from '../../constants/urls';

export const courseThumbnail = (ID: number) => {
    const imageBaseUrl = 'http://mygrannyslove.com/wp-content/uploads/2021';
    let imageUrl = '';
    switch (ID) {
        case 59260:
            imageUrl = `${imageBaseUrl}/05/alison_courseware_intro_1610.jpg`;
            break;
        case 58949:
            imageUrl = `${imageBaseUrl}/05/alison_courseware_intro_2968.jpeg`;
            break;
        case 60012:
            imageUrl = `${imageBaseUrl}/06/3.jpg`;
            break;
        case 60097:
            imageUrl = `${imageBaseUrl}/06/1-1.jpg`;
            break;
        case 58871:
            imageUrl = `${imageBaseUrl}/04/alison_courseware_intro_1347.jpg`;
            break;
        case 59343:
            imageUrl = `${imageBaseUrl}/05/alison_courseware_intro_2219.jpg`;
            break;
        case 59060:
            imageUrl = `${imageBaseUrl}/05/alison_courseware_intro_1611.jpeg`;
            break;
        case 59655:
            imageUrl = `${imageBaseUrl}/06/alison_courseware_intro_2110.jpeg`;
            break;
        case 59032:
            imageUrl = `${imageBaseUrl}/05/alison_courseware_intro_2753.jpeg`;
            break;
        case 59683:
            imageUrl = `${imageBaseUrl}/06/alison_courseware_intro_2558.jpeg`;
            break;
        case 59971:
            imageUrl = `${imageBaseUrl}/06/1.jpg`;
            break;
        case 60199:
            imageUrl = `${imageBaseUrl}/06/3-1.jpg`;
            break;
        case 59996:
            imageUrl = `${imageBaseUrl}/06/2.jpg`;
            break;
        case 59380:
            imageUrl = `${imageBaseUrl}/05/alison_courseware_intro_1457.jpg`;
            break;
        case 58879:
            imageUrl = `${imageBaseUrl}/05/alison_courseware_intro_1361.jpeg`;
            break;
        case 60179:
            imageUrl = `${imageBaseUrl}/06/2-1.jpg`;
            break;
        case 59174:
            imageUrl = `${imageBaseUrl}/05/alison_courseware_intro_1972.jpeg`;
            break;
    
        default:
            break;
    }

    return imageUrl;
  }



const useStyles = createStyles((theme) => ({
    cardHeight: {
        height: 165
    },
    button: {
        background: `${colors.secondaryColorLight}`,
        color: theme.colors.dark[7],
        '&:hover': {
            background: `${colors.secondaryColorLight}`,
            opacity: 0.7
        }
    },
    loaderHeight: {
        height: 'calc(100vh - 150px)'
    }
}));


const Contact: NextPage = () => {
 const [apiData, setApiData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [activePage, setPage] = useState(1);
 const [totalPages, setTotalPages] = useState(1);
 const [courses, setCourses] = useState(1);
 const [buttonLoading, setButtonLoading] = useState(0);
 const { classes } = useStyles();


  const getCourses = async () => {
    setLoading(true);
    try {
        const { data } = await axios.get(`${urls.tutorLms}/courses?paged=${activePage}`);
        if (data.status_code === "success"){
            setApiData(data.data.posts);
            setTotalPages(data.data.total_page);
            setCourses(data.data.total_course);
            setLoading(false);
        }
    } catch (error) {
        console.log(error)
    }  
  }

  const onClick = (id: number) => {
    setButtonLoading(id);

  }

  useEffect(() => {
    getCourses();
  }, [activePage]);
  
  const item = apiData.map((element: any) => (
  
        <Grid.Col sm={6} md={4} key={element.ID}>
            <Card shadow="md" p="lg" radius="lg" withBorder>
                <Card.Section>
                   <Center>
                        <Image 
                            src={courseThumbnail(element.ID)}
                            width="400"
                            height="250"
                        />
                   </Center>
                </Card.Section>

                <Stack justify="space-between" className={classes.cardHeight}>
                    <Group position="apart" mt="sm" >
                        <Text weight={500}>{element.post_title}</Text>
                        <Badge color="dark" variant="light">
                            Price: 10,000 KES
                        </Badge>
                    </Group>

                    <Button 
                        variant="light" 
                        fullWidth  
                        radius="md" 
                        className={classes.button}
                        component='a'
                        href={`/courses/${element.ID}`}
                        onClick ={() => onClick(element.ID)}
                        loading = {buttonLoading === element.ID ? true : false}
                    >
                        See more
                    </Button>
                </Stack>
            </Card>
        </Grid.Col>
    
  ))

  

  return (
    <>
      <Head>
        <title>Luddoc | Courses</title>
        <meta name="description" content="Courses Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container>
            
           {loading ? (
            <Stack justify="center" className={classes.loaderHeight} align="center">
                <Loader variant="oval" color="dark" size="lg"/>
            </Stack>
           ): (
            <Box>
                <Group mb="xl" position="apart">
                    <Badge color="dark" variant="filled">{courses} Total Courses</Badge>
                    <Pagination page={activePage} onChange={setPage} total={totalPages} color='gray'/>
                </Group>
                <Grid>
                    {item}
                </Grid>
            </Box>
           )}
           <Center mt="md">
            <Pagination page={activePage} onChange={setPage} total={totalPages} color='gray'/>
           </Center>    
        </Container>
        <Box>
            <FooterLinks data={footerData} />
        </Box>
      </MainLayout>
    </>
  );
}

export default Contact;