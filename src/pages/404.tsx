import {  Button, Center, Container, createStyles, Stack, Text } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';

import { colors } from '../constants/colors';

const useStyles = createStyles((theme) => ({
  button: {
    background: `${colors.secondaryColor}`,
 

    '&:hover': {
      background: `${colors.secondaryColor}`,
      opacity: 0.7
    }
  }
}));

const Custom404  = () => {
  const { classes } = useStyles();
    return (
      <>
        <Head>
          <title>Luddoc | 404</title>
          <meta name="description" content="Page not Found" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
     
          <Container mt={40}>
            <Center>
              <Stack>
                <Center><Text weight={600}>PAGE NOT FOUND</Text></Center>
                <Button
                  component='a'
                  href='/'
                  className={classes.button}
                  radius="xl"
                  size='md'
                >
                  Go Back to Home
                </Button>
                <Image 
                  src="/404.gif"
                  height={600}
                  width={600}
                />

              </Stack>
            </Center>
           
          </Container>
    

     </>
    );

}

export default Custom404;