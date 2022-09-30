import { createStyles } from '@mantine/core';

import { colors } from '../../constants/colors';

export const useStyles = createStyles((theme) => ({
    active: {
       textDecoration: 'underline',
       textDecorationColor: `${colors.secondaryColor}`,
       textDecorationThickness: '4px'
    },

    activeSignIn: {
        backgroundColor: `${colors.secondaryColor}`,
        color: theme.colors.gray[0] 
    },


    activeSignUp: {
        backgroundColor: `${colors.primaryColor}`,
        color:  theme.colors.gray[0] 
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
        height: "120px"
    },

    headerBackground: {
        background: 'transparent'
    },

    links: {
        margin: "0 25px",
        display: "flex",
        [theme.fn.smallerThan("md")]: {
            display: "none"
        }
    },

    logo: {
        margin: "0 20px",
        [theme.fn.smallerThan("md")]: {
            display: "none"
        }
    },

    navbar: {
        [theme.fn.largerThan("md")]: {
          display: "none"
        },

    },
    
    navitem: {
        margin: "0 15px",
        color: theme.colorScheme === 'dark' ?  theme.colors.gray[5] : theme.colors.dark[5],

        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: `${colors.secondaryColor}`,
            textDecorationThickness: '4px'
        }
    },

    signin: {
        backgroundColor: "transaparent",
        border: `2px solid ${colors.secondaryColor}`,
        display: "inline-block",
        padding: "1px 10px",
        textAlign: "center",
        color:  `${colors.secondaryColor}`,

        [theme.fn.smallerThan("md")]: {
          width: '100px',
          margin: '7px 7px'
        },
        '&:hover': {
            backgroundColor: `${colors.secondaryColor}`,
            color:  theme.colors.gray[0],
            
        }
    
    },

    signup: {
        backgroundColor: 'transaparent',
        border: `2px solid ${colors.primaryColor}`,
        display: "inline-block",
        padding: "1px 10px",
        textAlign: "center",
        color:  theme.colorScheme === 'light' ? theme.colors.dark[7] : theme.colors.gray[0] ,
        [theme.fn.smallerThan("md")]: {
            width: '100px',
            margin: '7px 7px'
        },

        '&:hover': {
            backgroundColor: `${colors.primaryColor}`,
            color: theme.colorScheme === 'light' ?  theme.colors.gray[0] : theme.colors.dark[7],
            textDecoration: 'none'
        }, 
    },

    wrapper: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        height:'110%'
    }

}))