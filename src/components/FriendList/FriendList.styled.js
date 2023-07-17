import { styled } from 'styled-components';

export const List = styled.ul`
  margin: 80px auto;
  width: 200px;
  height: 100%;
  align-items: center;
  list-style: none;
`;

export const FriendListItem = styled.li`
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin: 12px;
  gap: 10px;
  box-shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);
    -webkit-box-shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);
  -moz - box - shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);
  
  img {
    width: 48px;
    height: 48px;
  }
`;

export const IsFriendOnline = styled.span`
  border-radius: 50%;
  border: 8px solid ${({ status }) => (status ? 'green' : 'red')};
`;
