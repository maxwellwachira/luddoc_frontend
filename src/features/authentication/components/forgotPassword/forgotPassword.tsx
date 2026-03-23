import React from 'react';
import {
  TextInput,
  Text,
  Button,
  Anchor,
  Stack,
  Notification,
  Center,
} from '@mantine/core';
import { IconCheck, IconLock, IconX } from '@tabler/icons';

import AuthLayout from '../../../../layouts/authLayout/authLayout';
import { useStyles } from '../../../../layouts/authLayout/authLayout.styles';
import { useForgetPassword } from '../../hooks/useForgetPassword';

const ForgotPassword = () => {
  const { classes } = useStyles();
  const { response, form, handleSubmit, clearResponse } = useForgetPassword();

  return (
    <AuthLayout>
      <div className={classes.iconBox}>
        <IconLock size={26} color="white" stroke={1.8} />
      </div>
      <Text className={classes.formTitle} style={{ textAlign: 'center' }}>
        Forgot <span className={classes.goldText}>Password</span>?
      </Text>
      <Text className={classes.formSubtitle} style={{ textAlign: 'center' }}>
        Enter your email and we'll send you a reset link.
      </Text>

      {response === 'success' ? (
        <Notification icon={<IconCheck size={18} />} color="teal" title="Link Sent" onClose={clearResponse} mb="lg">
          Check your email for the password reset link
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
        </Stack>

        <Button type="submit" className={classes.button} fullWidth mt="xl">
          Send Reset Link
        </Button>

        <Center mt="lg">
          <Anchor href="/auth/sign-in" className={classes.link}>
            Remember your password? <span style={{ fontWeight: 600 }}>Sign In</span>
          </Anchor>
        </Center>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
