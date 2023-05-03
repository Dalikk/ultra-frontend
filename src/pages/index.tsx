import Head from 'next/head';
import { Layout } from '@/layouts/DefaultLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>ULTRA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={'Главная'}>
        <h1>Главная</h1>
      </Layout>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <Layout title={'Главная'}>{page}</Layout>;
};
