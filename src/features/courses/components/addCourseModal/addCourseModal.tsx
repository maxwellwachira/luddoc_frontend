import { useState } from 'react';
import { Modal,TextInput, Stack, Select, Radio, NumberInput, Button, Container, Grid, Center, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import Image from 'next/image';

import DropZone from '../dropZone/dropZone';
import { colors } from '../../../../constants/colors';
import { useStyles } from './addCourseModal.styles';



interface AddCourseData {
    open: boolean;
    selectData: {
        value: string;
        label: string;
    }[];
    onClose: () => void;
};

const AddCourseModal = ({open, selectData, onClose}: AddCourseData) => {
    const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {
      courseName: '',
      category: '',
      pricing: 'free',
      amount: 0.00,
      thumbnail: '',
    },
});

const confirmNext = () => {
    const correct = confirm("Are the details correct?");
    if (correct){
        console.log("correct")
    }

}


  return (
    <>
      <Modal
        opened={open}
        onClose={onClose}
        size="100%"
      >

        <Container>
            <Grid>
                <Grid.Col md={6}>
                    <Center>
                        <Image 
                             src='/course.svg'
                             height={500}
                             width={500}
                        />
                    </Center>
                </Grid.Col>
                <Grid.Col md={6}>
                    <Text weight={600} color={`${colors.secondaryColor}`} size={28}>Add Course</Text>
                    <form>
                        <Stack>
                            <TextInput 
                                required
                                label="Course Name"
                                placeholder="Enter the name of the course"
                                value={form.values.courseName}
                                onChange={(event) => form.setFieldValue('courseName', event.currentTarget.value)}
                                mt="lg"
                            />
                            <Select 
                                label="Category"
                                placeholder='Select Course Category'
                                withAsterisk
                                searchable
                                nothingFound="No options"
                                {...form.getInputProps('category', { type: 'input' })}
                                data={selectData}
                                mt="md"
                            />
                            <Radio.Group
                                label="Pricing"
                                description="Is this a free or paid course?"
                                withAsterisk
                                {...form.getInputProps('pricing', { type: 'input' })}
                                mt="md"
                            >
                                <Radio value="free" label="Free" />
                                <Radio value="paid" label="Paid" />
                            </Radio.Group>

                            {form.values.pricing != "free" && 
                                <NumberInput 
                                    decimalSeparator="."
                                    label="Amount"
                                    placeholder='Enter pricing amount'
                                    {...form.getInputProps('amount', { type: 'input' })}
                                    mt="md"
                                    withAsterisk
                                />
                            }
                            <DropZone />
                            <Button
                                onClick={confirmNext}
                                className={`${classes.button} ${classes.nextButton}`}
                                size="md"
                                mt="md"
                            >
                                Add Course
                            </Button>
                    

                        </Stack>
                    </form>
                </Grid.Col>
            </Grid>
        </Container>
       
       
      </Modal>
      {console.log(form.values)}
    </>
  );
}

export default AddCourseModal;