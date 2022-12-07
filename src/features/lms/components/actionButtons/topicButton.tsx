import { Text, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";

import { urls } from "../../../../constants/urls";
import { useStyles } from './actionButtons.styles';

interface ID {
    id: string;
    type: string;
}

const TopicButton = ({id, type}: ID) => {
    const { classes } = useStyles();
    const router = useRouter();
    
    const onClick = () => {
        router.push(`${urls.frontEnd}/${type === "Topics" ? "topics" : "lessons"}/${id}`).then(() => router.reload());
    }
    
    return (
        <UnstyledButton  className={`${classes.button} ${classes.topicButton}`} onClick={onClick}>
            <Text size="sm">{type}</Text>
        </UnstyledButton>
    )
}

export default TopicButton;