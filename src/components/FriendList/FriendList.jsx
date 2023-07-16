import { IsFriendOnline, List } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <li key={id}>
            <IsFriendOnline status={isOnline ? 'true' : 'false'} />
            <img src={avatar} alt={name} />

            <p>{name}</p>
          </li>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
