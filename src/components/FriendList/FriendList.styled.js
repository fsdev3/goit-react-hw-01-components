import { styled } from 'styled-components';

export const List = styled.ul`
  margin: 10px auto;
  background-color: gray;
  width: 500px;
  height: 100px;
  align-items: center;
  display: flex;
  gap: 20px;
  list-style: none;

  li {
    width: 60px;
  }

  img {
    width: 48px;
  }
`;

export const IsFriendOnline = styled.span`
  border-radius: 50%;
  border: 5px solid ${({ status }) => (status === 'true' ? 'green' : 'red')};
`;
