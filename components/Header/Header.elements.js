import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  margin-top: 2rem;
`;

export const ProfileImage = styled.img`
  width: 165px;
  border-radius: 50%;
  border: 3px solid #398bec;
`;

export const Name = styled.h1`
  font-weight: 700;
  letter-spacing: -0.05rem;
  font-size: 2.75rem;
`;

export const Bio = styled.p`
  width: 70%;
  text-align: center;
  font-size: 1.2rem;
  background: transparent;

  a.contact-link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
    letter-spacing: 0.04rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
