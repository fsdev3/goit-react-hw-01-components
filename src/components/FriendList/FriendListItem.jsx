import PropTypes from 'prop-types';
import { IsFriendOnline, ListItem } from './FriendList.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <ListItem key={id}>
      <IsFriendOnline status={isOnline} />
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
