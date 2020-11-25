import Head from 'next/head';
import Link from 'next/link';
import { Header, Date } from '../components';
import { getSortedPostsData } from '../lib/posts';
import {
  PageContainer,
  PostsContainer,
  Heading,
  PostsList,
  PostListItem,
} from '../pagesElements/Home.elements';

export default function Home({ allPostsData }) {
  console.log(allPostsData);

  return (
    <>
      <Head>
        <title>Blog | Tiago Dias</title>
      </Head>
      <PageContainer>
        <Header />

        <PostsContainer>
          <Heading>Posts</Heading>

          <PostsList>
            {allPostsData.map(({ id, date, title, description }) => (
              <PostListItem key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <p>{description}</p>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </PostListItem>
            ))}
          </PostsList>
        </PostsContainer>
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
