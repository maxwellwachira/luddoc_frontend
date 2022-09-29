import { Box, Loader } from '@mantine/core';

import { useStyles } from './pageLoader.styles';
import { colors } from '../../constants/colors';

const PageLoader = () => {
    const { classes } = useStyles();
    
    return (
        <Box className={classes.wrapper}>
            <Loader size="lg" variant="bars" color={colors.secondaryColor}/>
        </Box>
    );
}

export default PageLoader;