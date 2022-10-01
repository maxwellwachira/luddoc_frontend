import { Accordion, Box, Container, Stack } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IconPlus } from '@tabler/icons';

import MainLayout from '../layouts/mainLayout/mainLayout';
import { colors } from '../constants/colors';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';


const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | FAQ</title>
        <meta name="description" content="Frequently Asked Questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container>
            <Stack>
                <Image
                    src="/faq.svg"
                    height={400}
                    width="100%"
                />
                <Accordion 
                    chevron={<IconPlus size={16} />}
                    styles={{
                        chevron: {
                          '&[data-rotate]': {
                            transform: 'rotate(45deg)',
                          },
                        },
                    }}
                >
                    <Accordion.Item value="How do I enroll to Luddoc">
                        <Accordion.Control style={{color: `${colors.secondaryColor}`}}>How do I enroll to Luddoc?</Accordion.Control>
                        <Accordion.Panel>All it takes to enroll to luddoc is to register, select a course and get started</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="How long does it take to complete a course">
                        <Accordion.Control style={{color: `${colors.secondaryColor}`}}>How long does it take to complete a course?</Accordion.Control>
                        <Accordion.Panel>Our courses are self-paced but we encourage our students to be consistent so as to finish a course on time</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="How many courses can one enroll to at a given time">
                        <Accordion.Control style={{color: `${colors.secondaryColor}`}}>How many courses can one enroll to at a given time?</Accordion.Control>
                        <Accordion.Panel>You can enroll to as many courses as you wish but we encourage our students not to enroll to another course before completing the previous course</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="Will I get a certificate upon completion of a course?">
                        <Accordion.Control style={{color: `${colors.secondaryColor}`}}>Will I get a certificate upon completion of a course?</Accordion.Control>
                        <Accordion.Panel>Yes, you will receive a digital copy of your certificate upon completion of a course </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Stack>
        </Container>
        <Box>
            <FooterLinks data={footerData}/>
        </Box>
      </MainLayout>
    </>
  );
}

export default Faq;