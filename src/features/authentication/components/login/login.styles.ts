import { createStyles } from '@mantine/core';

import { colors } from '../../../../constants/colors';


export const useStyles = createStyles((theme) => ({
    button: {
        background: `${colors.secondaryColor}`,

        '&:hover': {
            background: `${colors.secondaryColor}`,
            opacity: 0.7
        }
    },
    wrapper: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        width: "800px",
        backgroundColor:  theme.colorScheme === 'light' ?  "white" : theme.colors.dark[8],

        [theme.fn.smallerThan("md")]: {
            width: "60%",
        },

        [theme.fn.smallerThan("sm")]: {
            width: "95%",
        }
     }
}))