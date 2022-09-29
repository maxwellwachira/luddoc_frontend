import React from 'react';
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
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';

import { GoogleButton, TwitterButton } from '../../../../components/socialButtons/socialButtons';

import { useStyles } from './register.styles';


const Register = (props: PaperProps) => {

    const { classes } = useStyles();
    
    const form = useForm({
        initialValues: {
          email: '',
          name: '',
          password: '',
          terms: true,
        },
    
        validate: {
          email: (val) => /^\S+@\S+$/.test(val) && 'Invalid email',
          password: (val) => val.length >= 6 && 'Password should include at least 6 characters',
        },
    });



  return (
    <Paper radius="md" p="xl" withBorder {...props} className={classes.wrapper}>
      <Text size="lg" weight={500}>
        Welcome to Luddoc, Register with
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
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            />
          

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


            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            href='/sign-in'
            color="dimmed"
            size="xs"
          >        
              Already have an account? Login
          </Anchor>
          <Button type="submit">Register</Button>
        </Group>
      </form>
    </Paper>
  )
}

export default Register;