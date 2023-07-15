import { Item, List, Uploads } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <Uploads>
      <h2>Upload stats</h2>
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
