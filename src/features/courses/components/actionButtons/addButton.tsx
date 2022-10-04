import { Text, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

import { useStyles } from './actionButtons.styles';

interface UserID {
    id: number;
    type: string;
}

const AddButton = ({id, type}: UserID) => {
    const { classes } = useStyles();
    const onClick = () => {
        console.log(id);
    }
    return (
        <Button 
            onClick={onClick} 
            className={`${classes.button} ${classes.addButton}`}
            leftIcon={<IconPlus />}
        >
            <Text size="xl">Add {type}</Text>
        </Button>
    )
}

export default AddButton;