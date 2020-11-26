import styled from 'styled-components';

export const MiniHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const ProfilePicture = styled.img`
  width: 140px;
  border-radius: 50%;
  border: 3px solid #398bec;
`;

export const Name = styled.h2`
  font-weight: 700;
  letter-spacing: -0.05rem;
  font-size: 2rem;
`;
