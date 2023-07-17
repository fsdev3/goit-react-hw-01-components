import { styled } from 'styled-components';

export const Uploads = styled.div`
  margin: 60px auto 0 auto;
  background-color: #d8dcde;
  width: 400px;
  height: 100%;
  padding: 100px;
  border-radius: 4px;
  h2 {
    text-transform: uppercase;
    text-align: center;
    background-color: #fcfefe;
    color: gray;

    width: 400px;
    padding: 18px 0;
    border-radius: 4px 4px 0 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  background-color: #fcfefe;
  width: 400px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li:first-child {
    border-radius: 4px 0 0 4px;
  }

  li:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20%;
  color: white;
  gap: 6px;
  padding: 6px 0;
  background-color: ${({ random }) => random};
  span:last-child {
    font-size: 24px;
  }
`;
