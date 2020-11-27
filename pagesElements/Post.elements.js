import styled from 'styled-components';
import Link from 'next/link';
import postAreaStyles from '../styles/post.styles.js';

export const PostWrapper = styled.main`
  background-color: #f9f9f9;
  color: #333;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;

  div#post {
    ${postAreaStyles}
  }
`;

export const PostTitle = styled.h1`
  font-weight: 700;
  letter-spacing: -0.05rem;
  font-size: 2.5rem;

  @media screen and (max-width: 520px) {
    font-size: 2.05rem;
    text-align: center;
  }
`;

export const PostDate = styled.p`
  margin-bottom: 0.65rem;
  color: #777;
`;

export const BackToHome = styled.a`
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: #fff;
  position: fixed;
  top: 1rem;
  left: 1rem;
  transition: color 0.2s ease;
  font-size: 1.08rem;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue};
  }
`;
