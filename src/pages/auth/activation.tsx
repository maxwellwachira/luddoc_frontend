import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Alert, Button, Center, Container, Stack } from '@mantine/core';
import { IconCheck, IconAlertCircle } from '@tabler/icons';

import MainLayout from '../../layouts/mainLayout/mainLayout';
import { useActivateUser } from '../../features/authentication/hooks/useActivateUser';
import successImage  from '../../assets/success.jpg';

const ForgotPass: NextPage = () => {
    const { buttonClicked, response, onClick } = useActivateUser();
  return (
    <>
      <Head>
        <title>Luddoc | Forgot Password</title>
        <meta name="description" content="SForgot password Luddoc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container>
            {response === 'success' ? (
                <Stack justify="center">
                        {buttonClicked ? '' : (
                            <Image 
                                src={successImage}
                                height={500}
                                width={400}
                            />
                        )}
                        <Alert icon={<IconCheck size={16} />} title="Success" color="green">
                            {buttonClicked ? 'Activation Link has been sent. Check Email' : 'Account Activation was successful. You can now Sign in'}
                        </Alert>           
                </Stack>
                
                   
            
            ): response ? (
                <Alert icon={<IconAlertCircle size={16} />} title="Error!" color="red">
                     Account Activation Failed. <br /> Reason: {response} <br />
                     <Button color="dark" mt="lg" onClick={onClick} loading={ !response? true : false }>Resend Activation Link</Button>
                </Alert>
            ): ''}
        </Container>
      </MainLayout>
    </>
  );
}

export default ForgotPass;