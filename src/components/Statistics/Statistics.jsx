import { Item, List, Uploads } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Uploads>
      {title ? <h2>{title}</h2> : ''}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
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
  id: PropTypes.arrayOf(PropTypes.number.isRequired),
  label: PropTypes.arrayOf(PropTypes.string.isRequired),
  percentage: PropTypes.arrayOf(PropTypes.number.isRequired),
};
