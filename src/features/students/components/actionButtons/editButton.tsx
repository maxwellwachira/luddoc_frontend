import { Text, UnstyledButton } from "@mantine/core";

import { useStyles } from './actionButtons.styles';

interface UserID {
    id: number
}

const EditButton = ({id}: UserID) => {
    const { classes } = useStyles();
    const onClick = () => {
        console.log(id);
    }
    return (
        <UnstyledButton onClick={onClick} className={`${classes.button} ${classes.editButton}`}>
            <Text size="sm">Edit</Text>
        </UnstyledButton>
    )
}

export default EditButton;