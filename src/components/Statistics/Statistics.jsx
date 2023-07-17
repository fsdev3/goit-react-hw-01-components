import { Item, List, Uploads } from './Statistics.styled';
import { getRandomHexColor } from './getRandomColor';

import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Uploads>
      {title ? <h2>{title}</h2> : ''}

      <List>
        {stats.map(({ id, label, percentage }) => {
          const randomColor = getRandomHexColor();
          return (
            <Item key={id} random={randomColor}>
              <span>{label} </span>
              <span>{percentage}</span>
            </Item>
          );
        })}
      </List>
    </Uploads>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
