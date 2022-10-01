import { Box, Button, Container, Divider, Grid, Group, Stack, Text, Textarea, TextInput } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useForm } from '@mantine/form';

import MainLayout from '../layouts/mainLayout/mainLayout';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';
import { colors } from '../constants/colors';


const Contact: NextPage = () => {

    const form = useForm({
        initialValues: {
          email: '',
          subject: '',
          message: '',
        },
        validate: {
          email: (val) => /^\S+@\S+$/.test(val) && 'Invalid email',
        },
    });

  return (
    <>
      <Head>
        <title>Luddoc | Contact Us</title>
        <meta name="description" content="Contact us Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container>
            <Grid>
                <Grid.Col md={6}>
                    <Image 
                        src="/Contact.gif"
                        height={450}
                        width={400}
                    />
                </Grid.Col>
                <Grid.Col md={6}>
                    <Text size="lg" weight={500} style={{marginTop:20}}>
                        Get in touch
                    </Text>

                    <Divider label="Talk to us" labelPosition="center" my="lg" />

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

                            <TextInput
                                required
                                label="Subject"
                                placeholder="How to enroll"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('subject', event.currentTarget.value)}
                            />

                            <Textarea
                                required
                                label="Message"
                                placeholder="Enter your message"
                                value={form.values.message}
                                onChange={(event) => form.setFieldValue('message', event.currentTarget.value)}
                            />

                        </Stack>

                        <Group position="apart" mt="xl">
                            <Button type="submit" style={{background: `${colors.secondaryColor}`}}>Send</Button>
                        </Group>
                    </form>
                </Grid.Col>
            </Grid>
        </Container>
        <Box>
            <FooterLinks data={footerData}/>
        </Box>
      </MainLayout>
    </>
  );
}

export default Contact;