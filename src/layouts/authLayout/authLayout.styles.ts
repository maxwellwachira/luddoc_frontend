import { createStyles } from '@mantine/core';

import { colors } from '../../constants/colors';

export const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column' as const,
    },
  },

  // ── Left Branding Panel ──
  brandPanel: {
    flex: '0 0 45%',
    background: `linear-gradient(160deg, ${colors.primaryColor} 0%, ${colors.primaryColorLight} 100%)`,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 48px',
    position: 'relative' as const,
    overflow: 'hidden',
    // Decorative circle top-right
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -120,
      right: -120,
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(206,160,40,0.12) 0%, transparent 70%)',
    },
    // Decorative circle bottom-left
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -80,
      left: -80,
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(206,160,40,0.08) 0%, transparent 70%)',
    },
    [theme.fn.smallerThan('md')]: {
      flex: 'none',
      padding: '48px 24px',
      minHeight: 280,
    },
  },
  brandContent: {
    position: 'relative' as const,
    zIndex: 1,
    textAlign: 'center' as const,
    maxWidth: 360,
  },
  brandLogo: {
    marginBottom: 32,
  },
  brandTitle: {
    fontSize: 36,
    fontWeight: 800,
    color: theme.white,
    lineHeight: 1.2,
    marginBottom: 16,
    [theme.fn.smallerThan('lg')]: { fontSize: 28 },
    [theme.fn.smallerThan('md')]: { fontSize: 24 },
  },
  brandGold: {
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  brandSubtext: {
    fontSize: 15,
    color: theme.colors.gray[5],
    lineHeight: 1.7,
    [theme.fn.smallerThan('md')]: { fontSize: 13 },
  },
  brandDivider: {
    width: 40,
    height: 3,
    background: `linear-gradient(90deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    margin: '28px auto',
    borderRadius: 2,
    [theme.fn.smallerThan('md')]: { margin: '20px auto' },
  },
  brandFeatures: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 16,
    marginTop: 8,
    [theme.fn.smallerThan('md')]: { display: 'none' },
  },
  brandFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    color: theme.colors.gray[4],
    fontSize: 14,
  },
  brandFeatureIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(206,160,40,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  // ── Right Form Panel ──
  formPanel: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 48px',
    backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[7],
    overflowY: 'auto' as const,
    [theme.fn.smallerThan('md')]: {
      padding: '40px 20px',
    },
  },
  formWrapper: {
    width: '100%',
    maxWidth: 420,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: 800,
    color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 14,
    color: theme.colors.gray[6],
    marginBottom: 32,
  },
  goldText: {
    color: colors.secondaryColor,
  },
  input: {
    '& input': {
      borderRadius: 10,
      border: `1px solid ${theme.colorScheme === 'light' ? theme.colors.gray[3] : theme.colors.dark[4]}`,
      backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[6],
      transition: 'border-color 0.2s ease, background-color 0.2s ease',
      '&:focus': {
        borderColor: colors.secondaryColor,
        backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[5],
      },
    },
    '& label': {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 6,
      color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
    },
  },
  button: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 30,
    height: 48,
    fontSize: 15,
    fontWeight: 600,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: colors.secondaryColorDark,
      transform: 'translateY(-2px)',
    },
  },
  link: {
    fontSize: 13,
    color: theme.colors.gray[6],
    transition: 'color 0.2s ease',
    '&:hover': {
      color: colors.secondaryColor,
    },
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
}));
