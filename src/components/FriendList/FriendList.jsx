import { IsFriendOnline, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <li key={id}>
            <IsFriendOnline IsOnline={isOnline}>{isOnline}</IsFriendOnline>
            <img src={avatar} alt={name} width="48px" />
            <p>{name}</p>
          </li>
        );
      })}
    </List>
  );
};
