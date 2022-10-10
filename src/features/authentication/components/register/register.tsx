import React from 'react';
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
  Grid,
  Notification
} from '@mantine/core';
import { useStyles } from './register.styles';
import Image from 'next/image';
import { IconCheck, IconX } from '@tabler/icons';

import  { useRegisterUser } from '../../hooks/useRegisterUser';

const Register = (props: PaperProps) => {
  const { classes } = useStyles();
  const { form, response, loading, handleSubmit, clearResponse } = useRegisterUser();

  return (
    <Paper radius="md" p="xl" withBorder {...props} className={classes.wrapper}>
      <Grid>
        <Grid.Col md={6}>
          <Image
            src="/register1.svg"
            height={550}
            width={450}
          />
          </Grid.Col>
          <Grid.Col md={6}>
            <Text size="lg" weight={500}>
              Register to Luddoc,
            </Text>
            {response === 'success' ? (
                <Notification icon={<IconCheck size={18} />} color="teal" title="Registration Successful" onClose={clearResponse}>
                  Check email to activate your account
                </Notification>
            ): response ? (
              <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse}>
                {response}
              </Notification>
            ): ''}
            <Divider label="register" labelPosition="center" my="lg" />

            <form onSubmit={form.onSubmit(() => handleSubmit())}>
              <Stack>
                  <Grid>
                    <Grid.Col md = {6}>
                      <TextInput
                        required
                        label="First Name"
                        placeholder="Your first name"
                        value={form.values.firstName}
                        onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
                      />
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <TextInput
                        required
                        label="Last Name"
                        placeholder="Your last name"
                        value={form.values.lastName}
                        onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
                      />
                    </Grid.Col>
                  </Grid>

                <TextInput
                  required
                  label="Email"
                  placeholder="hello@gmail.com"
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                  error={form.errors.email && 'Invalid email'}
                />

                <TextInput
                  required
                  label="Phone Number"
                  placeholder="254703519593"
                  value={form.values.phoneNumber}
                  onChange={(event) => form.setFieldValue('phoneNumber', event.currentTarget.value)}
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
                    disabled
                    onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                  />
              </Stack>

              <Group position="apart" mt="xl">
                <Anchor
                  href='/auth/sign-in'
                  color="dimmed"
                  size="xs"
                >        
                    Already have an account? Login
                </Anchor>
                <Button type="submit" className={classes.button} loading={loading}>Register</Button>
              </Group>
            </form>
          </Grid.Col>
      </Grid>
      
    </Paper>
  )
}

export default Register;