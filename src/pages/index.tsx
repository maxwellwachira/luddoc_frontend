import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Anchor, BackgroundImage, Box, Card, Center, Container, createStyles, Footer, Grid, Space, Text } from '@mantine/core';


import MainLayout from '../layouts/mainLayout/mainLayout';
import volunteerImage from '../assets/volunteer.jpg';
import studenImage from '../assets/learn.png';
import { colors } from '../constants/colors'
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';

const useStyles = createStyles((theme) => ({
  cardWidth: {
    maxWidth: 300
  },

  footer: {
    position: 'absolute',
    top: 1750,
    left: 0,
    right: 0,
    zIndex:11,
    [theme.fn.smallerThan("md")]: {
      top: 2950,
    },
    [theme.fn.smallerThan("sm")]: {
      top: 2650,
    }
  },

  goldText: {
    color: `${colors.secondaryColor}`
  },

  heading: {
    fontSize: '35px',
    fontWeight: 700
  },

  headingTwo: {
    fontSize: '30px',
    fontWeight: 600
  },

  howToJoin: {
    position: 'absolute',
    top: 1300,
    left: 0,
    right:0,
    [theme.fn.smallerThan("md")]: {
      top: 1800,
    },
    [theme.fn.smallerThan("sm")]: {
      top: 1750,
    }
  },

  startButton: {
    backgroundColor: `${colors.secondaryColor}`,
    border: `2px solid ${colors.secondaryColor}`,
    display: "inline-block",
    padding: "5px 12px",
    textAlign: "center",
    color:  theme.colors.gray[0],
    fontWeight: 'bold',
    margin: '30px 0',
    boxShadow: '0 6px 10px 0 rgba(0,0,0,0.2)',
  

    '&:hover': {
       opacity: 0.7,
       textDecoration: 'none'
        
    }
  },

  waveWrapper: {
    position: 'absolute',
    top: 370,
    left:0,
    right:0,
    zIndex:-1,
    [theme.fn.smallerThan("md")]: {
      top: 450,
    },
    [theme.fn.smallerThan("sm")]: {
      top: 400,
    }
  }
 
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Luddoc Skills For Life</title>
        <meta name="description" content="Luddoc Skills For Life" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Box component='div'>
          <Container>
            <Grid >
              <Grid.Col md={4}>
                <Text className={classes.heading}><span className={classes.goldText}>L</span>uddoc <span className={classes.goldText}>S</span>kills <span className={classes.goldText}>F</span>or <span className={classes.goldText}>L</span>ife Technical Institue</Text>
                <Text mt="md">Are you interseted in Care Giving and Self Development Skills? </Text>
                <Text mt="md">Luddoc Skills For Life Technical Institute is a modern training facility offering locally and internationally accredited courses in Care Giving, Self Development and so much more. </Text>
                <Text mt="md">Don't wait, enrol today to better your life!</Text>
                <Anchor href='/courses' className={classes.startButton}>Start Now</Anchor>
              </Grid.Col>
              <Grid.Col md={8}>
                <Center>
                  <Image 
                    src="/hero2.svg"
                    height={530}
                    width={650}
                  />
                </Center>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
        <Box component='div'>
          <BackgroundImage
            src="/wave.svg"
            radius="sm"
            component="div"
            className={classes.waveWrapper}
          >

            <Container>
              <Box style={{marginTop: 400}}></Box>
              <Center>
                <Text className={`${classes.heading} ${classes.goldText}`}>Why Join Luddoc?</Text>
              </Center>
              <Box style={{marginTop: 30}}></Box>
              <Grid gutter="lg">
                <Grid.Col md={5}>
                 <Center>
                  <Image 
                      src={studenImage}
                    />
                 </Center>
                </Grid.Col>
                <Grid.Col md={7}>
                  <Text>
                    At Luddoc Skills For Life Technical Institute,
                    we pride in bringing out the best in every student through the positive energy enhanced through our team of experts and the impact realised in our community.
                  </Text>
                  <Text>We offer the following courses: </Text>
                  <ul>
                    <li>Care Giving</li>
                    <li>Patients Care</li>
                    <li>Counseling Psychology</li>
                    <li>Community Development & Social Work</li>
                    <li>Front Office</li>
                    <li>Computer Packages</li>
                  </ul>
                  <Anchor href='/courses' className={classes.startButton}>Start Now</Anchor>
                </Grid.Col>
              </Grid>
            </Container>
          </BackgroundImage>
        </Box>
        <Box component='div' className={classes.howToJoin}>
          <Container>
            <Box style={{marginTop: 50}}></Box>
            <Center>
              <Text className={`${classes.heading} ${classes.goldText}`}>How to Join Luddoc?</Text>
            </Center>
           <Box style={{marginTop: 50}}></Box>
            <Grid gutter="xl">
              <Grid.Col md={4}>
                <Center>
                  <Card shadow="lg" p="lg" radius="md" withBorder style={{background:`${colors.secondaryColorLight}`}} className={classes.cardWidth}>
                    <Card.Section style={{margin: "20px 0"}}>
                    <Center>
                      <Image 
                          src="/register.svg"
                          height={60}
                          width={70}
                      />
                    </Center>
                    </Card.Section>
                    <Center>
                      <Text className={`${classes.headingTwo} ${classes.goldText}`}>Register</Text>
                    </Center>
                    <Text size="sm" color="dimmed">
                    Onboard to the platform then look for a course of your choice and enroll
                    </Text>
                  </Card>
                </Center>
              </Grid.Col>
              <Grid.Col md={4}>
                <Center>
                  <Card shadow="lg" p="lg" radius="md" withBorder style={{background:`${colors.secondaryColorLight}`}} className={classes.cardWidth}>
                    <Card.Section style={{margin: "20px 0"}}>
                    <Center>
                      <Image 
                          src="/readme.svg"
                          height={60}
                          width={70}
                      />
                    </Center>
                    </Card.Section>
                    <Center>
                      <Text className={`${classes.headingTwo} ${classes.goldText}`}>Study</Text>
                    </Center>
                    <Text size="sm" color="dimmed">
                      Study at your own pace depending on your availability
                    </Text>
                  </Card>
                </Center>
                
              </Grid.Col>
              <Grid.Col md={4}>
                <Center>
                  <Card shadow="lg" p="lg" radius="md" withBorder style={{background:`${colors.secondaryColorLight}`}} className={classes.cardWidth}>
                    <Card.Section style={{margin: "20px 0"}}>
                    <Center>
                      <Image 
                          src="/graduation.svg"
                          height={60}
                          width={70}
                      />
                    </Center>
                    </Card.Section>
                    <Center>
                      <Text className={`${classes.headingTwo} ${classes.goldText}`}>Get Certified</Text>
                    </Center>
                    <Text size="sm" color="dimmed">
                     Upon completion of the course, you will get a digital copy of the certificate
                    </Text>
                  </Card>
                </Center>
              </Grid.Col>
            </Grid>
          </Container>
          <Space h={80} />
        </Box>

        <Box className={classes.footer}>
          <FooterLinks data={footerData}/>
        </Box>
      </MainLayout>
     
       
    
    </>
  )
}

export default Home
