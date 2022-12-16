import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Anchor,
  Stack,
  Grid,
  Notification
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import { GoogleButton, TwitterButton } from '../../../../components/socialButtons/socialButtons';
import { useStyles } from './login.styles';
import Image from 'next/image';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useAuthContext } from '../../context/authContextProvider';
import axios from 'axios';
import { urls } from '../../../../constants/urls';
import { getCookie } from 'cookies-next';


interface EnrolmentData {
  totalEnrolments: number;
  totalPages: number;
  currentPage: number;
  enrolments: {
    id: string;
    CourseId: string;
    progress: string;
  }[]
};

const Login = (props: PaperProps) => {
  const [enrolmentData, setEnrolmentData] = useState<EnrolmentData | null>(null);
  const { classes } = useStyles();
  const router = useRouter()
  const { form, handleSubmit, clearResponse, response, userMeData, loading } = useLoginUser();

  const getEnrolments = async () => {
    let token = getCookie('accessToken');
    try {
      const { data } = await axios.get(`${urls.baseUrl}/enrolment/me`, { headers: { Authorization: `Bear ${token}` } });
      setEnrolmentData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //logout();
  }, []);

  const redirect = async () => {
    if (response === "success") {
      switch (userMeData?.role) {
        case 'student':
          const isEnrolled = await getEnrolments();
          if (isEnrolled.totalEnrolments > 0) {
            router.push('/students').then(() => router.reload());
          } else {
            router.push('/courses').then(() => router.reload());
          }
          break;
        case 'admin':
          router.push('/admin').then(() => router.reload());
          break;
        case 'tutor':
          router.push('/tutor/uploads').then(() => router.reload());
          break;
        default:
          break;
      }
    }
  }

  redirect();

  return (
    <Paper radius="md" p="xl" withBorder {...props} className={classes.wrapper} >
      <Grid>
        <Grid.Col md={6}>
          <Image
            src="/login.svg"
            height={450}
            width={400}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <Text size="lg" weight={500} style={{ marginTop: 20 }}>
            Welcome to Luddoc
          </Text>

          {/* <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group> */}

          <Divider label="Login with email" labelPosition="center" my="lg" />

          {response === "success" ?
            <Notification icon={<IconCheck size={18} />} color="teal" title="Login Successful" onClose={clearResponse}>
              Redirecting ...
            </Notification>
            : response ? (
              <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse}>
                {response}
              </Notification>
            ) : ""}

          <form onSubmit={form.onSubmit(() => handleSubmit())}>
            <Stack>

              <TextInput
                required
                label="Email"
                placeholder="hello@gmail.com"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && 'Invalid email'}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                error={form.errors.password && 'Password should include at least 6 characters'}
              />

            </Stack>

            <Group position="apart" mt="xl">
              <Anchor
                href='sign-up'
                color="dimmed"
                size="xs"
              >
                Don't have an account? Register
              </Anchor>
              <Button type="submit" className={classes.button} loading={loading}>Login</Button>
            </Group>
            <Anchor
              href='forgot-password'
              color="dimmed"
              size="xs"
            >
              Forgot Password?
            </Anchor>
          </form>
        </Grid.Col>
      </Grid>

    </Paper>
  )
}

export default Login