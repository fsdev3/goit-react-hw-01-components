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
    background-color: #3096d5;
    border-radius: 4px 0 0 4px;
  }
  li:nth-child(2) {
    background-color: #af1db4;
  }
  li:nth-child(3) {
    background-color: #e05a70;
  }
  li:nth-child(4) {
    background-color: #33c3a8;
  }
  li:last-child {
    background-color: #dcc61f;
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
  span:last-child {
    font-size: 24px;
  }
`;
