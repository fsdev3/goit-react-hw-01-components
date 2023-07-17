import styled from 'styled-components';

export const Table = styled.table`
  margin: 60px auto 0 auto;
  width: 600px;
  thead {
    background-color: #37c2ca;
    color: white;
    text-transform: uppercase;
    font-size: 13px;
  }

  th {
    border: 1px solid #e8ebeb;
  }

  td {
    color: gray;
  }

  td,
  tr {
    width: 33.33%;
    height: 36px;
    font-size: 13px;
    font-weight: 500;
    border: 1px solid #e8ebeb;
  }

  tbody tr:nth-child(even) {
    background-color: #f1f2f2;
  }
  tr td:first-child {
    padding-left: 70px;
    text-transform: capitalize;
  }
  tr td:nth-child(2) {
    text-align: right;
    padding-right: 70px;
  }
  tr td:last-child {
    text-align: center;
  }

  border-radius: 4px;
  margin-bottom: 60px;
  border-collapse: collapse;
  box-shadow: 0px 3px 0px 0px rgba(209, 209, 209, 0.75);
  -webkit-box-shadow: 0px 3px 0px 0px rgba(209, 209, 209, 0.75);
  -moz-box-shadow: 0px 3px 0px 0px rgba(209, 209, 209, 0.75);
`;
