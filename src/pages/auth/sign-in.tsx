import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../../layouts/mainLayout/mainLayout';
import { Login } from '../../features/authentication';


const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | Sign In</title>
        <meta name="description" content="Sign in / Login to Luddoc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Login />
      </MainLayout>
    </>
  );
}

export default SignIn;