import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 40vw;
  max-width: 1200px;
`;

export const PostsContainer = styled.main`
  margin-top: 1rem;
`;

export const Heading = styled.h2`
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0.7rem;
`;

export const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const PostListItem = styled.li`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.3rem;
  color: #333;
  display: flex;
  flex-direction: column;
  row-gap: 0;

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  small {
    color: #bbb;
  }
`;
