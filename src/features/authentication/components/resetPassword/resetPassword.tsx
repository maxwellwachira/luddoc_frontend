import React from 'react';
import { useForm } from '@mantine/form';
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
} from '@mantine/core';


import { useStyles } from './resetPassword.styles';
import Image from 'next/image';


const ResetPassword = (props: PaperProps) => {

    const { classes } = useStyles();
    
    const form = useForm({
        initialValues: {
          password: '',
          confirmPassword: ''
        },
    
        validate: {
          password: (val) => val.length >= 6 && 'Password should include at least 6 characters',
        },
    });

  return (
    <Paper radius="md" p="xl" withBorder {...props} className={classes.wrapper}>
      <Grid>
          <Grid.Col md={6}>
            <Text size="lg" weight={500} mt="xl">
             Reset your password
            </Text>

            <Divider my="xl" />

            <form onSubmit={form.onSubmit(() => {})}>
              <Stack my="xl">

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                  error={form.errors.password && 'Password should include at least 6 characters'}
                />

                <PasswordInput
                  required
                  label="Confirm Password"
                  placeholder="Confirm password"
                  value={form.values.confirmPassword}
                  onChange={(event) => form.setFieldValue('confirmPassword', event.currentTarget.value)}
                  error={form.errors.password && 'Password should include at least 6 characters'}
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