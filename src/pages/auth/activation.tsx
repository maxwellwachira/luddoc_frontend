import type { NextPage } from 'next';
import Head from 'next/head';
import { Alert, Button, Text } from '@mantine/core';
import { IconCheck, IconAlertCircle } from '@tabler/icons';

import AuthLayout from '../../layouts/authLayout/authLayout';
import { useStyles } from '../../layouts/authLayout/authLayout.styles';
import { useActivateUser } from '../../features/authentication/hooks/useActivateUser';

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
      <AuthLayout>
        <Text className={classes.formTitle} style={{ textAlign: 'center' }}>
          Account <span className={classes.goldText}>Activation</span>
        </Text>
        <Text className={classes.formSubtitle} style={{ textAlign: 'center' }}>
          Verifying your account status
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
              className={classes.button}
              onClick={onClick}
              loading={!response}
              fullWidth
              mt="lg"
            >
              Resend Activation Link
            </Button>
          </>
        ) : null}
      </AuthLayout>
    </>
  );
};

export default Activation;
