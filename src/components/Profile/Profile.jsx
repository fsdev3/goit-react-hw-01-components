import { Container, Info, Stats } from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Info>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Info>

      <Stats>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
