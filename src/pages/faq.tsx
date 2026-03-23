import {
  Accordion,
  Anchor,
  Box,
  Container,
  createStyles,
  Grid,
  Text,
} from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  IconArrowRight,
  IconCertificate,
  IconClock,
  IconQuestionMark,
  IconListCheck,
  IconPlus,
  IconSchool,
} from '@tabler/icons';

import MainLayout from '../layouts/mainLayout/mainLayout';
import { colors } from '../constants/colors';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';

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

  // ── Quick Answers ──
  quickAnswersSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
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
  sectionSubheading: {
    fontSize: 16,
    color: theme.colors.gray[6],
    textAlign: 'center' as const,
    maxWidth: 540,
    margin: '16px auto 0',
    lineHeight: 1.6,
  },
  headingUnderline: {
    width: 50,
    height: 3,
    backgroundColor: colors.secondaryColor,
    margin: '16px auto 0',
    borderRadius: 2,
  },
  quickCard: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[6],
    borderRadius: 16,
    padding: '28px 24px',
    height: '100%',
    textAlign: 'center' as const,
    transition: 'all 0.35s ease',
    border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[4]}`,
    '&:hover': {
      borderColor: colors.secondaryColor,
      transform: 'translateY(-4px)',
    },
  },
  quickIconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 14,
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 14px',
  },
  quickTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    marginBottom: 6,
  },
  quickText: {
    fontSize: 13,
    color: theme.colors.gray[6],
    lineHeight: 1.6,
  },

  // ── FAQ Accordion ──
  faqSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[8],
    padding: '80px 0',
    [theme.fn.smallerThan('md')]: { padding: '50px 0' },
  },
  accordion: {
    maxWidth: 720,
    margin: '48px auto 0',
  },
  accordionItem: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
    borderRadius: 12,
    marginBottom: 12,
    border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[4]}`,
    overflow: 'hidden',
    transition: 'border-color 0.2s ease',
    '&[data-active]': {
      borderColor: colors.secondaryColor,
    },
  },
  accordionControl: {
    padding: '18px 24px',
    fontSize: 16,
    fontWeight: 600,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.fn.smallerThan('sm')]: {
      padding: '14px 16px',
      fontSize: 14,
    },
  },
  accordionChevron: {
    color: colors.secondaryColor,
    '&[data-rotate]': {
      transform: 'rotate(45deg)',
    },
  },
  accordionPanel: {
    padding: '0 24px 20px',
    fontSize: 15,
    color: theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.gray[4],
    lineHeight: 1.8,
    [theme.fn.smallerThan('sm')]: {
      padding: '0 16px 16px',
      fontSize: 14,
    },
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

const quickAnswers = [
  {
    icon: IconSchool,
    title: 'Easy Enrolment',
    text: 'Register, pick a course, and start learning — it only takes a few minutes.',
  },
  {
    icon: IconClock,
    title: 'Self-Paced',
    text: 'Study at your own speed with no fixed deadlines. Stay consistent for the best results.',
  },
  {
    icon: IconListCheck,
    title: 'One at a Time',
    text: 'You can enrol in multiple courses, but we recommend finishing one before starting another.',
  },
  {
    icon: IconCertificate,
    title: 'Certified',
    text: 'Receive a recognised digital certificate upon completing any course.',
  },
];

const faqs = [
  {
    question: 'How do I enrol at Luddoc?',
    answer: 'All it takes to enrol at Luddoc is to register an account on our platform, select the course you are interested in, make the payment, and get started right away. The entire process takes just a few minutes.',
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Our courses are self-paced, so the duration depends on your schedule and commitment. We encourage our students to be consistent so as to finish a course on time and get the most out of the learning experience.',
  },
  {
    question: 'How many courses can I enrol in at a given time?',
    answer: 'You can enrol in as many courses as you wish. However, we encourage our students to complete one course before enrolling in another to ensure focused learning and better retention of skills.',
  },
  {
    question: 'Will I get a certificate upon completion of a course?',
    answer: 'Yes, you will receive a nationally recognised digital certificate upon successful completion of any course. This certificate can be used to advance your career and demonstrate your qualifications to employers.',
  },
  {
    question: 'Are the courses accredited?',
    answer: 'Yes, all our courses are locally and internationally accredited. We partner with recognised accreditation bodies to ensure our programmes meet the highest standards of quality education.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept payments via M-Pesa for convenient and secure transactions. Simply follow the payment instructions during the enrolment process to complete your registration.',
  },
  {
    question: 'Can I access course materials after completing a course?',
    answer: 'Yes, once you have enrolled in a course, you retain access to the course materials even after completion. This allows you to revisit the content whenever you need a refresher.',
  },
];

const Faq: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>FAQ | Luddoc Skills For Life Technical Institute</title>
        <meta name="description" content="Frequently asked questions about Luddoc Skills For Life Technical Institute — enrolment, courses, certificates, fees, and more." />
        <meta name="keywords" content="Luddoc, FAQ, frequently asked questions, enrolment, courses, certificates, fees" />
        <meta property="og:title" content="FAQ | Luddoc Skills For Life" />
        <meta property="og:description" content="Frequently asked questions about enrolment, courses, certificates, and more." />
        <meta property="og:url" content="https://luddoc-institute.com/faq" />
        <link rel="canonical" href="https://luddoc-institute.com/faq" />
      </Head>
      <MainLayout>
        {/* ── Hero ── */}
        <Box className={classes.heroSection}>
          <Container size="md">
            <Text className={classes.heroEyebrow}>FAQ</Text>
            <Text className={classes.heroTitle}>
              Got <span className={classes.heroGold}>Questions</span>?
            </Text>
            <Text className={classes.heroText}>
              Find answers to the most common questions about our courses, enrolment process, certifications, and more.
            </Text>
            <div className={classes.heroDivider} />
          </Container>
        </Box>

        {/* ── Quick Answers ── */}
        <Box className={classes.quickAnswersSection}>
          <Container size="lg">
            <Text className={classes.sectionHeading}>
              At a <span style={{ color: colors.secondaryColor }}>Glance</span>
            </Text>
            <div className={classes.headingUnderline} />
            <Text className={classes.sectionSubheading}>
              Quick answers to the things students ask most.
            </Text>

            <Grid mt={48} gutter={20}>
              {quickAnswers.map((item) => (
                <Grid.Col sm={6} md={3} key={item.title}>
                  <div className={classes.quickCard}>
                    <div className={classes.quickIconWrapper}>
                      <item.icon size={24} color="white" stroke={1.8} />
                    </div>
                    <Text className={classes.quickTitle}>{item.title}</Text>
                    <Text className={classes.quickText}>{item.text}</Text>
                  </div>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ── FAQ Accordion ── */}
        <Box className={classes.faqSection}>
          <Container size="lg">
            <Text className={classes.sectionHeading}>
              Frequently Asked <span style={{ color: colors.secondaryColor }}>Questions</span>
            </Text>
            <div className={classes.headingUnderline} />

            <div className={classes.accordion}>
              <Accordion
                chevron={<IconPlus size={16} />}
                classNames={{
                  item: classes.accordionItem,
                  control: classes.accordionControl,
                  chevron: classes.accordionChevron,
                  panel: classes.accordionPanel,
                }}
              >
                {faqs.map((faq) => (
                  <Accordion.Item value={faq.question} key={faq.question}>
                    <Accordion.Control>
                      <Box style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <IconQuestionMark size={18} color={colors.secondaryColor} stroke={1.8} />
                        {faq.question}
                      </Box>
                    </Accordion.Control>
                    <Accordion.Panel>{faq.answer}</Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Container>
        </Box>

        {/* ── CTA ── */}
        <Box className={classes.ctaSection}>
          <Container size="sm" className={classes.ctaInner}>
            <Text className={classes.ctaLabel}>Still Have Questions?</Text>
            <Text className={classes.ctaTitle}>
              We're Here<br />to Help
            </Text>
            <Text className={classes.ctaSubtext}>
              Can't find what you're looking for? Reach out to our team and we'll get back to you as soon as possible.
            </Text>
            <Anchor href="/contact" className={classes.ctaButton}>
              Contact Us <IconArrowRight size={18} />
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

export default Faq;
