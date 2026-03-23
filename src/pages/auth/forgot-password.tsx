import type { NextPage } from 'next';
import Head from 'next/head';
import { ForgotPassword } from '../../features/authentication';

const ForgotPass: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | Forgot Password</title>
        <meta name="description" content="Reset your Luddoc account password" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ForgotPassword />
    </>
  );
}

export default ForgotPass;
