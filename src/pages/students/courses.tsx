import { useEffect, useState } from 'react';
import { ActionIcon, Badge, Button, Card, Center, Container, createStyles, Grid, Group, RingProgress, Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { StudentLayout } from '../../layouts/studentLayout/studentLayout';
import { colors } from '../../constants/colors';
import moneyImage from '../../assets/money.jpg';
import tutorImage from '../../assets/tutor.jpg';
import { IconBook, IconSchool, IconTrophy } from '@tabler/icons';
import { courseThumbnail } from '../courses';


const useStyles = createStyles((theme) => ({
    cardHeight: {
        height: 240
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

const apiData = [
    {ID: 59260, progress: 40, title: 'Caregiving Skills - Dementia Care'}, {ID: 58949, progress: 10, title: 'CRP,AED and First Aid'}
]

interface ApiData {
    ID: number;
    progress: number;
    title: string;
}

const Certificates: NextPage = () => {
    const { classes } = useStyles();
    const [buttonLoading, setButtonLoading] = useState(0);

    const onClick = (id: number) => {
        setButtonLoading(id);
    
    }

    const item = apiData.map((element: ApiData) => (
  
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

                <Stack justify="space-between" className={classes.cardHeight} align="center">
                    <Text mt="md">
                        {element.title}
                    </Text>
                    <RingProgress 
                         sections={[{ value: Number(`${element.progress}`), color: 'green' }]}
                         label={
                           <Text color="green" weight={700} align="center" size="xl">
                            {element.progress}%
                           </Text>
                         }
                    />

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
                        continue
                    </Button>
                </Stack>
            </Card>
        </Grid.Col>
    
  ))


    return (
        <StudentLayout>
            <Container>
                <Text
                    my="xl" 
                    weight={600} 
                    size={25} 
                    color={`${colors.secondaryColor}`}
                >
                    My Courses
                </Text>
                <Grid>
                    {item}
                </Grid>
            </Container>
        </StudentLayout>
    )
}

export default Certificates;