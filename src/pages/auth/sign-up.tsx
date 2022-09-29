import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../../layouts/mainLayout/mainLayout';
import { Register } from '../../features/authentication';

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | Sign Up</title>
        <meta name="description" content="Sign up / Register to Luddoc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Register />
      </MainLayout>
    </>
  );
}

export default SignUp;