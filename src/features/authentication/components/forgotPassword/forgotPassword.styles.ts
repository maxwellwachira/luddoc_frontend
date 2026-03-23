import { createStyles } from '@mantine/core';

import { colors } from '../../../../constants/colors';

export const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.colorScheme === 'light'
            ? `linear-gradient(165deg, #FFFFFF 0%, ${colors.secondaryColorLight} 100%)`
            : theme.colors.dark[7],
        padding: '60px 20px',
        position: 'relative' as const,
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(206,160,40,0.06) 0%, transparent 70%)',
        },
    },
    card: {
        backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.colors.dark[6],
        borderRadius: 20,
        padding: '48px 40px',
        width: '100%',
        maxWidth: 440,
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
            padding: '36px 24px',
        },
    },
    iconBox: {
        width: 64,
        height: 64,
        borderRadius: 18,
        background: `linear-gradient(135deg, ${colors.secondaryColor}, ${colors.goldGradientEnd})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
    },
    title: {
        fontSize: 28,
        fontWeight: 800,
        color: theme.colorScheme === 'light' ? colors.primaryColor : theme.white,
        textAlign: 'center' as const,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: theme.colors.gray[6],
        textAlign: 'center' as const,
        marginBottom: 32,
        lineHeight: 1.6,
    },
    goldText: {
        color: colors.secondaryColor,
    },
    input: {
        '& input': {
            borderRadius: 10,
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
    button: {
        backgroundColor: colors.secondaryColor,
        borderRadius: 30,
        height: 46,
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
}));
