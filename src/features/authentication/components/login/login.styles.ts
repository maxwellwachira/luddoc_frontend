import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    wrapper: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        width: "420px",
        backgroundColor:  theme.colorScheme === 'light' ?  "white" : theme.colors.dark[8],

        [theme.fn.smallerThan("md")]: {
            width: "60%",
        },

        [theme.fn.smallerThan("sm")]: {
            width: "95%",
        }
        
     }
}))