import { styled } from 'styled-components';

export const Table = styled.table`
  margin: 60px auto 0 auto;
  width: 600px;

  border: 1px solid gray;

  tr {
    border: 1px solid gray;
    /* border-collapse: collapse; */
  }
  thead tr {
    background-color: #37c2ca;
    color: white;
  }

  tbody tr:nth-child(even) {
    background-color: #eaecec;
  }
  tr td:first-child {
    padding-left: 20px;
    text-transform: capitalize;
  }
  tr td:last-child {
    text-align: center;
  }
`;
