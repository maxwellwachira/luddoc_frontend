import { Text, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";

import { urls } from "../../../../constants/urls";
import { useStyles } from './actionButtons.styles';

interface ID {
    type: string;
    courseId: string;
    topicId?: string;

}

const TopicButton = ({courseId, topicId, type}: ID) => {
    const { classes } = useStyles();
    const router = useRouter();
    
    const onClick = () => {
        router.push(`${urls.frontEnd}/topics/${courseId}${type === "Lessons" ? `/lessons/${topicId}` : ''}`).then(() => router.reload());
    }
    
    return (
        <UnstyledButton  className={`${classes.button} ${classes.topicButton}`} onClick={onClick}>
            <Text size="sm">{type}</Text>
        </UnstyledButton>
    )
}

export default TopicButton;