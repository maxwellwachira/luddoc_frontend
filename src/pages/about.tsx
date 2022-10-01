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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis, lorem sit amet fringilla gravida, tortor felis pharetra massa, id volutpat ipsum lorem nec urna. Integer eu libero hendrerit, rhoncus sem tristique, consequat quam. In in odio convallis augue ornare euismod a eget erat. Pellentesque sit amet mi ante. Quisque condimentum libero vel tincidunt pellentesque. Vestibulum lobortis ut magna lacinia condimentum. Proin elementum sit amet erat sit amet auctor. Proin blandit feugiat tristique.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis, lorem sit amet fringilla gravida, tortor felis pharetra massa, id volutpat ipsum lorem nec urna. Integer eu libero hendrerit, rhoncus sem tristique, consequat quam. In in odio convallis augue ornare euismod a eget erat. Pellentesque sit amet mi ante. Quisque condimentum libero vel tincidunt pellentesque. Vestibulum lobortis ut magna lacinia condimentum. Proin elementum sit amet erat sit amet auctor. Proin blandit feugiat tristique.
                    </Text>

                </Grid.Col>
            </Grid>
            <Grid my="xl">
                <Grid.Col md={6}>
                    <Text size={32} weight={600} style={{marginTop:20, color:`${colors.secondaryColor}`}}>
                       Our Vision
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis, lorem sit amet fringilla gravida, tortor felis pharetra massa, id volutpat ipsum lorem nec urna. Integer eu libero hendrerit, rhoncus sem tristique, consequat quam. In in odio convallis augue ornare euismod a eget erat. Pellentesque sit amet mi ante. Quisque condimentum libero vel tincidunt pellentesque. Vestibulum lobortis ut magna lacinia condimentum. Proin elementum sit amet erat sit amet auctor. Proin blandit feugiat tristique.
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