import { FriendListItem, IsFriendOnline, List } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendListItem key={id}>
            <IsFriendOnline status={isOnline} />
            <img src={avatar} alt={name} />

            <p>{name}</p>
          </FriendListItem>
        );
      })}
    </List>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.arrayOf(PropTypes.number.isRequired),
  isOnline: PropTypes.arrayOf(PropTypes.bool.isRequired),
  avatar: PropTypes.arrayOf(PropTypes.string.isRequired),
  name: PropTypes.arrayOf(PropTypes.string.isRequired),
};
