import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Anchor,
  Stack,
  Notification,
  Box,
  Center,
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import { getCookie } from 'cookies-next';
import axios from 'axios';

import { useStyles } from './login.styles';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useAuthContext } from '../../context/authContextProvider';
import { urls } from '../../../../constants/urls';


const Login = () => {
  const { classes } = useStyles();
  const [enrolled, setEnrolled] = useState(false);
  const { form, handleSubmit, clearResponse, response, loading } = useLoginUser();
  const { auth, userMe } = useAuthContext();
  const router = useRouter();

  const isEnrolled = async () => {
    const token = getCookie('accessToken');
    try {
      const { data } = await axios.get(`${urls.baseUrl}/enrolment/me`, { headers: { Authorization: `Bear ${token}` } });
      if (data.exists) {
        setEnrolled(true);
        return true;
      } else {
        setEnrolled(false);
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (auth) {
      switch (userMe.role) {
        case "admin":
          router.push('/admin');
          break;
        case "tutor":
          router.push("/tutors/uploads");
          break;
        case "student":
          isEnrolled().then((res) => {
            if (res) return router.push('/students').then(() => router.reload());
            router.push('/courses').then(() => router.reload());
          });
          break;
        default:
          break;
      }
    }
  }, [userMe]);

  if (auth) return <></>;

  return (
    <Box className={classes.wrapper}>
      <div className={classes.card}>
        <Text className={classes.title}>
          Welcome <span className={classes.goldText}>Back</span>
        </Text>
        <Text className={classes.subtitle}>
          Sign in to continue your learning journey
        </Text>

        {response === "success" ? (
          <Notification icon={<IconCheck size={18} />} color="teal" title="Login Successful" onClose={clearResponse} mb="lg">
            Redirecting ...
          </Notification>
        ) : response ? (
          <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse} mb="lg">
            {response}
          </Notification>
        ) : null}

        <form onSubmit={form.onSubmit(() => handleSubmit())}>
          <Stack spacing="md">
            <TextInput
              required
              label="Email"
              placeholder="you@example.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              className={classes.input}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              className={classes.input}
            />
          </Stack>

          <Center mt="xs">
            <Anchor href="forgot-password" className={classes.link}>
              Forgot password?
            </Anchor>
          </Center>

          <Button type="submit" className={classes.button} loading={loading} fullWidth mt="xl">
            Sign In
          </Button>

          <Center mt="lg">
            <Anchor href="sign-up" className={classes.link}>
              Don't have an account? <span style={{ fontWeight: 600 }}>Register</span>
            </Anchor>
          </Center>
        </form>
      </div>
    </Box>
  );
};

export default Login;
