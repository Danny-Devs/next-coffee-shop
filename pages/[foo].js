import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Foo = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Head>
        <title>{router.query.foo}</title>
        <meta name='description' content='Find your favorite coffee shops!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>Page {router.query.foo}</div>
    </>
  );
    
};

export default Foo;
