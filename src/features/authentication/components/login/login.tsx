import React from 'react';
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
import { IconX } from '@tabler/icons';
import { GoogleButton, TwitterButton } from '../../../../components/socialButtons/socialButtons';
import { useStyles } from './login.styles';
import Image from 'next/image';
import { useLoginUser } from '../../hooks/useLoginUser';


const Login = (props: PaperProps) => {
  const { classes } = useStyles();
  const router = useRouter()
  const { form, handleSubmit, clearResponse, response, userMeData } = useLoginUser();

  if (response === "success") {
    switch (userMeData?.role) {
      case 'student':
        router.push('/student')
        break;
      case 'admin':
        router.push('/admin')
        break;
      case 'tutor':
        router.push('/tutor')
        break;
      default:
        break;
    }
  }

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
          <Text size="lg" weight={500} style={{marginTop:20}}>
            Welcome to Luddoc, Login with
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group>

          <Divider label="Or continue with email" labelPosition="center" my="lg" />

          {response ? (
            <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse}>
            {response}
          </Notification>
          ): ""}  

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
              <Button type="submit" className={classes.button}>Login</Button>
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