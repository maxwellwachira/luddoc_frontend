import { Box, Center, Container, Grid, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';

import MainLayout from '../layouts/mainLayout/mainLayout';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';
import { colors } from '../constants/colors';
import missionImage from '../assets/mission.jpg';
import visionImage from '../assets/vision.jpg';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | About Us</title>
        <meta name="description" content="About Luddoc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container>
            <Text size={35} weight={600} style={{marginTop:20, color:`${colors.secondaryColor}`}}>About Us</Text>
            <Text>
                <span style={{ fontWeight: 550}}>Luddoc Skills For Life Technical Institute</span> is a modern training facility offering locally and internationally accredited courses. Our focus is taping the informal sector, empowering and equipping the students with refined skills and knowledge to uplift their living standards and improve the community well-being. 
            </Text>
            <Text>
                We pride in bringing out the best in every student, the positive energy enhanced through our team of experts and the impact realised in our community. 
            </Text>
            <Text>
                We are committed to growth and empower our student to achieve their full potential, create self awareness and promote happiness within self.
            </Text>
            <Grid my="xl">
                <Grid.Col md={6}>
                    <Center>
                        <Image 
                            src={missionImage}
                            height={300}
                            width={350}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col md={6}>
                    <Text size={32} weight={600} style={{marginTop:20, color:`${colors.secondaryColor}`}}>
                       Our Mission
                    </Text>
                    <Text>
                    Our Mission is to create awareness and empower the informal skills within our society that uplifts and educates the students to thrive and earn a living through services offered. This is achieved through morden approach to learning, state of the art facilities, licensed and qualified team of institution management, accredited courses and programmes. 
                    </Text>

                </Grid.Col>
            </Grid>
            <Grid my="xl">
                <Grid.Col md={6}>
                    <Text size={32} weight={600} style={{marginTop:20, color:`${colors.secondaryColor}`}}>
                       Our Vision
                    </Text>
                    <Text>
                        Our vision is to be the pioneers of change we want to see in the community, through teaching and demonstrating skills for life that brings out happiness and well-being in the society. 
                    </Text>
                    <Text weight={700} mt="lg">
                        JIJENGE, JIAMINI, JIENJOY.
                    </Text>

                </Grid.Col>
                <Grid.Col md={6}>
                    <Center>
                        <Image 
                            src={visionImage}
                            height={350}
                            width={430}
                        />
                    </Center>
                </Grid.Col>
            </Grid>
        </Container>
        <Box>
            <FooterLinks data={footerData}/>
        </Box>
      </MainLayout>
    </>
  );
}

export default About;