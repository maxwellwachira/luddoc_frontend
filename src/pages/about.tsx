import {
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
  IconAward,
  IconBulb,
  IconHandRock,
  IconHeart,

  IconSchool,
  IconStar,
  IconTarget,
  IconUsers,
} from '@tabler/icons';

import MainLayout from '../layouts/mainLayout/mainLayout';
import FooterLinks from '../components/footer/footer';
import { footerData } from '../constants/footer';
import { colors } from '../constants/colors';



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
      background: `radial-gradient(circle, rgba(206,160,40,0.08) 0%, transparent 70%)`,
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
    marginBottom: 24,
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
    maxWidth: 580,
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
    padding: '80px 0',
    [theme.fn.smallerThan('md')]: { padding: '50px 0' },
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
  mvSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[8],
    padding: '80px 0',
    [theme.fn.smallerThan('md')]: { padding: '50px 0' },
  },
  mvCard: {
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
    borderRadius: 20,
    padding: '40px 36px',
    height: '100%',
    border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[2] : theme.colors.dark[4]}`,
    position: 'relative' as const,
    overflow: 'hidden',
    transition: 'all 0.35s ease',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      borderRadius: '20px 20px 0 0',
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: colors.secondaryColor,
    },
    [theme.fn.smallerThan('md')]: {
      padding: '32px 24px',
    },
  },
  mvCardMission: {
    '&::before': {
      background: `linear-gradient(90deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    },
  },
  mvCardVision: {
    '&::before': {
      background: `linear-gradient(90deg, ${colors.goldGradientEnd}, ${colors.secondaryColor})`,
    },
  },
  mvIconBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  mvTitle: {
    fontSize: 26,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    lineHeight: 1.2,
    marginBottom: 16,
    [theme.fn.smallerThan('md')]: { fontSize: 22 },
  },
  mvText: {
    fontSize: 15,
    color: theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.gray[4],
    lineHeight: 1.8,
  },

  // ── Values ──
  valuesSection: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[8],
    padding: '80px 0',
    [theme.fn.smallerThan('md')]: { padding: '50px 0' },
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
    backgroundColor: theme.colorScheme === 'light' ? colors.primaryColor : theme.colors.dark[8],
    padding: '90px 0',
    position: 'relative' as const,
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${colors.secondaryColor}, transparent)`,
      opacity: 0.3,
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
    [theme.fn.smallerThan('md')]: { padding: '60px 0' },
  },
  taglineLabel: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 5,
    textTransform: 'uppercase' as const,
    color: colors.secondaryColor,
    textAlign: 'center' as const,
    marginBottom: 48,
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
  taglinePillars: {
    display: 'flex',
    justifyContent: 'center',
    gap: 0,
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: 40,
    },
  },
  taglinePillar: {
    flex: 1,
    maxWidth: 280,
    textAlign: 'center' as const,
    padding: '0 32px',
    position: 'relative' as const,
    '&:not(:last-child)::after': {
      content: '""',
      position: 'absolute',
      top: '10%',
      right: 0,
      height: '80%',
      width: 1,
      background: `linear-gradient(180deg, transparent, rgba(206,160,40,0.3), transparent)`,
    },
    [theme.fn.smallerThan('sm')]: {
      padding: 0,
      '&:not(:last-child)::after': {
        display: 'none',
      },
    },
  },
  taglineWord: {
    fontSize: 32,
    fontWeight: 800,
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: 3,
    marginBottom: 12,
    [theme.fn.smallerThan('md')]: { fontSize: 26 },
  },
  taglineTranslation: {
    fontSize: 15,
    fontWeight: 600,
    color: theme.white,
    marginBottom: 8,
  },
  taglineDesc: {
    fontSize: 13,
    color: theme.colors.gray[5],
    lineHeight: 1.6,
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
        <title>About Us | Luddoc Skills For Life Technical Institute</title>
        <meta name="description" content="Learn about Luddoc Skills For Life Technical Institute — our mission, vision, and commitment to empowering students through accredited training in Kenya." />
        <meta name="keywords" content="Luddoc, about, mission, vision, technical institute, Kenya, accredited training" />
        <meta property="og:title" content="About Us | Luddoc Skills For Life" />
        <meta property="og:description" content="Our mission, vision, and commitment to empowering students through accredited training." />
        <meta property="og:url" content="https://luddoc-institute.com/about" />
        <link rel="canonical" href="https://luddoc-institute.com/about" />
      </Head>
      <MainLayout>
        {/* ── Hero ── */}
        <Box className={classes.heroSection}>
          <Container size="md">
            <Text className={classes.heroEyebrow}>About Us</Text>
            <Text className={classes.heroTitle}>
              Empowering Lives<br />
              <span className={classes.heroGold}>Through Skills</span>
            </Text>
            <Text className={classes.heroText}>
              Luddoc Skills For Life Technical Institute is a modern training facility offering
              locally and internationally accredited courses. We focus on tapping the informal
              sector, equipping students with refined skills and knowledge to uplift their
              living standards and improve community well-being.
            </Text>
            <div className={classes.heroDivider} />
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

        {/* ── Mission & Vision ── */}
        <Box className={classes.mvSection}>
          <Container size="lg">
            <Text className={classes.sectionHeading}>
              What <span style={{ color: colors.secondaryColor }}>Drives Us</span>
            </Text>
            <div className={classes.headingUnderline} />
            <Text className={classes.sectionSubheading}>
              Our mission and vision guide every decision we make at Luddoc Skills For Life.
            </Text>

            <Grid mt={48} gutter={24}>
              <Grid.Col md={6}>
                <div className={`${classes.mvCard} ${classes.mvCardMission}`}>
                  <div className={classes.mvIconBox}>
                    <IconTarget size={26} color="white" stroke={1.8} />
                  </div>
                  <Text className={classes.mvTitle}>Our Mission</Text>
                  <Text className={classes.mvText}>
                    To create awareness and empower the informal skills within our society that
                    uplifts and educates students to thrive and earn a living through the services
                    offered. This is achieved through a modern approach to learning, state-of-the-art
                    facilities, a licensed and qualified team of institution management, and accredited
                    courses and programmes.
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col md={6}>
                <div className={`${classes.mvCard} ${classes.mvCardVision}`}>
                  <div className={classes.mvIconBox}>
                    <IconAward size={26} color="white" stroke={1.8} />
                  </div>
                  <Text className={classes.mvTitle}>Our Vision</Text>
                  <Text className={classes.mvText}>
                    To be the pioneers of change we want to see in the community, through teaching
                    and demonstrating skills for life that brings out happiness and well-being in the
                    society.
                  </Text>
                </div>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* ── Tagline Banner ── */}
        <Box className={classes.taglineSection}>
          <Container size="md">
            <Text className={classes.taglineLabel}>Our Motto</Text>
            <div className={classes.taglinePillars}>
              <div className={classes.taglinePillar}>
                <Text className={classes.taglineWord}>JIJENGE</Text>
                <Text className={classes.taglineTranslation}>Build Yourself</Text>
                <Text className={classes.taglineDesc}>
                  Develop your skills, invest in your growth, and lay the foundation for a better future.
                </Text>
              </div>
              <div className={classes.taglinePillar}>
                <Text className={classes.taglineWord}>JIAMINI</Text>
                <Text className={classes.taglineTranslation}>Believe in Yourself</Text>
                <Text className={classes.taglineDesc}>
                  Trust your ability, embrace your potential, and have confidence in who you are becoming.
                </Text>
              </div>
              <div className={classes.taglinePillar}>
                <Text className={classes.taglineWord}>JIENJOY</Text>
                <Text className={classes.taglineTranslation}>Enjoy Yourself</Text>
                <Text className={classes.taglineDesc}>
                  Celebrate every milestone, find joy in learning, and live a fulfilling life.
                </Text>
              </div>
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
          <Container size="sm" className={classes.ctaInner}>
            <Text className={classes.ctaLabel}>Don't Wait</Text>
            <Text className={classes.ctaTitle}>
              Ready to Transform<br />Your Career?
            </Text>
            <Text className={classes.ctaSubtext}>
              Join hundreds of students already building better futures. Enrol in an accredited course and take the first step today.
            </Text>
            <Anchor href="/auth/sign-up" className={classes.ctaButton}>
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

export default About;
