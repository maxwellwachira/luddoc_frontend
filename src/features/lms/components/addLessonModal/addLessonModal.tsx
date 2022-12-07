import { useState } from 'react';
import dynamic from 'next/dynamic'
import { Modal, TextInput, Stack, Button, Container, Text, Stepper, Group, Box, Notification, Divider, Paper } from '@mantine/core';
import { IconArrowLeft, IconArrowRight, IconCheck, IconUpload, IconX } from '@tabler/icons';
import { EditorProps } from 'react-draft-wysiwyg'
const Editor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
);
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';

import { colors } from '../../../../constants/colors';
import { useAddCourse } from '../../hooks/useAddCourse';


interface AddCourseData {
    open: boolean;
    onClose: () => void;
};

const videoSourceSelect = [
    { value: 'youtube', label: 'YouTube' },
    { value: 'vimeo', label: 'Vimeo' },
    { value: 'other', label: 'Other' },
];

const AddLessonModal = ({ open, onClose }: AddCourseData) => {
    const [file, setFile] = useState<File | null>(null);
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [ convertedContent, setConvertedContent] = useState('');
    const { active, form, nextText, nextClick, handleSubmit, prevStep, setActive, categorySelectData } = useAddCourse();

    const handleEditorChange = (state: any) => {
        setEditorState(state);
        convertContentToHTML();
    }
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    }

    console.log(convertedContent)

    return (
        <>
            <Modal
                opened={open}
                onClose={onClose}
                size="600"
                title={<Text weight={600} color={`${colors.secondaryColor}`} size={28}>Add New Lesson</Text>}
            >
                <Divider mb="xl" />
                <Container>

                    <Stepper active={active} onStepClick={setActive} breakpoint="sm" color="dark">
                        <Stepper.Step label="First step" description="Lesson Title" allowStepSelect={active > 0}>
                            <Text color={`${colors.secondaryColor}`} size={20}>Step 1 content: Lesson Title</Text>
                        </Stepper.Step>
                        <Stepper.Step label="Second step" description="Lesson Content" allowStepSelect={active > 1}>
                            <Text color={`${colors.secondaryColor}`} size={20}>Step 2 content: Lesson Content</Text>
                        </Stepper.Step>

                        <Stepper.Completed>
                            <Text color={`${colors.secondaryColor}`} size={20}> Click Submit to add lesson </Text>
                            {JSON.stringify(form.errors) === "{}" ? "" : (
                                <Notification icon={<IconX size={18} />} color="red" title="Error">
                                    <Text>{form.errors?.courseName}</Text>
                                    <Text>{form.errors?.CategoryId}</Text>
                                    <Text>{form.errors?.descriptionTitle}</Text>
                                    <Text>{form.errors?.descriptionContent}</Text>
                                </Notification>
                            )}
                        </Stepper.Completed>
                    </Stepper>
                    <form onSubmit={form.onSubmit(() => handleSubmit(file))}>
                        <Stack>
                            <Box hidden={active !== 0 ? true : false}>
                                <TextInput
                                    label="Lesson Title"
                                    placeholder="Enter the title of the lesson"
                                    value={form.values.courseName}
                                    onChange={(event) => form.setFieldValue('courseName', event.currentTarget.value)}
                                    mt="lg"
                                    error={form.errors.courseName}
                                />
                            </Box>
                            <Paper hidden={active !== 1 ? true : false} withBorder pb={20} px={10}  pt={10} mt={20} radius={15}>
                                <Editor
                                    editorState={editorState}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={handleEditorChange}
                                />
                            </Paper>
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
                                    type={active === 4 ? 'submit' : 'button'}
                                >
                                    {nextText}
                                </Button>
                            </Group>
                        </Stack>
                    </form>
                </Container>
            </Modal>
        </>
    );
}

export default AddLessonModal;