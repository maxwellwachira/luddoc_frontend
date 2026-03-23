import { createStyles } from "@mantine/core";

import { colors } from "../../constants/colors";
export const useStyles = createStyles((theme) => ({
    footer: {
      marginTop: 0,
      paddingTop: theme.spacing.xl * 3,
      paddingBottom: theme.spacing.xl,
      backgroundColor: colors.primaryColor,
      position: 'relative' as const,
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -150,
        right: -150,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(206,160,40,0.06) 0%, transparent 70%)',
      },
    },

    logo: {
      maxWidth: 200,

      [theme.fn.smallerThan('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },

    logoImage: {
      borderRadius: 12,
      overflow: 'hidden',
    },

    description: {
      marginTop: 12,
      color: theme.colors.gray[6],
      fontSize: 14,
      lineHeight: 1.6,

      [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.xs,
        textAlign: 'center',
      },
    },

    inner: {
      display: 'flex',
      justifyContent: 'space-between',

      [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },

    groups: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,

      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },

    wrapper: {
      width: 160,
    },

    link: {
      display: 'block',
      color: theme.colors.gray[6],
      fontSize: 14,
      paddingTop: 5,
      paddingBottom: 5,
      transition: 'all 0.2s ease',

      '&:hover': {
        textDecoration: 'none',
        color: colors.secondaryColor,
        paddingLeft: 4,
      },
    },

    title: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase' as const,
      letterSpacing: 1.5,
      marginBottom: 12,
      color: colors.secondaryColor,
    },

    afterFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing.xl * 2,
      paddingTop: theme.spacing.xl,
      borderTop: '1px solid rgba(255,255,255,0.08)',

      [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
        gap: 12,
      },
    },

    copyright: {
      color: theme.colors.gray[7],
      fontSize: 13,
    },

    social: {
      gap: 4,
      [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.xs,
      },
      '& .mantine-ActionIcon-root': {
        color: theme.colors.gray[6],
        width: 36,
        height: 36,
        borderRadius: '50%',
        transition: 'all 0.25s ease',
        '&:hover': {
          backgroundColor: colors.secondaryColor,
          color: theme.white,
        },
      },
    },
  }));
