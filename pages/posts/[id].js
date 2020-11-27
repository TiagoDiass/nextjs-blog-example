import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import { Date, MiniHeader } from '../../components';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { PageContainer } from '../../pagesElements/Home.elements';
import {
  PostWrapper,
  PostTitle,
  PostDate,
  BackToHome,
} from '../../pagesElements/Post.elements';

export default function Post({ postData }) {
  return (
    <PageContainer>
      <MiniHeader />
      <Link href='/'>
        <BackToHome>
          <BiArrowBack />
          Home
        </BackToHome>
      </Link>

      <PostWrapper>
        <PostTitle>{postData.title}</PostTitle>

        <PostDate>
          <Date dateString={postData.date} />
        </PostDate>

        <div
          id='post'
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </PostWrapper>
    </PageContainer>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
