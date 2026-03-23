import type { NextPage } from 'next';
import Head from 'next/head';
import { Login } from '../../features/authentication';

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | Sign In</title>
        <meta name="description" content="Sign in to Luddoc Skills For Life Technical Institute" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}

export default SignIn;
