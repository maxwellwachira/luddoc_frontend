import { useState } from 'react';
import { Box, Button, Container, Divider, Grid, Group, Stack, Text, Textarea, TextInput, Notification } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { IconCheck, IconX } from '@tabler/icons';

import MainLayout from '../layouts/mainLayout/mainLayout';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';
import { colors } from '../constants/colors';
import { urls } from '../constants/urls';

const Contact: NextPage = () => {
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false);
    const  initialValues = {
        email: '',
        subject: '',
        message: '',
    };

    const form = useForm({
        initialValues,
        validate: {
            email: (value) => (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSubmit = async() => {
        setLoading(true);
        if(JSON.stringify(form.errors) === "{}"){
            try {
                const { data } = await axios.post(`${urls.baseUrl}/email/send-contact`, form.values);
                if(data.message === 'success') {
                    setResponse(data.message);
                    setLoading(false);
                    form.setValues(initialValues);
                }
            } catch (error: any) {
               console.log(error);
               setResponse('error')
            }
        }
    }

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
                    {response === 'success' ? (
                        <Notification icon={<IconCheck size={18} />} color="teal" title="Success" onClose={() => setResponse('')}>
                            We have received your Message, we will get back to you shortly
                        </Notification>
                    ): response ? (
                        <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={() => setResponse('')}>
                            There was an error in sending the message, Try again later
                        </Notification>
                    ): ''}
                    <form onSubmit={form.onSubmit(() => {handleSubmit()})}>
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
                                value={form.values.subject}
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
                            <Button type="submit" style={{background: `${colors.secondaryColor}`}} loading={loading}>Send</Button>
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