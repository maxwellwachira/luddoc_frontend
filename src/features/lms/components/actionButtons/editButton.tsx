import { useState } from "react";
import { Alert, Button, Container, Modal, Stack, Text, TextInput, UnstyledButton, Select, Radio, NumberInput, Stepper, Group, Box, Textarea, FileInput, Notification, Divider } from "@mantine/core";
import { IconAlertCircle, IconArrowLeft, IconArrowRight, IconCheck, IconCross, IconUpload, IconX } from "@tabler/icons";

import { useStyles } from './actionButtons.styles';
import { colors } from "../../../../constants/colors";
import { useEditCategory } from "../../hooks/useEditCategory";
import { useEditCourse } from "../../hooks/useEditCourse";
import { useEditTopic } from "../../hooks/useEditTopic";

interface ID {
    id: string;
    type: string;
}

const videoSourceSelect = [
    { value: 'youtube', label: 'YouTube' },
    { value: 'vimeo', label: 'Vimeo' },
    { value: 'other', label: 'Other' },
];

const EditButton = ({id, type}: ID) => {
    const { classes } = useStyles();
    const [openEditCourse, setOpenEditCourse] = useState(false);
    const [openEditCategory, setOpenEditCategory] = useState(false);
    const [openEditTopic, setOpenEditTopic] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const {form, loading, response, handleSubmit } = useEditCategory(id, type);
    const { active, courseForm, nextText, courseResponse, nextClick, handleCourseSubmit, prevStep, setActive, categorySelectData} = useEditCourse(id, type);
    const {topicForm, topicLoading, topicResponse, topicHandleSubmit } = useEditTopic(id, type);

    const onClick = async() => {
        type === 'category' ? setOpenEditCategory(true) : type === "course" ? setOpenEditCourse(true) : setOpenEditTopic(true);
    } 
    const onClose = () => {
        type === 'category' ? setOpenEditCategory(false) : type === "course" ? setOpenEditCourse(false) : setOpenEditTopic(false);
    }
    const pricingChange = () => {
        if(courseForm.values.pricing === 'free') courseForm.setFieldValue('amount', 0);
    }
    return (
        <>
            <UnstyledButton onClick={onClick} className={`${classes.button} ${classes.editButton}`}>
                <Text size="sm">Edit</Text>
            </UnstyledButton>
            <Modal
                opened={openEditCategory}
                onClose={onClose}
                size="600px"
            >
                <Container>
                    <Text weight={600} color={`${colors.secondaryColor}`} size={28} mb="lg">Edit New Category</Text>
                  
                    {response === 'success' ? (   
                        <Alert icon={<IconCheck size={16} />} title="Success" color="green">
                           Category Edited Successfully
                        </Alert>           
                    ): response ? (
                        <Alert icon={<IconAlertCircle size={16} />} title="Error!" color="red">
                            Reason: {response} <br />
                        </Alert>
                    ): ''}
                    <form onSubmit={form.onSubmit(() => handleSubmit())}>
                       
                        <Stack>
                            <TextInput
                                withAsterisk
                                label="Category Name"
                                placeholder="Enter the name of the category"
                                value={form.values.categoryName}
                                onChange={(event) => form.setFieldValue('categoryName', event.currentTarget.value)}
                                mt="lg"
                                error={form.errors.categoryName}
                            />

                            <Button 
                                rightIcon={<IconCheck />}
                                color="dark"
                                my="lg"
                                type='submit'
                                loading={loading}
                                loaderPosition="left"
                            >
                                Edit Category
                            </Button>
                        </Stack>
                    </form>
                </Container>
            </Modal>
            <Modal
                opened={openEditCourse}
                onClose={onClose}
                size="600px"
                title={<Text weight={600} color={`${colors.secondaryColor}`} size={25} >Edit Course</Text>}
            >
                <Divider />
                <Container>
                    <Stepper active={active} onStepClick={setActive} breakpoint="sm" color="dark" mt="lg">
                        <Stepper.Step label="First step" description="Course Basic Info" allowStepSelect={active > 0}>
                            <Text color={`${colors.secondaryColor}`} size={20}>Step 1 content: Basic Infomartion</Text>
                        </Stepper.Step>
                        <Stepper.Step label="Second step" description="Course Description" allowStepSelect={active > 1}>
                            <Text color={`${colors.secondaryColor}`} size={20}>Step 2 content: Course Description</Text>
                        </Stepper.Step>
                        <Stepper.Step label="Third step" description="Description Video" allowStepSelect={active > 2}>
                            <Text color={`${colors.secondaryColor}`} size={20}>Step 3 content: Description Video</Text>
                        </Stepper.Step>
                        <Stepper.Completed>
                                <Text color={`${colors.secondaryColor}`} size={20}> Click Submit to edit course </Text>
                                {JSON.stringify(courseForm.errors) === "{}" ? "" :(
                                    <Notification icon={<IconX size={18} />} color="red" title="Error">
                                        <Text>{courseForm.errors?.courseName}</Text>
                                        <Text>{courseForm.errors?.CategoryId}</Text>
                                        <Text>{courseForm.errors?.descriptionTitle}</Text>
                                        <Text>{courseForm.errors?.descriptionContent}</Text>
                                </Notification>
                                )}
                        </Stepper.Completed>
                    </Stepper> 
                    <Box my="md">
                        {courseResponse === 'success' ? (   
                            <Alert icon={<IconCheck size={16} />} title="Success" color="green">
                                success
                            </Alert>           
                        ): courseResponse ? (
                            <Alert icon={<IconAlertCircle size={16} />} title="Error!" color="red">
                                Reason: {courseResponse} <br />
                            </Alert>
                        ): ''}
                    </Box>       
                    <form onSubmit={courseForm.onSubmit(() => handleCourseSubmit(file))}>
                        <Stack>
                            <Box hidden={active !== 0 ? true : false}>
                                <TextInput 
                                    label="Course Name"
                                    placeholder="Enter the name of the course"
                                    value={courseForm.values.courseName}
                                    onChange={(event) => courseForm.setFieldValue('courseName', event.currentTarget.value)}
                                    mt="lg"
                                    error={courseForm.errors.courseName}
                                />
                                <Select 
                                    label="Category"
                                    placeholder='Select Course Category'
                                    withAsterisk
                                    searchable
                                    nothingFound="No options"
                                    {...courseForm.getInputProps('CategoryId', { type: 'input' })}
                                    data={categorySelectData()}
                                    mt="md"
                                    error={courseForm.errors.CategoryId}
                                />
                                <Radio.Group
                                    label="Pricing"
                                    description="Is this a free or paid course?"
                                    withAsterisk
                                    {...courseForm.getInputProps('pricing', { type: 'input' })}
                                    
                                    mt="md"
                                    
                                >
                                    <Radio value="free" label="Free" color='dark' />
                                    <Radio value="paid" label="Paid" color='dark' />
                                </Radio.Group>

                                {courseForm.values.pricing != "free" && 
                                    <NumberInput 
                                        decimalSeparator="."
                                        label="Amount"
                                        placeholder='Enter pricing amount'
                                        {...courseForm.getInputProps('amount', { type: 'input' })}
                                        mt="md"
                                        withAsterisk
                                    />
                                }
                            </Box>
                            <Box hidden={active !== 1 ? true : false}>
                                <TextInput 
                                    withAsterisk
                                    label="Description Title"
                                    placeholder="Enter Course Description Title"
                                    value={courseForm.values.descriptionTitle}
                                    onChange={(event) => courseForm.setFieldValue('descriptionTitle', event.currentTarget.value)}
                                    mt="lg"
                                />
                                <Textarea 
                                    withAsterisk
                                    label="Description Content"
                                    placeholder="Enter Course Description content"
                                    value={courseForm.values.descriptionContent}
                                    onChange={(event) => courseForm.setFieldValue('descriptionContent', event.currentTarget.value)}
                                    mt="lg"
                                />  

                                <Radio.Group
                                    label="Edit Thumbnail"
                                    description="click edit to upload new thumbnail image"
                                    {...courseForm.getInputProps('editThumbnail', { type: 'input' })}
                                    mt="md"
                                    
                                >
                                    <Radio value="edit" label="edit" color='dark' />
                                    <Radio value="doNotEdit" label="do not edit" color='dark' />
                                </Radio.Group>

                                {courseForm.values.editThumbnail != "doNotEdit" && 
                                    <FileInput 
                                        required
                                        label="Course Thumbnail" 
                                        placeholder="upload thumbnail image" 
                                        icon={<IconUpload size={14} />}
                                        mt="lg"
                                        value={file}
                                        onChange={setFile}  
                                    />
                                }
                            </Box>
                            <Box hidden={active !== 2 ? true : false}>
                                <Radio.Group
                                    label="Description video"
                                    description="is there a description video?"
                                    withAsterisk
                                    mt="md"
                                    {...courseForm.getInputProps('hasVideo', { type: 'input' })}
                                        
                                >
                                    <Radio value="true" label="Has video" color='dark' />
                                    <Radio value="false" label="No video" color='dark' />
                                </Radio.Group>

                                <Select 
                                    label="Video Source"
                                    placeholder='Select Video Source'
                                    withAsterisk
                                    searchable
                                    nothingFound="No options"
                                    data={videoSourceSelect}
                                    mt="lg"
                                    disabled={courseForm.values.hasVideo === "false" ? true : false}
                                    {...courseForm.getInputProps('videoSource', { type: 'input' })}
                                />
                                <TextInput 
                                    withAsterisk
                                    label="Video Link"
                                    placeholder="Enter Video Link"                   
                                    mt="lg"
                                    disabled={courseForm.values.hasVideo === "false" ? true : false}
                                    {...courseForm.getInputProps('videoUrl', { type: 'input' })}
                                />
                            </Box>
                            
                            <Group position="center" my="xl">
                                <Button 
                                    variant="outline" 
                                    onClick={prevStep} 
                                    type="button"
                                    leftIcon={<IconArrowLeft />} 
                                    color="dark"   
                                    disabled={active === 0 ? true : false}      
                                >
                                    Back
                                </Button>
                                <Button 
                                    onClick={nextClick}
                                    rightIcon={active >= 3 ? <IconCheck /> : <IconArrowRight />}
                                    color="dark"
                                    type={active === 4 ? 'submit': 'button'}
                                >
                                {nextText}
                                </Button>
                            </Group>
                        </Stack>
                    </form>             
                </Container>   

            </Modal>
            <Modal
                opened={openEditTopic}
                onClose={onClose}
                size="600px"
                title={<Text weight={600} color={`${colors.secondaryColor}`} size={28}>Edit Topic</Text>}
            >
                <Divider my="xl"/>
                <Container>
                    {topicResponse === 'success' ? (   
                        <Alert icon={<IconCheck size={16} />} title="Success" color="green">
                           Topic Edited Successfully
                        </Alert>           
                    ): topicResponse ? (
                        <Alert icon={<IconAlertCircle size={16} />} title="Error!" color="red">
                            Reason: {topicResponse} <br />
                        </Alert>
                    ): ''}
                    <form onSubmit={topicForm.onSubmit(() => topicHandleSubmit())}>
                       
                        <Stack>
                            <TextInput
                                withAsterisk
                                label="Topic Title"
                                placeholder="Enter the title of the topic"
                                value={topicForm.values.topicName}
                                onChange={(event) => topicForm.setFieldValue('topicName', event.currentTarget.value)}
                                mt="md"
                                error={topicForm.errors.topicName}
                            />

                            <Button 
                                rightIcon={<IconCheck />}
                                color="dark"
                                my="lg"
                                type='submit'
                                loading={topicLoading}
                                loaderPosition="left"
                            >
                                Edit Topic
                            </Button>
                        </Stack>
                    </form>
                </Container>
            </Modal>
        </>
    )
}

export default EditButton;

