import { Button, Center, Container, createStyles, Stack, Text } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';

import { colors } from '../constants/colors';

const useStyles = createStyles((theme) => ({
  button: {
    background: `${colors.secondaryColor}`,
    maxWidth: 400,
    '&:hover': {
      background: `${colors.secondaryColor}`,
      opacity: 0.7
    }
  }
}));

const Custom403 = () => {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Luddoc | 403</title>
        <meta name="description" content="Forbiden Error Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container mt={40}>
        <Stack justify="center" align="center">
          <Text weight={600}>Forbiden - Not allowed. Action has been noted and admin will be notified</Text>
          <Button
            component='a'
            href='/'
            className={classes.button}
            radius={15}
            size='md'
            my="lg"
          >
            Go Back to Home
          </Button>
          <Image
            src="/forbidden.svg"
            height={450}
            width={450}
          />

        </Stack>

      </Container>


    </>
  );

}

export default Custom403;