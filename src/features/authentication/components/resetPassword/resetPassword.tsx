import React from 'react';
import Image from 'next/image';
import {
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Stack,
  Grid,
  Notification
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';

import { useStyles } from './resetPassword.styles';
import { usePasswordReset } from '../../hooks/usePasswordReset';

const ResetPassword = (props: PaperProps) => {
  const { classes } = useStyles();
  const { response, form, handleSubmit, clearResponse  } = usePasswordReset();
    
  return (
    <Paper radius="md" p="xl" withBorder {...props} className={classes.wrapper}>
      <Grid>
          <Grid.Col md={6}>
            <Text size="lg" weight={500} mt="xl">
             Reset your password
            </Text>

            <Divider my="xl" />
            {response === 'success' ? (
                <Notification icon={<IconCheck size={18} />} color="teal" title="Password Reset Successful" onClose={clearResponse} my="lg">
                 You can now log in with your new password
                </Notification>
              ): response ? (
                <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse} my="lg">
                  {response}
                </Notification>
              ): ''
            }
            <form onSubmit={form.onSubmit(() => handleSubmit())}>
              <Stack my="xl">

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  {...form.getInputProps('password')}
                />

                <PasswordInput
                  required
                  label="Confirm Password"
                  placeholder="Confirm password"
                  {...form.getInputProps('confirmPassword')}
                />

              </Stack>

              <Group position="apart" mt="xl">
                <Button type="submit" className={classes.button}>Reset Password</Button>
              </Group>
            </form>
          </Grid.Col>
          <Grid.Col md={6}>
            <Image
                src="/resetpassword.svg"
                height={400}
                width={400}
            />
          </Grid.Col>
      </Grid>
      
    </Paper>
  )
}

export default ResetPassword;