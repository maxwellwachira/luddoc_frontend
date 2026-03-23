import React from 'react';
import {
  TextInput,
  PasswordInput,
  Text,
  Button,
  Checkbox,
  Anchor,
  Stack,
  Grid,
  Notification,
  Center,
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';

import AuthLayout from '../../../../layouts/authLayout/authLayout';
import { useStyles } from '../../../../layouts/authLayout/authLayout.styles';
import { useRegisterUser } from '../../hooks/useRegisterUser';

const Register = () => {
  const { classes } = useStyles();
  const { form, response, loading, handleSubmit, clearResponse } = useRegisterUser();

  return (
    <AuthLayout>
      <Text className={classes.formTitle}>
        Create Your <span className={classes.goldText}>Account</span>
      </Text>
      <Text className={classes.formSubtitle}>
        Join Luddoc and start your learning journey today
      </Text>

      {response === 'success' ? (
        <Notification icon={<IconCheck size={18} />} color="teal" title="Registration Successful" onClose={clearResponse} mb="lg">
          Check your email to activate your account
        </Notification>
      ) : response ? (
        <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse} mb="lg">
          {response}
        </Notification>
      ) : null}

      <form onSubmit={form.onSubmit(() => handleSubmit())}>
        <Stack spacing="md">
          <Grid gutter="md">
            <Grid.Col sm={6}>
              <TextInput
                required
                label="First Name"
                placeholder="John"
                value={form.values.firstName}
                onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
                className={classes.input}
              />
            </Grid.Col>
            <Grid.Col sm={6}>
              <TextInput
                required
                label="Last Name"
                placeholder="Doe"
                value={form.values.lastName}
                onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
                className={classes.input}
              />
            </Grid.Col>
          </Grid>

          <TextInput
            required
            label="Email"
            placeholder="you@example.com"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            className={classes.input}
          />

          <TextInput
            required
            label="Phone Number"
            placeholder="0712 345 678"
            value={form.values.phoneNumber}
            onChange={(event) => form.setFieldValue('phoneNumber', event.currentTarget.value)}
            className={classes.input}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="At least 6 characters"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            className={classes.input}
          />

          <Checkbox
            label="I accept terms and conditions"
            checked={form.values.terms}
            disabled
            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
          />
        </Stack>

        <Button type="submit" className={classes.button} loading={loading} fullWidth mt="xl">
          Create Account
        </Button>

        <Center mt="lg">
          <Anchor href="/auth/sign-in" className={classes.link}>
            Already have an account? <span style={{ fontWeight: 600 }}>Sign In</span>
          </Anchor>
        </Center>
      </form>
    </AuthLayout>
  );
};

export default Register;
