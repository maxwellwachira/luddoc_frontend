import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  Anchor,
  Box,
  Center,
  Container,
  createStyles,
  Grid,
  Group,
  Text,

} from '@mantine/core';
import {
  IconArrowRight,
  IconAward,
  IconBrain,
  IconBuildingCommunity,
  IconCertificate,
  IconClock,
  IconDeviceDesktop,
  IconHeart,
  IconShieldCheck,
  IconStethoscope,
  IconWorld,
} from '@tabler/icons';

import MainLayout from '../layouts/mainLayout/mainLayout';

import { colors } from '../constants/colors';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';

const useStyles = createStyles((theme) => ({
  // ── Hero Section ──
  heroSection: {
    background: theme.colorScheme === 'light'
      ? `linear-gradient(165deg, #FFFFFF 0%, ${colors.secondaryColorLight} 100%)`
      : theme.colors.dark[7],
    padding: '80px 0 100px',
    position: 'relative' as const,
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -150,
      right: -150,
      width: 500,
      height: 500,
      borderRadius: '50%',
      background: `radial-gradient(circle, rgba(206,160,40,0.12) 0%, transparent 70%)`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -100,
      left: -100,
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: `radial-gradient(circle, rgba(206,160,40,0.08) 0%, transparent 70%)`,
    },
    [theme.fn.smallerThan('md')]: {
      padding: '50px 0 60px',
    },
  },
  heroEyebrow: {
    color: colors.secondaryColorDark,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 4,
    textTransform: 'uppercase' as const,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 40,
      height: 2,
      backgroundColor: colors.secondaryColor,
    },
  },
  heroTitle: {
    fontSize: 52,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    lineHeight: 1.1,
    marginBottom: 8,
    [theme.fn.smallerThan('lg')]: {
      fontSize: 42,
    },
    [theme.fn.smallerThan('md')]: {
      fontSize: 34,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },
  heroGold: {
    color: colors.secondaryColor,
  },
  heroSubtitle: {
    fontSize: 42,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.colors.gray[5],
    marginBottom: 24,
    [theme.fn.smallerThan('lg')]: {
      fontSize: 34,
    },
    [theme.fn.smallerThan('md')]: {
      fontSize: 28,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 22,
    },
  },
  heroText: {
    color: theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.gray[4],
    fontSize: 16,
    lineHeight: 1.8,
    maxWidth: 480,
    [theme.fn.smallerThan('md')]: {
      fontSize: 15,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 14,
      maxWidth: '100%',
    },
  },
  heroButtons: {
    display: 'flex',
    gap: 16,
    marginTop: 36,
    flexWrap: 'wrap' as const,
  },
  btnPrimary: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 30,
    padding: '14px 36px',
    fontSize: 15,
    fontWeight: 600,
    color: theme.white,
    border: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(206, 160, 40, 0.3)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    '&:hover': {
      backgroundColor: colors.secondaryColorDark,
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(206, 160, 40, 0.4)',
      textDecoration: 'none',
    },
    [theme.fn.smallerThan('sm')]: {
      padding: '12px 28px',
      fontSize: 14,
    },
  },
  btnOutline: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    padding: '14px 36px',
    fontSize: 15,
    fontWeight: 600,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.colors.gray[3],
    border: theme.colorScheme === 'light' ? `1.5px solid ${theme.colors.gray[4]}` : `1.5px solid ${theme.colors.gray[6]}`,
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    '&:hover': {
      borderColor: colors.secondaryColor,
      color: colors.secondaryColor,
      transform: 'translateY(-2px)',
      textDecoration: 'none',
    },
    [theme.fn.smallerThan('sm')]: {
      padding: '12px 28px',
      fontSize: 14,
    },
  },
  heroImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      marginTop: 24,
    },
  },

  // ── Stats Section ──
  statsSection: {
    background: `linear-gradient(135deg, ${colors.secondaryColor} 0%, ${colors.goldGradientEnd} 100%)`,
    padding: '52px 0',
    position: 'relative' as const,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: 'rgba(255,255,255,0.3)',
    },
  },
  statItem: {
    textAlign: 'center' as const,
    padding: '8px 0',
  },
  statNumber: {
    fontSize: 44,
    fontWeight: 800,
    color: theme.white,
    lineHeight: 1,
    textShadow: '0 2px 10px rgba(0,0,0,0.15)',
    [theme.fn.smallerThan('sm')]: {
      fontSize: 34,
    },
  },
  statLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(0,0,0,0.6)',
    marginTop: 6,
    textTransform: 'uppercase' as const,
    letterSpacing: 1.5,
  },

  // ── Section shared styles ──
  sectionHeading: {
    fontSize: 38,
    fontWeight: 800,
    color: colors.primaryColor,
    textAlign: 'center' as const,
    [theme.fn.smallerThan('md')]: {
      fontSize: 28,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },
  sectionSubheading: {
    fontSize: 16,
    color: theme.colors.gray[6],
    textAlign: 'center' as const,
    maxWidth: 500,
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

  // ── Why Join Section ──
  whyJoinSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
    padding: '100px 0',
    [theme.fn.smallerThan('md')]: {
      padding: '60px 0',
    },
  },
  valueProps: {
    display: 'flex',
    gap: 40,
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    marginTop: 48,
    marginBottom: 64,
    [theme.fn.smallerThan('sm')]: {
      gap: 24,
    },
  },
  valueProp: {
    textAlign: 'center' as const,
    maxWidth: 220,
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      width: '45%',
    },
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
    },
  },
  valuePropIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.secondaryColorLight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 12px',
  },
  valuePropTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: colors.primaryColor,
    marginBottom: 4,
  },
  valuePropText: {
    fontSize: 13,
    color: theme.colors.gray[6],
    lineHeight: 1.5,
  },
  courseCard: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
    borderRadius: 16,
    padding: '24px',
    border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[4]}`,
    transition: 'all 0.35s ease',
    height: '100%',
    cursor: 'default',
    '&:hover': {
      borderColor: colors.secondaryColor,
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 25px rgba(206, 160, 40, 0.12)',
    },
  },
  courseIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    marginBottom: 6,
  },
  courseDesc: {
    fontSize: 13,
    color: theme.colors.gray[6],
    lineHeight: 1.6,
  },

  // ── How to Join Section ──
  howToJoinSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[8],
    padding: '100px 0',
    position: 'relative' as const,
    overflow: 'hidden',
    [theme.fn.smallerThan('md')]: {
      padding: '60px 0',
    },
  },
  howToJoinHeading: {
    fontSize: 38,
    fontWeight: 800,
    color: colors.primaryColor,
    textAlign: 'center' as const,
    [theme.fn.smallerThan('md')]: {
      fontSize: 28,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },
  howToJoinUnderline: {
    width: 50,
    height: 3,
    backgroundColor: colors.secondaryColor,
    margin: '16px auto 0',
    borderRadius: 2,
  },
  howToJoinSubheading: {
    fontSize: 16,
    color: theme.colors.gray[6],
    textAlign: 'center' as const,
    maxWidth: 460,
    margin: '16px auto 0',
    lineHeight: 1.6,
  },
  stepsWrapper: {
    position: 'relative' as const,
    marginTop: 60,
  },
  stepsConnector: {
    position: 'absolute' as const,
    top: 60,
    left: '20%',
    right: '20%',
    height: 2,
    background: `linear-gradient(90deg, transparent, ${colors.secondaryColor}, transparent)`,
    opacity: 0.25,
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  stepCard: {
    textAlign: 'center' as const,
    position: 'relative' as const,
    padding: '0 16px',
  },
  stepNumberRing: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    border: `2px solid ${colors.secondaryColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 28px',
    position: 'relative' as const,
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : colors.primaryColor,
    zIndex: 1,
    transition: 'all 0.3s ease',
  },
  stepNumberInner: {
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: 20,
    color: theme.white,
    boxShadow: '0 4px 20px rgba(206,160,40,0.4)',
  },
  stepIconBox: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: colors.secondaryColorLight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    transition: 'all 0.3s ease',
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: colors.primaryColor,
    marginBottom: 10,
  },
  stepText: {
    color: theme.colors.gray[6],
    fontSize: 14,
    lineHeight: 1.7,
    maxWidth: 280,
    margin: '0 auto',
  },
  stepItem: {
    '&:hover': {
      [`& .stepIconBoxHover`]: {
        backgroundColor: 'rgba(206,160,40,0.1)',
        borderColor: 'rgba(206,160,40,0.3)',
      },
    },
  },

  // ── CTA Banner ──
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
    [theme.fn.smallerThan('md')]: {
      fontSize: 30,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },
  ctaSubtext: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 18,
    lineHeight: 1.7,
    maxWidth: 500,
    margin: '20px auto 40px',
    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 14,
      margin: '16px auto 32px',
    },
  },
}));

const stats = [
  { number: '500+', label: 'Students Trained' },
  { number: '6+', label: 'Courses Offered' },
  { number: '5+', label: 'Years Experience' },
  { number: '100%', label: 'Accredited' },
];

const valueProps = [
  { icon: IconCertificate, title: 'Fully Accredited', text: 'Nationally and internationally recognised certifications' },
  { icon: IconClock, title: 'Flexible Learning', text: 'Study at your own pace, on your own schedule' },
  { icon: IconWorld, title: 'Real-World Skills', text: 'Practical training that translates directly to the workplace' },
  { icon: IconShieldCheck, title: 'Expert Instructors', text: 'Learn from qualified, experienced professionals' },
];

const courses = [
  { name: 'Care Giving', icon: IconHeart, desc: 'Compassionate care skills for supporting those in need' },
  { name: 'Patients Care', icon: IconStethoscope, desc: 'Clinical patient support and healthcare fundamentals' },
  { name: 'Counseling Psychology', icon: IconBrain, desc: 'Mental health awareness and counseling techniques' },
  { name: 'Community Development', icon: IconBuildingCommunity, desc: 'Social work and community empowerment strategies' },
  { name: 'Front Office', icon: IconAward, desc: 'Professional reception and office administration' },
  { name: 'Computer Packages', icon: IconDeviceDesktop, desc: 'Essential digital literacy and software skills' },
];

const steps = [
  {
    number: 1,
    icon: '/register.svg',
    title: 'Register',
    description: 'Create your account, browse our catalogue of accredited courses, and enrol in the programme that fits your career goals.',
  },
  {
    number: 2,
    icon: '/readme.svg',
    title: 'Study',
    description: 'Learn at your own pace with expert-led content, practical assignments, and support from our team of qualified instructors.',
  },
  {
    number: 3,
    icon: '/graduation.svg',
    title: 'Get Certified',
    description: 'Complete the course and receive a nationally recognised certificate to advance your career and open new opportunities.',
  },
];

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Luddoc Skills For Life | Accredited Training Institute in Kenya</title>
        <meta name="description" content="Luddoc Skills For Life Technical Institute offers accredited courses in Care Giving, Counseling Psychology, Community Development, and more. Flexible learning with nationally recognised certifications. Enrol today." />
        <meta name="keywords" content="Luddoc, Skills For Life, technical institute, accredited courses, care giving, counseling psychology, community development, front office, computer packages, Kenya, training, certification" />

        {/* Open Graph */}
        <meta property="og:title" content="Luddoc Skills For Life | Accredited Training Institute" />
        <meta property="og:description" content="Accredited courses in Care Giving, Counseling Psychology, Community Development, and more. Flexible learning with nationally recognised certifications." />
        <meta property="og:url" content="https://luddoc-institute.com" />
        <meta property="og:image" content="https://luddoc-institute.com/hero2.svg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Luddoc Skills For Life | Accredited Training Institute" />
        <meta name="twitter:description" content="Accredited courses in Care Giving, Counseling Psychology, Community Development, and more. Enrol today." />
        <meta name="twitter:image" content="https://luddoc-institute.com/hero2.svg" />

        <link rel="canonical" href="https://luddoc-institute.com" />
      </Head>
      <MainLayout>
        {/* ── Hero Section ── */}
        <Box className={classes.heroSection}>
          <Container size="lg">
            <Grid align="center" gutter={60}>
              <Grid.Col md={6}>
                <Text className={classes.heroEyebrow}>Accredited Training Institute</Text>
                <Text className={classes.heroTitle}>
                  <span className={classes.heroGold}>L</span>uddoc{' '}
                  <span className={classes.heroGold}>S</span>kills{' '}
                  <span className={classes.heroGold}>F</span>or{' '}
                  <span className={classes.heroGold}>L</span>ife
                </Text>
                <Text className={classes.heroSubtitle}>
                  Technical Institute
                </Text>
                <Text className={classes.heroText}>
                  A modern training facility offering locally and internationally accredited courses in Care Giving, Self Development and so much more. Don't wait, enrol today to better your life.
                </Text>
                <div className={classes.heroButtons}>
                  <Anchor href="/auth/sign-up" className={classes.btnPrimary}>
                    Enrol Now <IconArrowRight size={18} />
                  </Anchor>
                  <Anchor href="/courses" className={classes.btnOutline}>
                    Explore Courses
                  </Anchor>
                </div>
              </Grid.Col>
              <Grid.Col md={6}>
                <div className={classes.heroImageWrapper}>
                  <img
                    src="/hero2.svg"
                    alt="Students learning online"
                    style={{ width: '100%', maxWidth: 560, height: 'auto' }}
                  />
                </div>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* ── Stats Bar ── */}
        <Box className={classes.statsSection}>
          <Container size="lg">
            <Grid>
              {stats.map((stat) => (
                <Grid.Col xs={6} md={3} key={stat.label}>
                  <div className={classes.statItem}>
                    <Text className={classes.statNumber}>{stat.number}</Text>
                    <Text className={classes.statLabel}>{stat.label}</Text>
                  </div>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ── Why Join Luddoc ── */}
        <Box className={classes.whyJoinSection}>
          <Container size="lg">
            <Text className={classes.sectionHeading}>
              Why Join <span style={{ color: colors.secondaryColor }}>Luddoc</span>?
            </Text>
            <div className={classes.headingUnderline} />
            <Text className={classes.sectionSubheading}>
              We bring out the best in every student through expert-led training, accredited programmes, and real community impact.
            </Text>

            {/* Value Propositions */}
            <div className={classes.valueProps}>
              {valueProps.map((vp) => (
                <div className={classes.valueProp} key={vp.title}>
                  <div className={classes.valuePropIcon}>
                    <vp.icon size={26} color={colors.secondaryColor} stroke={1.8} />
                  </div>
                  <Text className={classes.valuePropTitle}>{vp.title}</Text>
                  <Text className={classes.valuePropText}>{vp.text}</Text>
                </div>
              ))}
            </div>

            {/* Courses Grid */}
            <Center mb={8}>
              <Text size="xs" weight={700} style={{ textTransform: 'uppercase', letterSpacing: 3, color: colors.secondaryColor }}>
                Our Courses
              </Text>
            </Center>
            <Center mb={32}>
              <Text color="dimmed" size="sm">Explore our range of accredited programmes</Text>
            </Center>
            <Grid gutter={20}>
              {courses.map((course) => (
                <Grid.Col xs={12} sm={6} md={4} key={course.name}>
                  <div className={classes.courseCard}>
                    <div className={classes.courseIconWrapper}>
                      <course.icon size={24} color="white" stroke={1.8} />
                    </div>
                    <Text className={classes.courseTitle}>{course.name}</Text>
                    <Text className={classes.courseDesc}>{course.desc}</Text>
                  </div>
                </Grid.Col>
              ))}
            </Grid>
            <Center mt={40}>
              <Anchor href="/courses" className={classes.btnPrimary}>
                View All Courses <IconArrowRight size={18} />
              </Anchor>
            </Center>
          </Container>
        </Box>

        {/* ── How to Get Started ── */}
        <Box className={classes.howToJoinSection}>
          <Container size="lg">
            <Text className={classes.howToJoinHeading}>
              How to <span style={{ color: colors.secondaryColor }}>Get Started</span>
            </Text>
            <div className={classes.howToJoinUnderline} />
            <Text className={classes.howToJoinSubheading}>
              Three simple steps to start your learning journey with us.
            </Text>

            <div className={classes.stepsWrapper}>
              <div className={classes.stepsConnector} />
              <Grid gutter={24}>
                {steps.map((step) => (
                  <Grid.Col xs={12} sm={6} md={4} key={step.number}>
                    <div className={classes.stepCard}>
                      <div className={classes.stepNumberRing}>
                        <div className={classes.stepNumberInner}>{step.number}</div>
                      </div>
                      <div className={classes.stepIconBox}>
                        <Image
                          src={step.icon}
                          height={50}
                          width={55}
                          alt={step.title}
                        />
                      </div>
                      <Text className={classes.stepTitle}>{step.title}</Text>
                      <Text className={classes.stepText}>{step.description}</Text>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </Container>
        </Box>

        {/* ── CTA Banner ── */}
        <Box className={classes.ctaSection}>
          <Container size="sm" className={classes.ctaInner}>
            <Text className={classes.ctaLabel}>Don't Wait</Text>
            <Text className={classes.ctaTitle}>
              Ready to Transform<br />Your Career?
            </Text>
            <Text className={classes.ctaSubtext}>
              Join hundreds of students already building better futures. Enrol in an accredited course and take the first step today.
            </Text>
            <Anchor href="/auth/sign-up" className={classes.btnPrimary} style={{ backgroundColor: colors.primaryColor, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              Enrol Today <IconArrowRight size={18} />
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

export default Home;
