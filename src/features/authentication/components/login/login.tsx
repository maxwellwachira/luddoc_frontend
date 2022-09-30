import React from 'react';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
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
  Container,
} from '@mantine/core';

import { GoogleButton, TwitterButton } from '../../../../components/socialButtons/socialButtons';

import { useStyles } from './login.styles';
import Image from 'next/image';


const Login = (props: PaperProps) => {

    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
          email: '',
          password: '',
          terms: true,
        },
    
        validate: {
          email: (val) => /^\S+@\S+$/.test(val) && 'Invalid email',
          password: (val) => val.length >= 6 && 'Password should include at least 6 characters',
        },
    });



  return (
    <Paper radius="md" p="xl" withBorder {...props} className={classes.wrapper} >
      <Grid>
        <Grid.Col md={6}>
          <Image 
            src="/Login.gif"
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

          <form onSubmit={form.onSubmit(() => {})}>
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
          </form>
        </Grid.Col>
      </Grid>
    
    </Paper>
  )
}

export default Login