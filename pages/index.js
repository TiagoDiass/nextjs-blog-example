import Head from 'next/head';
import { Header } from '../components';
import { PageContainer } from '../pagesElements/Home.elements';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog | Tiago Dias</title>
      </Head>
      <PageContainer>
        <Header />
      </PageContainer>
    </>
  );
}
