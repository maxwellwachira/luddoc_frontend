import React from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  
  Group,
  PaperProps,
  Button,
 
  Anchor,
  Stack,
  Card,
  Center,
 
} from '@mantine/core';

import { useStyles } from './forgotPassword.styles';
import Image from 'next/image';


const ForgotPassword = (props: PaperProps) => {

    const { classes } = useStyles();
    
    const form = useForm({
        initialValues: {
          email: '',
        },
    
        validate: {
          email: (val) => /^\S+@\S+$/.test(val) && 'Invalid email'
        },
    });



  return (
    <Card  p="lg" radius="md" withBorder className={classes.wrapper}> 
        <Card.Section>
            <Center>
                <Image
                    src="/forgotpassword.svg"
                    height={360}
                    width={360}
                />
            </Center>
        </Card.Section>

        <form onSubmit={form.onSubmit(() => {})}>
            <Stack>

            <TextInput
                required
                label="Enter your Email"
                placeholder="hello@gmail.com"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && 'Invalid email'}
            />

            </Stack>

            <Group position="apart" mt="xl">
            <Anchor
                href='/auth/sign-in'
                color="dimmed"
                size="xs"
            >        
                Have you remembered your password? Login
            </Anchor>
            <Button type="submit" className={classes.button}>Submit</Button>
            </Group>
        </form>
    </Card>
    
  )
}

export default ForgotPassword;