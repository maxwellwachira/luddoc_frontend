import React from 'react';
import {
  PasswordInput,
  Text,
  Button,
  Stack,
  Notification,
} from '@mantine/core';
import { IconCheck, IconShieldLock, IconX } from '@tabler/icons';

import AuthLayout from '../../../../layouts/authLayout/authLayout';
import { useStyles } from '../../../../layouts/authLayout/authLayout.styles';
import { usePasswordReset } from '../../hooks/usePasswordReset';

const ResetPassword = () => {
  const { classes } = useStyles();
  const { response, form, handleSubmit, clearResponse } = usePasswordReset();

  return (
    <AuthLayout>
      <div className={classes.iconBox}>
        <IconShieldLock size={26} color="white" stroke={1.8} />
      </div>
      <Text className={classes.formTitle} style={{ textAlign: 'center' }}>
        Reset <span className={classes.goldText}>Password</span>
      </Text>
      <Text className={classes.formSubtitle} style={{ textAlign: 'center' }}>
        Choose a strong new password for your account.
      </Text>

      {response === 'success' ? (
        <Notification icon={<IconCheck size={18} />} color="teal" title="Password Reset Successful" onClose={clearResponse} mb="lg">
          You can now sign in with your new password
        </Notification>
      ) : response ? (
        <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse} mb="lg">
          {response}
        </Notification>
      ) : null}

      <form onSubmit={form.onSubmit(() => handleSubmit())}>
        <Stack spacing="md">
          <PasswordInput
            required
            label="New Password"
            placeholder="At least 6 characters"
            {...form.getInputProps('password')}
            className={classes.input}
          />
          <PasswordInput
            required
            label="Confirm Password"
            placeholder="Repeat your password"
            {...form.getInputProps('confirmPassword')}
            className={classes.input}
          />
        </Stack>

        <Button type="submit" className={classes.button} fullWidth mt="xl">
          Reset Password
        </Button>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
