import { useState } from 'react';
import {
  Anchor,
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  Notification,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useForm } from '@mantine/form';
import axios from 'axios';
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
  IconX,
} from '@tabler/icons';

import MainLayout from '../layouts/mainLayout/mainLayout';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';
import { colors } from '../constants/colors';
import { urls } from '../constants/urls';

const useStyles = createStyles((theme) => ({
  // ── Hero ──
  heroSection: {
    background: theme.colorScheme === 'light'
      ? `linear-gradient(165deg, #FFFFFF 0%, ${colors.secondaryColorLight} 100%)`
      : theme.colors.dark[7],
    padding: '120px 0 100px',
    position: 'relative' as const,
    overflow: 'hidden',
    textAlign: 'center' as const,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      height: 600,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(206,160,40,0.08) 0%, transparent 70%)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${colors.secondaryColor}, transparent)`,
      opacity: 0.3,
    },
    [theme.fn.smallerThan('md')]: {
      padding: '80px 0 60px',
    },
  },
  heroEyebrow: {
    color: colors.secondaryColor,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 5,
    textTransform: 'uppercase' as const,
    marginBottom: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      width: 32,
      height: 1,
      backgroundColor: colors.secondaryColor,
      opacity: 0.5,
    },
  },
  heroTitle: {
    fontSize: 56,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    lineHeight: 1.15,
    maxWidth: 700,
    margin: '0 auto 24px',
    [theme.fn.smallerThan('lg')]: { fontSize: 44 },
    [theme.fn.smallerThan('md')]: { fontSize: 36 },
    [theme.fn.smallerThan('sm')]: { fontSize: 28 },
  },
  heroGold: {
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroText: {
    color: theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.gray[4],
    fontSize: 17,
    lineHeight: 1.8,
    maxWidth: 540,
    margin: '0 auto',
    [theme.fn.smallerThan('md')]: { fontSize: 15 },
  },
  heroDivider: {
    width: 50,
    height: 3,
    backgroundColor: colors.secondaryColor,
    margin: '32px auto 0',
    borderRadius: 2,
  },

  // ── Main Contact Section ──
  contactSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
    padding: '80px 0',
    [theme.fn.smallerThan('md')]: { padding: '50px 0' },
  },

  // ── Left: Contact Details ──
  detailsWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
  },
  detailsHeading: {
    fontSize: 32,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    lineHeight: 1.2,
    marginBottom: 12,
    [theme.fn.smallerThan('md')]: { fontSize: 26 },
  },
  detailsSubtext: {
    fontSize: 15,
    color: theme.colors.gray[6],
    lineHeight: 1.7,
    marginBottom: 36,
    maxWidth: 400,
  },
  detailItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 28,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  detailIconBox: {
    width: 48,
    height: 48,
    minWidth: 48,
    borderRadius: 14,
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailLabel: {
    fontSize: 13,
    fontWeight: 700,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 15,
    color: theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.gray[4],
    lineHeight: 1.5,
  },

  // ── Right: Form ──
  formCard: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[6],
    borderRadius: 20,
    padding: '40px 36px',
    border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[4]}`,
    position: 'relative' as const,
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: `linear-gradient(90deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
      borderRadius: '20px 20px 0 0',
    },
    [theme.fn.smallerThan('sm')]: {
      padding: '28px 20px',
    },
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 14,
    color: theme.colors.gray[6],
    marginBottom: 24,
  },
  formInput: {
    '& input, & textarea': {
      borderRadius: 10,
      backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
      border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[3] : theme.colors.dark[4]}`,
      transition: 'border-color 0.2s ease',
      '&:focus': {
        borderColor: colors.secondaryColor,
      },
    },
    '& label': {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 6,
      color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    },
  },
  submitButton: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 30,
    padding: '12px 36px',
    fontSize: 15,
    fontWeight: 600,
    color: theme.white,
    border: 'none',
    transition: 'all 0.3s ease',
    height: 46,
    '&:hover': {
      backgroundColor: colors.secondaryColorDark,
      transform: 'translateY(-2px)',
    },
  },

  // ── Map Section ──
  mapSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[8],
    padding: '80px 0',
    [theme.fn.smallerThan('md')]: { padding: '50px 0' },
  },
  sectionHeading: {
    fontSize: 38,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    textAlign: 'center' as const,
    [theme.fn.smallerThan('md')]: { fontSize: 28 },
  },
  headingUnderline: {
    width: 50,
    height: 3,
    backgroundColor: colors.secondaryColor,
    margin: '16px auto 0',
    borderRadius: 2,
  },
  sectionSubheading: {
    fontSize: 16,
    color: theme.colors.gray[6],
    textAlign: 'center' as const,
    maxWidth: 540,
    margin: '16px auto 0',
    lineHeight: 1.6,
  },
  mapWrapper: {
    marginTop: 48,
    borderRadius: 16,
    overflow: 'hidden',
    border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[4]}`,
    height: 380,
    [theme.fn.smallerThan('md')]: { height: 280 },
  },

  // ── CTA ──
  ctaSection: {
    background: `linear-gradient(135deg, ${colors.secondaryColor} 0%, ${colors.goldGradientEnd} 50%, ${colors.secondaryColor} 100%)`,
    padding: '100px 0',
    textAlign: 'center' as const,
    position: 'relative' as const,
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: -100,
      right: -100,
      width: 350,
      height: 350,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
    },
    [theme.fn.smallerThan('md')]: {
      padding: '60px 0',
    },
  },
  ctaInner: {
    position: 'relative' as const,
    zIndex: 1,
  },
  ctaLabel: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 4,
    textTransform: 'uppercase' as const,
    color: 'rgba(0,0,0,0.4)',
    marginBottom: 16,
  },
  ctaTitle: {
    fontSize: 44,
    fontWeight: 800,
    color: theme.white,
    lineHeight: 1.15,
    textShadow: '0 2px 15px rgba(0,0,0,0.1)',
    [theme.fn.smallerThan('md')]: { fontSize: 30 },
    [theme.fn.smallerThan('sm')]: { fontSize: 24 },
  },
  ctaSubtext: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 18,
    lineHeight: 1.7,
    maxWidth: 500,
    margin: '20px auto 40px',
    [theme.fn.smallerThan('md')]: { fontSize: 16 },
    [theme.fn.smallerThan('sm')]: { fontSize: 14, margin: '16px auto 32px' },
  },
  ctaButton: {
    backgroundColor: colors.primaryColor,
    borderRadius: 30,
    padding: '14px 36px',
    fontSize: 15,
    fontWeight: 600,
    color: theme.white,
    border: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    '&:hover': {
      backgroundColor: colors.primaryColorLight,
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
      textDecoration: 'none',
    },
  },
}));

const contactDetails = [
  {
    icon: IconMapPin,
    label: 'Address',
    value: 'Githurai, Mumbi Rd.\nSilicon Gem Apartments\nNairobi, Kenya, 19148-00501',
  },
  {
    icon: IconPhone,
    label: 'Phone',
    value: '0793 708 548',
  },
  {
    icon: IconMail,
    label: 'Email',
    value: 'info@luddoc-institute.com',
  },
  {
    icon: IconClock,
    label: 'Working Hours',
    value: 'Monday – Friday\n8:00 AM – 5:00 PM',
  },
];

const Contact: NextPage = () => {
  const { classes } = useStyles();
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const form = useForm({
    initialValues,
    validate: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
          ? null
          : 'Invalid email',
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    if (JSON.stringify(form.errors) === '{}') {
      try {
        const { data } = await axios.post(`${urls.baseUrl}/email/send-contact`, form.values);
        if (data.message === 'success') {
          setResponse(data.message);
          setLoading(false);
          form.setValues(initialValues);
        }
      } catch (error: any) {
        console.log(error);
        setResponse('error');
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Luddoc Skills For Life Technical Institute</title>
        <meta name="description" content="Get in touch with Luddoc Skills For Life Technical Institute. Located at Githurai, Mumbi Rd, Silicon Gem Apartments, Nairobi, Kenya." />
        <meta name="keywords" content="Luddoc, contact, Nairobi, Githurai, technical institute, phone, email" />
        <meta property="og:title" content="Contact Us | Luddoc Skills For Life" />
        <meta property="og:description" content="Get in touch with Luddoc Skills For Life Technical Institute in Nairobi, Kenya." />
        <meta property="og:url" content="https://luddoc-institute.com/contact" />
        <link rel="canonical" href="https://luddoc-institute.com/contact" />
      </Head>
      <MainLayout>
        {/* ── Hero ── */}
        <Box className={classes.heroSection}>
          <Container size="md">
            <Text className={classes.heroEyebrow}>Get in Touch</Text>
            <Text className={classes.heroTitle}>
              We'd Love to<br />
              <span className={classes.heroGold}>Hear From You</span>
            </Text>
            <Text className={classes.heroText}>
              Have a question about our courses, need help with enrolment, or just want to say hello? We're here to help.
            </Text>
            <div className={classes.heroDivider} />
          </Container>
        </Box>

        {/* ── Contact Details + Form ── */}
        <Box className={classes.contactSection}>
          <Container size="lg">
            <Grid gutter={48}>
              {/* Left — Details */}
              <Grid.Col md={5}>
                <div className={classes.detailsWrapper}>
                  <Text className={classes.detailsHeading}>
                    Contact <span style={{ color: colors.secondaryColor }}>Information</span>
                  </Text>
                  <Text className={classes.detailsSubtext}>
                    Reach out through any of the channels below, or fill in the form and we'll get back to you within 24 hours.
                  </Text>

                  {contactDetails.map((detail) => (
                    <div className={classes.detailItem} key={detail.label}>
                      <div className={classes.detailIconBox}>
                        <detail.icon size={22} color="white" stroke={1.8} />
                      </div>
                      <div>
                        <Text className={classes.detailLabel}>{detail.label}</Text>
                        <Text className={classes.detailValue} style={{ whiteSpace: 'pre-line' }}>
                          {detail.value}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </Grid.Col>

              {/* Right — Form */}
              <Grid.Col md={7}>
                <div className={classes.formCard}>
                  <Text className={classes.formTitle}>Send Us a Message</Text>
                  <Text className={classes.formSubtitle}>
                    We'll respond as quickly as possible.
                  </Text>

                  {response === 'success' && (
                    <Notification
                      icon={<IconCheck size={18} />}
                      color="teal"
                      title="Message Sent"
                      onClose={() => setResponse('')}
                      mb="lg"
                    >
                      We have received your message. We'll get back to you shortly.
                    </Notification>
                  )}
                  {response === 'error' && (
                    <Notification
                      icon={<IconX size={18} />}
                      color="red"
                      title="Something went wrong"
                      onClose={() => setResponse('')}
                      mb="lg"
                    >
                      There was an error sending your message. Please try again later.
                    </Notification>
                  )}

                  <form onSubmit={form.onSubmit(() => handleSubmit())}>
                    <Stack spacing="md">
                      <Grid gutter="md">
                        <Grid.Col sm={6}>
                          <TextInput
                            required
                            label="Email"
                            placeholder="you@example.com"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                            className={classes.formInput}
                          />
                        </Grid.Col>
                        <Grid.Col sm={6}>
                          <TextInput
                            label="Phone Number"
                            placeholder="0712 345 678"
                            value={form.values.phone}
                            onChange={(event) => form.setFieldValue('phone', event.currentTarget.value)}
                            className={classes.formInput}
                          />
                        </Grid.Col>
                      </Grid>
                      <TextInput
                        required
                        label="Subject"
                        placeholder="What is this about?"
                        value={form.values.subject}
                        onChange={(event) => form.setFieldValue('subject', event.currentTarget.value)}
                        className={classes.formInput}
                      />
                      <Textarea
                        required
                        label="Message"
                        placeholder="Tell us more about how we can help you..."
                        minRows={6}
                        value={form.values.message}
                        onChange={(event) => form.setFieldValue('message', event.currentTarget.value)}
                        className={classes.formInput}
                      />
                      <Button
                        type="submit"
                        loading={loading}
                        className={classes.submitButton}
                        leftIcon={<IconSend size={16} />}
                        mt="xs"
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </div>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* ── Map ── */}
        <Box className={classes.mapSection}>
          <Container size="lg">
            <Text className={classes.sectionHeading}>
              Find <span style={{ color: colors.secondaryColor }}>Us</span>
            </Text>
            <div className={classes.headingUnderline} />
            <Text className={classes.sectionSubheading}>
              Githurai, Mumbi Rd, Silicon Gem Apartments — Nairobi, Kenya
            </Text>

            <div className={classes.mapWrapper}>
              <iframe
                title="Luddoc Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.024!2d36.9156!3d-1.2044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTInMTUuOCJTIDM2wrA1NCc1Ni4yIkU!5e0!3m2!1sen!2ske!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Container>
        </Box>

        {/* ── CTA ── */}
        <Box className={classes.ctaSection}>
          <Container size="sm" className={classes.ctaInner}>
            <Text className={classes.ctaLabel}>Ready to Start?</Text>
            <Text className={classes.ctaTitle}>
              Don't Wait,<br />Enrol Today
            </Text>
            <Text className={classes.ctaSubtext}>
              Join hundreds of students already building better futures with accredited, expert-led training.
            </Text>
            <Anchor href="/auth/sign-up" className={classes.ctaButton}>
              Enrol Now <IconArrowRight size={18} />
            </Anchor>
          </Container>
        </Box>

        {/* ── Footer ── */}
        <Box>
          <FooterLinks data={footerData} />
        </Box>
      </MainLayout>
    </>
  );
};

export default Contact;
