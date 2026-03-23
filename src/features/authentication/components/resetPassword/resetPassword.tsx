import React from 'react';
import {
  PasswordInput,
  Text,
  Button,
  Stack,
  Notification,
  Box,
} from '@mantine/core';
import { IconCheck, IconShieldLock, IconX } from '@tabler/icons';

import { useStyles } from './resetPassword.styles';
import { usePasswordReset } from '../../hooks/usePasswordReset';

const ResetPassword = () => {
  const { classes } = useStyles();
  const { response, form, handleSubmit, clearResponse } = usePasswordReset();

  return (
    <Box className={classes.wrapper}>
      <div className={classes.card}>
        <div className={classes.iconBox}>
          <IconShieldLock size={28} color="white" stroke={1.8} />
        </div>
        <Text className={classes.title}>
          Reset <span className={classes.goldText}>Password</span>
        </Text>
        <Text className={classes.subtitle}>
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
      </div>
    </Box>
  );
};

export default ResetPassword;
