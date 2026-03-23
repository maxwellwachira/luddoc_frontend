import type { NextPage } from 'next';
import Head from 'next/head';
import { ResetPassword } from '../../features/authentication';

const ResetPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | Reset Password</title>
        <meta name="description" content="Set a new password for your Luddoc account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResetPassword />
    </>
  );
}

export default ResetPage;
