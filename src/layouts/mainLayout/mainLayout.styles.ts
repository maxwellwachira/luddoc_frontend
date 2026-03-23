import { createStyles } from '@mantine/core';

import { colors } from '../../constants/colors';

export const useStyles = createStyles((theme) => ({
    active: {
       textDecoration: 'none',
       color: `${colors.secondaryColor} !important`,
    },

    activeSignIn: {
        backgroundColor: `${colors.secondaryColor}`,
        color: `${theme.colors.gray[0]} !important`,
    },

    activeSignUp: {
        backgroundColor: `${colors.secondaryColor}`,
        color: `${theme.colors.gray[0]} !important`,
    },

    bodyBackground: {
        background: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[7],
        margin: 0,
    },

    burger: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 70,
        padding: '0 16px',
    },

    burgerText: {
        color: colors.secondaryColor,
        fontWeight: 700,
        fontSize: 16,
        '&:hover': {
            textDecoration: 'none',
        },
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
    },

    headerBackground: {
        background: colors.primaryColor,
        borderBottom: `1px solid rgba(206, 160, 40, 0.15)`,
    },

    links: {
        display: "flex",
        alignItems: 'center',
        gap: 4,
        [theme.fn.smallerThan("md")]: {
            display: "none"
        }
    },

    logo: {
        margin: "0 8px",
        [theme.fn.smallerThan("md")]: {
            display: "none"
        }
    },

    navbar: {
        backgroundColor: colors.primaryColor,
        borderRight: 'none',
        padding: '8px 0',
        [theme.fn.largerThan("md")]: {
          display: "none"
        },
    },

    navitem: {
        margin: "0 10px",
        padding: '6px 12px',
        borderRadius: 6,
        fontSize: 14,
        fontWeight: 500,
        color: theme.colors.gray[4],
        transition: 'all 0.2s ease',

        '&:hover': {
            textDecoration: 'none',
            color: colors.secondaryColor,
            backgroundColor: 'rgba(206, 160, 40, 0.08)',
        }
    },

    signin: {
        backgroundColor: 'transparent',
        border: `2px solid ${colors.secondaryColor}`,
        padding: '8px 28px',
        textAlign: 'center',
        color: colors.secondaryColor,
        borderRadius: 30,
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: 0.5,
        transition: 'all 0.3s ease',
        marginLeft: 12,

        [theme.fn.smallerThan("md")]: {
          width: '130px',
          margin: '8px 10px',
          textAlign: 'center',
        },
        '&:hover': {
            backgroundColor: colors.secondaryColor,
            color: theme.white,
            textDecoration: 'none',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 15px rgba(206, 160, 40, 0.3)',
        },
    },

    signup: {
        backgroundColor: colors.secondaryColor,
        border: `2px solid ${colors.secondaryColor}`,
        padding: '8px 28px',
        textAlign: 'center',
        color: theme.white,
        borderRadius: 30,
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: 0.5,
        transition: 'all 0.3s ease',
        boxShadow: '0 0 20px rgba(206, 160, 40, 0.35)',
        marginLeft: 6,

        [theme.fn.smallerThan("md")]: {
            width: '130px',
            margin: '8px 10px',
            textAlign: 'center',
        },
        '&:hover': {
            backgroundColor: colors.secondaryColorDark,
            borderColor: colors.secondaryColorDark,
            textDecoration: 'none',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 15px rgba(206, 160, 40, 0.4)',
        },
    },

    wrapper: {
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
    }

}))
