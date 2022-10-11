import { createStyles } from "@mantine/core";

import { colors } from "../../constants/colors";

export const useStyles = createStyles((theme) => ({
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      paddingBottom: 0,
    },
  
    header: {
      padding: theme.spacing.md,
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      color: `${colors.secondaryColor}`

    },
    links: {
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
    },
  
    linksInner: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
  
    footer: {
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },

    active: {
      backgroundColor: `${colors.secondaryColorLight}`,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    activeGroupLink: {
      backgroundColor: theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    control: {
      fontWeight: 500,
      display: 'block',
      width: '100%',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      fontSize: theme.fontSizes.sm,
  
      '&:hover': {
        backgroundColor: `${colors.secondaryColorLight}`,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },

    directLink: {
      fontWeight: 500,
      display: 'block',
      textDecoration: 'none',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      paddingLeft: 31,
      marginLeft: 30,
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  
      '&:hover': {
        backgroundColor: `${colors.secondaryColorLight}`,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  
    link: {
      fontWeight: 500,
      display: 'block',
      textDecoration: 'none',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      paddingLeft: 31,
      marginLeft: 30,
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  
      '&:hover': {
        backgroundColor: theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  
    chevron: {
      transition: 'transform 200ms ease',
    },
  }));