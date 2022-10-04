import { Text, UnstyledButton } from "@mantine/core";

import { useStyles } from './actionButtons.styles';

interface UserID {
    id: number
}

const DeleteButton = ({id}: UserID) => {
    const { classes } = useStyles();
    const onClick = () => {
        console.log(id);
    }
    return (
        <UnstyledButton onClick={onClick} className={`${classes.button} ${classes.deleteButton}`}>
            <Text size="sm">Delete</Text>
        </UnstyledButton>
    )
}

export default DeleteButton;