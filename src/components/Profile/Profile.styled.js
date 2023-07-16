import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 60px auto 0 auto;
  background-color: #d8d8d8;
  width: 400px;
  height: 100%;
  padding: 100px;
  border-radius: 4px;
`;

export const Info = styled.div`
  background-color: #f0f0f0;
  width: 400px;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 30px;
  gap: 16px;
  img {
    width: 160px;
    border-radius: 50%;
    border: 2px solid gray;
  }
  p {
    color: gray;
  }
  p:nth-child(2) {
    font-size: 24px;
    font-weight: bold;
    color: gray;
  }
`;

export const Stats = styled.ul`
  background-color: lightblue;
  width: 400px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;
