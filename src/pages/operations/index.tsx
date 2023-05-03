import { NextPage } from 'next';
import { Layout } from '@/layouts/DefaultLayout';
import React from 'react';

const OperationsPage: NextPage = () => {
  return (
    <>
      <Layout title={'Операции'}>
        <h1>Операции</h1>
      </Layout>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OperationsPage.getLayout = (page: React.ReactNode) => {
  return <Layout title={'Операции'}>{page}</Layout>;
};

export default OperationsPage;
