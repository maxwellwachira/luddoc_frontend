import { createStyles } from "@mantine/core";

import { colors } from "../../../../constants/colors";

export const useStyles = createStyles((theme) => ({
    button: {
        padding: '2px 10px',
        borderRadius: '10px',
        background: 'transaparent',
        
    },

    nextButton: {
        background: `${colors.secondaryColor}`,
        color: 'white',
        '&:hover': {
            background: `${colors.secondaryColor}`,
            opacity: 0.7
        }
    },
}));