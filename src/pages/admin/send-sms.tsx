import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Badge, Button, Center, Container, createStyles, Grid, Group, Paper, Radio, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { AdminLayout } from '../../layouts/adminLayout/adminLayout';
import { colors } from '../../constants/colors';


const useStyles = createStyles((theme) => ({
    button: {
        background: `${colors.secondaryColor}`,

        '&:hover': {
            background: `${colors.secondaryColor}`,
            opacity: 0.7
        }
    },

}));

const Tutors: NextPage = () => { 
    const { classes } = useStyles();
    const form = useForm({
        initialValues: {
          recipients: '',
          topic: '',
          message: '',
        }
    });

 
    return (
        <>
            <Head>
                <title>Luddoc | Send SMS</title>
                <meta name="description" content="Admin Luddoc" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AdminLayout>
                <Container>
                    <Paper withBorder mt="lg" p="md">
                        <Grid>
                            <Grid.Col md={6}>
                                <Center>
                                    <Image 
                                        src='/SMS.gif'
                                        height={600}
                                        width={500}
                                    />
                                </Center>
                            </Grid.Col>
                            <Grid.Col md={6} p="xl">
                                <Group mt="lg" position="apart">
                                    <Text size={28} color={`${colors.secondaryColor}`} weight={600}>Send SMS</Text>
                                    <Text>Airtime Balance</Text>
                                    <Badge color='green' size='lg'>452.00 KES</Badge>
                                </Group>
                               <Radio.Group
                                    name="recipients"
                                    orientation="vertical"
                                    label="Recipient(s)"
                                    description="SMS recipients"
                                    withAsterisk
                                    mt="xl"
                                >
                                    <Radio value="allStudents" label="All Students" color='dark' />
                                    <Radio value="allTutors" label="All Tutors" color='dark' />
                                    <Radio value="selectRecipients" label="Select Recipients" color='dark' />
                                    <Radio value="enterNumber" label="Enter Number" color='dark' />
                                </Radio.Group>

                                <form onSubmit={form.onSubmit(() => {})}>
                                    <TextInput
                                        required
                                        label="Subject"
                                        placeholder="SMS Subject"
                                        mt="xl"
                                        value={form.values.topic}
                                        onChange={(event) => form.setFieldValue('topic', event.currentTarget.value)}
                                    />
                                    <Textarea
                                        placeholder="Type Message"
                                        label={(<Group position="apart"><Text>Message</Text> <Badge color="dark" size='sm'>Word Count: {form.values.message.length}</Badge></Group>)}
                                        mt="xl"
                                        value={form.values.message}
                                        onChange={(event) => form.setFieldValue('message', event.currentTarget.value)}
                                    />
                                    <Center>
                                        <Button type="submit" mt="xl" color='dark'>Send</Button>
                                    </Center>

                                </form>
                               
                            </Grid.Col>
                        </Grid>
                    </Paper>

                </Container>
            </AdminLayout>
        </>
    );
}

export default Tutors;