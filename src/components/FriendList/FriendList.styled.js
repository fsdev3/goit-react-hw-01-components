import { styled } from 'styled-components';

export const List = styled.ul`
  margin: 10px auto;
  background-color: gray;
  width: 400px;
  height: 100px;
  align-items: center;
  display: flex;
  gap: 20px;
  list-style: none;
  width: 400px;
`;

export const IsFriendOnline = styled.span`
  border-radius: 50%;
  border: 5px solid ${({ status }) => (status ? 'green' : 'red')};
`;