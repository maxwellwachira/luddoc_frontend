import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../../layouts/mainLayout/mainLayout';
import { ForgotPassword } from '../../features/authentication';

const ForgotPass: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | Forgot Password</title>
        <meta name="description" content="SForgot password Luddoc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ForgotPassword />
      </MainLayout>
    </>
  );
}

export default ForgotPass;