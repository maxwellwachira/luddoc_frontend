import { useState } from 'react';
import { Text, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

import { useStyles } from './actionButtons.styles';
import  AddCourseModal from '../addCourseModal/addCourseModal';
import AddCategoryModal from '../addCategoryModal/addCategoryModal';
import AddTopicModal from '../addTopicModal/addTopicModal';

interface UserID {
    id: number;
    type: string;
}

const selectData = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
];


const AddButton = ({id, type}: UserID) => {
    const [openAddCourse, setOpenAddCourse] = useState(false);
    const [openAddCategory, setOpenAddCategory] = useState(false);
    const [openAddTopic, setOpenAddTopic] = useState(false);
    const { classes } = useStyles();

    const onClick = () => {
        type === 'Course' ? setOpenAddCourse(true) : type === 'Category' ?  setOpenAddCategory(true) : setOpenAddTopic(true);
    } 

    const onClose = () => {
        type === 'Course' ? setOpenAddCourse(false) :type === 'Category' ?  setOpenAddCategory(false) : setOpenAddTopic(false);
    }
    
    return (
       <>
            <Button 
                onClick={onClick} 
                className={`${classes.button} ${classes.addButton}`}
                leftIcon={<IconPlus />}
            >
                <Text size="xl">Add {type}</Text>
            </Button>
            <AddCourseModal open={openAddCourse}  selectData={selectData} onClose={onClose}/>
            <AddCategoryModal  open={openAddCategory} onClose={onClose}/>
            <AddTopicModal  open={openAddTopic} onClose={onClose} id={id} />
        </>
    )
}

export default AddButton;