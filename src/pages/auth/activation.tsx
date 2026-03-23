import type { NextPage } from 'next';
import Head from 'next/head';
import { Alert, Box, Button, Center, Container, createStyles, Text } from '@mantine/core';
import { IconCheck, IconAlertCircle } from '@tabler/icons';

import MainLayout from '../../layouts/mainLayout/mainLayout';
import { useActivateUser } from '../../features/authentication/hooks/useActivateUser';
import { colors } from '../../constants/colors';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.colorScheme === 'light'
      ? `linear-gradient(165deg, #FFFFFF 0%, ${colors.secondaryColorLight} 100%)`
      : theme.colors.dark[7],
    padding: '60px 20px',
  },
  card: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
    borderRadius: 20,
    padding: '48px 40px',
    width: '100%',
    maxWidth: 480,
    border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[4]}`,
    position: 'relative' as const,
    overflow: 'hidden',
    textAlign: 'center' as const,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: `linear-gradient(90deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
      borderRadius: '20px 20px 0 0',
    },
    [theme.fn.smallerThan('sm')]: {
      padding: '36px 24px',
    },
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    marginBottom: 16,
  },
  goldText: {
    color: colors.secondaryColor,
  },
  resendButton: {
    backgroundColor: colors.primaryColor,
    borderRadius: 30,
    height: 46,
    fontSize: 15,
    fontWeight: 600,
    marginTop: 16,
    '&:hover': {
      backgroundColor: colors.primaryColorLight,
    },
  },
}));

const Activation: NextPage = () => {
  const { classes } = useStyles();
  const { buttonClicked, response, onClick } = useActivateUser();

  return (
    <>
      <Head>
        <title>Luddoc | Account Activation</title>
        <meta name="description" content="Activate your Luddoc account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Box className={classes.wrapper}>
          <div className={classes.card}>
            <Text className={classes.title}>
              Account <span className={classes.goldText}>Activation</span>
            </Text>

            {response === 'success' ? (
              <Alert icon={<IconCheck size={16} />} title="Success" color="green" radius="md">
                {buttonClicked
                  ? 'Activation link has been sent. Check your email.'
                  : 'Account activation was successful. You can now sign in.'}
              </Alert>
            ) : response ? (
              <>
                <Alert icon={<IconAlertCircle size={16} />} title="Activation Failed" color="red" radius="md">
                  {response}
                </Alert>
                <Button
                  className={classes.resendButton}
                  onClick={onClick}
                  loading={!response}
                  fullWidth
                >
                  Resend Activation Link
                </Button>
              </>
            ) : null}
          </div>
        </Box>
      </MainLayout>
    </>
  );
};

export default Activation;
