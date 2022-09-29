import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    active: {
        color: theme.colorScheme === 'dark' ?  theme.colors.gray[0] : theme.colors.dark[9]
    },

    bodyBackground: {
        background: theme.colorScheme === 'light' ?  theme.colors.gray[0] : theme.colors.dark[7],
        margin: "0"
    },

    burger: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px"
    },

    header: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px"
    },

    headerBackground: {
        background: theme.colorScheme === 'light' ?  "white" : theme.colors.dark[7],
    },

    links: {
        margin: "0 25px",
        display: "flex",
        [theme.fn.smallerThan("sm")]: {
            display: "none"
        }
    },

    logo: {
        [theme.fn.smallerThan("sm")]: {
            display: "none"
        }
    },

    navbar: {
        [theme.fn.largerThan("sm")]: {
          display: "none"
        }
    },
    
    navitem: {
        margin: "0 15px",
        color: theme.colorScheme === 'dark' ?  theme.colors.gray[5] : theme.colors.dark[5],

        '&:hover': {
            textDecoration: 'none',
            color: theme.colorScheme === 'dark' ?  theme.colors.gray[0] : theme.colors.dark[9],
        }
    },

    signin: {
        backgroundColor: theme.colors.cyan[9],
        border: "2px solid #0B7285",
        display: "inline-block",
        padding: "1px 10px",
        textAlign: "center",
        color:  theme.colors.gray[1] 
    },

    signup: {
        backgroundColor: "transparent",
        border: "2px solid #0B7285",
        padding: "1px 10px"
    },

}))