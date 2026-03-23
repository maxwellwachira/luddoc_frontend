import type { NextPage } from 'next';
import Head from 'next/head';
import { Register } from '../../features/authentication';

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Luddoc | Sign Up</title>
        <meta name="description" content="Create an account at Luddoc Skills For Life Technical Institute" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register />
    </>
  );
}

export default SignUp;
