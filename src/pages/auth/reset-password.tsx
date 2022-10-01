import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../../layouts/mainLayout/mainLayout';
import { ResetPassword } from '../../features/authentication';

const ResetPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | Reset Password</title>
        <meta name="description" content="Reset password Luddoc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ResetPassword />
      </MainLayout>
    </>
  );
}

export default ResetPage;