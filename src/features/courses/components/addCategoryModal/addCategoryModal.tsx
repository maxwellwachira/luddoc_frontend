import { Modal,TextInput, Stack, Button, Container,  Text, Alert } from '@mantine/core';
import { IconAlertCircle, IconCheck } from '@tabler/icons';

import { colors } from '../../../../constants/colors';
import { useAddCategory } from '../../hooks/useAddCategory';


interface AddCategoryInterface {
    open: boolean;
    onClose: () => void;
};

const AddCategoryModal = ({open, onClose}: AddCategoryInterface) => {
    const { form, loading, response, handleSubmit } = useAddCategory();

    return (
        <>
            <Modal
                opened={open}
                onClose={onClose}
                size="600px"
            >
                <Container>
                    <Text weight={600} color={`${colors.secondaryColor}`} size={28} mb="lg">Add New Category</Text>
                  
                    {response === 'success' ? (   
                        <Alert icon={<IconCheck size={16} />} title="Success" color="green">
                           Category added Successfully
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
                                Add Category
                            </Button>
                        </Stack>
                    </form>
                </Container>
            </Modal>
        </>
    )
}

export default AddCategoryModal;
