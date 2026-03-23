import {
  Anchor,
  Box,
  Center,
  Container,
  createStyles,
  Grid,
  Text,
} from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  IconArrowRight,
  IconAward,
  IconBulb,
  IconCertificate,
  IconHandRock,
  IconHeart,
  IconPhone,
  IconSchool,
  IconShieldCheck,
  IconStar,
  IconTarget,
  IconUserCheck,
  IconUsers,
} from '@tabler/icons';

import MainLayout from '../layouts/mainLayout/mainLayout';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';
import { colors } from '../constants/colors';
import missionImage from '../assets/mission.jpg';
import visionImage from '../assets/vision.jpg';
import successImage from '../assets/success.jpg';

const useStyles = createStyles((theme) => ({
  // ── Hero ──
  heroSection: {
    background: theme.colorScheme === 'light'
      ? `linear-gradient(165deg, #FFFFFF 0%, ${colors.secondaryColorLight} 100%)`
      : theme.colors.dark[7],
    padding: '100px 0 80px',
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
      background: 'radial-gradient(circle, rgba(206,160,40,0.12) 0%, transparent 70%)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -100,
      left: -100,
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(206,160,40,0.08) 0%, transparent 70%)',
    },
    [theme.fn.smallerThan('md')]: {
      padding: '60px 0 50px',
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
    marginBottom: 20,
    [theme.fn.smallerThan('lg')]: { fontSize: 42 },
    [theme.fn.smallerThan('md')]: { fontSize: 34 },
    [theme.fn.smallerThan('sm')]: { fontSize: 28 },
  },
  heroGold: {
    color: colors.secondaryColor,
  },
  heroText: {
    color: theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.gray[4],
    fontSize: 16,
    lineHeight: 1.8,
    maxWidth: 520,
    [theme.fn.smallerThan('md')]: { fontSize: 15 },
  },
  heroImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative' as const,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -20,
      right: -20,
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: `radial-gradient(circle, rgba(206,160,40,0.15) 0%, transparent 70%)`,
      zIndex: 0,
    },
  },
  heroImage: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative' as const,
    zIndex: 1,
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
  },

  // ── Stats ──
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
    [theme.fn.smallerThan('sm')]: { fontSize: 34 },
  },
  statLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(0,0,0,0.6)',
    marginTop: 6,
    textTransform: 'uppercase' as const,
    letterSpacing: 1.5,
  },

  // ── Section shared ──
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

  // ── Story Section ──
  storySection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
    padding: '100px 0',
    [theme.fn.smallerThan('md')]: { padding: '60px 0' },
  },
  storyContent: {
    maxWidth: 640,
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  storyText: {
    fontSize: 17,
    color: theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.gray[4],
    lineHeight: 1.9,
    marginTop: 32,
    '&:first-of-type': {
      marginTop: 40,
    },
  },
  storyHighlight: {
    fontWeight: 700,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
  },

  // ── Mission / Vision ──
  missionSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[8],
    padding: '100px 0',
    [theme.fn.smallerThan('md')]: { padding: '60px 0' },
  },
  visionSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
    padding: '100px 0',
    [theme.fn.smallerThan('md')]: { padding: '60px 0' },
  },
  mvImageWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0 16px 50px rgba(0,0,0,0.08)',
    position: 'relative' as const,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '30%',
      background: 'linear-gradient(to top, rgba(0,0,0,0.05), transparent)',
    },
  },
  mvLabel: {
    color: colors.secondaryColorDark,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 4,
    textTransform: 'uppercase' as const,
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 30,
      height: 2,
      backgroundColor: colors.secondaryColor,
    },
  },
  mvTitle: {
    fontSize: 34,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    lineHeight: 1.2,
    marginBottom: 20,
    [theme.fn.smallerThan('md')]: { fontSize: 26 },
  },
  mvText: {
    fontSize: 16,
    color: theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.gray[4],
    lineHeight: 1.8,
  },
  mvIconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.secondaryColorLight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  // ── Values ──
  valuesSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[8],
    padding: '100px 0',
    [theme.fn.smallerThan('md')]: { padding: '60px 0' },
  },
  valueCard: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
    borderRadius: 16,
    padding: '32px 24px',
    border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[4]}`,
    transition: 'all 0.35s ease',
    height: '100%',
    textAlign: 'center' as const,
    '&:hover': {
      borderColor: colors.secondaryColor,
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 25px rgba(206, 160, 40, 0.12)',
    },
  },
  valueIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 16,
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    marginBottom: 8,
  },
  valueText: {
    fontSize: 14,
    color: theme.colors.gray[6],
    lineHeight: 1.6,
  },

  // ── Tagline Banner ──
  taglineSection: {
    background: `linear-gradient(160deg, ${colors.secondaryColorDark} 0%, ${colors.secondaryColor} 40%, ${colors.goldGradientEnd} 100%)`,
    padding: '80px 0',
    position: 'relative' as const,
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.35,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '150px 150px',
      mixBlendMode: 'overlay' as const,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: -120,
      right: -80,
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
    },
    [theme.fn.smallerThan('md')]: { padding: '50px 0' },
  },
  taglineContent: {
    position: 'relative' as const,
    zIndex: 1,
    textAlign: 'center' as const,
  },
  taglineText: {
    fontSize: 48,
    fontWeight: 800,
    color: theme.white,
    letterSpacing: 6,
    textShadow: '0 2px 20px rgba(0,0,0,0.2)',
    [theme.fn.smallerThan('md')]: { fontSize: 32, letterSpacing: 4 },
    [theme.fn.smallerThan('sm')]: { fontSize: 24, letterSpacing: 2 },
  },
  taglineSubtext: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 16,
    fontWeight: 500,
    letterSpacing: 1,
  },

  // ── CTA ──
  ctaSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
    padding: '100px 0',
    [theme.fn.smallerThan('md')]: { padding: '60px 0' },
  },
  ctaCard: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: 28,
    padding: '72px 56px',
    position: 'relative' as const,
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 120,
      height: 3,
      background: `linear-gradient(90deg, transparent, ${colors.secondaryColor}, transparent)`,
      borderRadius: 2,
    },
    [theme.fn.smallerThan('md')]: {
      padding: '44px 24px',
      borderRadius: 20,
    },
  },
  ctaCardContent: {
    textAlign: 'center' as const,
    position: 'relative' as const,
    zIndex: 1,
  },
  ctaLabel: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 4,
    textTransform: 'uppercase' as const,
    color: colors.secondaryColor,
    marginBottom: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      width: 24,
      height: 1,
      backgroundColor: colors.secondaryColor,
      opacity: 0.4,
    },
  },
  ctaTitle: {
    fontSize: 44,
    fontWeight: 800,
    color: theme.white,
    lineHeight: 1.2,
    [theme.fn.smallerThan('md')]: { fontSize: 28 },
  },
  ctaHighlight: {
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  ctaSubtext: {
    color: theme.colors.gray[5],
    fontSize: 16,
    lineHeight: 1.8,
    maxWidth: 480,
    margin: '24px auto 40px',
    [theme.fn.smallerThan('md')]: { fontSize: 15 },
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    flexWrap: 'wrap' as const,
  },
  ctaButtonPrimary: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 30,
    padding: '16px 44px',
    fontSize: 16,
    fontWeight: 700,
    color: theme.white,
    border: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(206,160,40,0.35)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    '&:hover': {
      backgroundColor: colors.goldGradientEnd,
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 30px rgba(206,160,40,0.45)',
      textDecoration: 'none',
    },
  },
  ctaButtonSecondary: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    padding: '16px 44px',
    fontSize: 16,
    fontWeight: 600,
    color: theme.colors.gray[4],
    border: `1.5px solid ${theme.colors.gray[7]}`,
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    '&:hover': {
      borderColor: colors.secondaryColor,
      color: colors.secondaryColor,
      transform: 'translateY(-3px)',
      textDecoration: 'none',
    },
  },
}));

const stats = [
  { number: '500+', label: 'Students Trained' },
  { number: '6+', label: 'Courses Offered' },
  { number: '5+', label: 'Years Experience' },
  { number: '100%', label: 'Accredited' },
];

const coreValues = [
  {
    icon: IconStar,
    title: 'Excellence',
    text: 'We strive for the highest standards in training, ensuring every student receives world-class education.',
  },
  {
    icon: IconHeart,
    title: 'Empowerment',
    text: 'We equip students with refined skills and knowledge to uplift their living standards.',
  },
  {
    icon: IconUsers,
    title: 'Community',
    text: 'We are committed to positive impact, improving the well-being of the communities we serve.',
  },
  {
    icon: IconBulb,
    title: 'Innovation',
    text: 'We embrace modern approaches to learning with state-of-the-art facilities and methods.',
  },
  {
    icon: IconSchool,
    title: 'Growth',
    text: 'We help every student achieve their full potential and create lasting self-awareness.',
  },
  {
    icon: IconHandRock,
    title: 'Resilience',
    text: 'We inspire confidence and determination — building skills that last a lifetime.',
  },
];

const About: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Luddoc | About Us</title>
        <meta name="description" content="Learn about Luddoc Skills For Life Technical Institute — our mission, vision, and commitment to empowering students through accredited training." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {/* ── Hero ── */}
        <Box className={classes.heroSection}>
          <Container size="lg">
            <Grid align="center" gutter={60}>
              <Grid.Col md={6}>
                <Text className={classes.heroEyebrow}>About Us</Text>
                <Text className={classes.heroTitle}>
                  Empowering Lives{' '}
                  <span className={classes.heroGold}>Through Skills</span>
                </Text>
                <Text className={classes.heroText}>
                  Luddoc Skills For Life Technical Institute is a modern training facility offering
                  locally and internationally accredited courses. We focus on tapping the informal
                  sector, equipping students with refined skills and knowledge to uplift their
                  living standards and improve community well-being.
                </Text>
              </Grid.Col>
              <Grid.Col md={6}>
                <div className={classes.heroImageWrapper}>
                  <div className={classes.heroImage}>
                    <Image
                      src={successImage}
                      height={400}
                      width={500}
                      alt="Students celebrating success at Luddoc"
                      placeholder="blur"
                    />
                  </div>
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

        {/* ── Our Story ── */}
        <Box className={classes.storySection}>
          <Container size="lg">
            <div className={classes.storyContent}>
              <Text className={classes.sectionHeading}>
                Our <span style={{ color: colors.secondaryColor }}>Story</span>
              </Text>
              <div className={classes.headingUnderline} />
              <Text className={classes.storyText}>
                We pride in bringing out the best in every student, the positive energy enhanced
                through our team of experts and the impact realised in our community.
              </Text>
              <Text className={classes.storyText}>
                We are committed to growth and empower our students to achieve their full potential,
                create self-awareness, and promote happiness within self. At Luddoc, we believe that
                <span className={classes.storyHighlight}> every individual deserves access to
                quality education </span>
                that transforms not just careers, but entire communities.
              </Text>
            </div>
          </Container>
        </Box>

        {/* ── Mission ── */}
        <Box className={classes.missionSection}>
          <Container size="lg">
            <Grid align="center" gutter={60}>
              <Grid.Col md={6}>
                <div className={classes.mvImageWrapper}>
                  <Image
                    src={missionImage}
                    height={380}
                    width={520}
                    alt="Luddoc's mission in action"
                    placeholder="blur"
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={6}>
                <div className={classes.mvIconBox}>
                  <IconTarget size={28} color={colors.secondaryColor} stroke={1.8} />
                </div>
                <Text className={classes.mvLabel}>Our Purpose</Text>
                <Text className={classes.mvTitle}>
                  Our <span style={{ color: colors.secondaryColor }}>Mission</span>
                </Text>
                <Text className={classes.mvText}>
                  To create awareness and empower the informal skills within our society that
                  uplifts and educates students to thrive and earn a living through the services
                  offered. This is achieved through a modern approach to learning, state-of-the-art
                  facilities, a licensed and qualified team of institution management, and accredited
                  courses and programmes.
                </Text>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* ── Vision ── */}
        <Box className={classes.visionSection}>
          <Container size="lg">
            <Grid align="center" gutter={60}>
              <Grid.Col md={6}>
                <div className={classes.mvIconBox}>
                  <IconAward size={28} color={colors.secondaryColor} stroke={1.8} />
                </div>
                <Text className={classes.mvLabel}>Our Direction</Text>
                <Text className={classes.mvTitle}>
                  Our <span style={{ color: colors.secondaryColor }}>Vision</span>
                </Text>
                <Text className={classes.mvText}>
                  To be the pioneers of change we want to see in the community, through teaching
                  and demonstrating skills for life that brings out happiness and well-being in the
                  society.
                </Text>
              </Grid.Col>
              <Grid.Col md={6}>
                <div className={classes.mvImageWrapper}>
                  <Image
                    src={visionImage}
                    height={380}
                    width={520}
                    alt="Luddoc's vision for the future"
                    placeholder="blur"
                  />
                </div>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* ── Tagline Banner ── */}
        <Box className={classes.taglineSection}>
          <Container size="md">
            <div className={classes.taglineContent}>
              <Text className={classes.taglineText}>
                JIJENGE, JIAMINI, JIENJOY
              </Text>
              <Text className={classes.taglineSubtext}>
                Build Yourself, Believe in Yourself, Enjoy Yourself
              </Text>
            </div>
          </Container>
        </Box>

        {/* ── Core Values ── */}
        <Box className={classes.valuesSection}>
          <Container size="lg">
            <Text className={classes.sectionHeading}>
              Our Core <span style={{ color: colors.secondaryColor }}>Values</span>
            </Text>
            <div className={classes.headingUnderline} />
            <Text className={classes.sectionSubheading}>
              The principles that guide everything we do at Luddoc Skills For Life.
            </Text>

            <Grid mt={48} gutter={20}>
              {coreValues.map((value) => (
                <Grid.Col sm={6} md={4} key={value.title}>
                  <div className={classes.valueCard}>
                    <div className={classes.valueIconWrapper}>
                      <value.icon size={24} color="white" stroke={1.8} />
                    </div>
                    <Text className={classes.valueTitle}>{value.title}</Text>
                    <Text className={classes.valueText}>{value.text}</Text>
                  </div>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ── CTA ── */}
        <Box className={classes.ctaSection}>
          <Container size="md">
            <div className={classes.ctaCard}>
              <div className={classes.ctaCardContent}>
                <Text className={classes.ctaLabel}>Join Our Community</Text>
                <Text className={classes.ctaTitle}>
                  Ready to Build<br />
                  <span className={classes.ctaHighlight}>Your Future</span>?
                </Text>
                <Text className={classes.ctaSubtext}>
                  Join hundreds of students already building better futures with accredited,
                  expert-led training. Take the first step today.
                </Text>
                <div className={classes.ctaButtons}>
                  <Anchor href="/auth/sign-up" className={classes.ctaButtonPrimary}>
                    Enrol Today <IconArrowRight size={20} />
                  </Anchor>
                  <Anchor href="/contact" className={classes.ctaButtonSecondary}>
                    <IconPhone size={18} /> Contact Us
                  </Anchor>
                </div>
              </div>
            </div>
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

export default About;
