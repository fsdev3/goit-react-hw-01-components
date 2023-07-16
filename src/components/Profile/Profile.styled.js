import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 60px auto 0 auto;
  background-color: #d8dcde;
  width: 400px;
  height: 100%;
  padding: 100px;
  border-radius: 4px;
`;

export const Info = styled.div`
  background-color: #fcfefe;
  width: 400px;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
  padding-bottom: 50px;
  gap: 16px;

  box-shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);
  -webkit-box-shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);
  -moz-box-shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);
  img {
    width: 140px;
    border-radius: 50%;
    border: 2px solid gray;
  }
  p {
    color: #9a9a9a;
    font-weight: 600;
  }
  p:nth-child(2) {
    font-size: 24px;
    font-weight: 700;
    color: #575757;
    padding-top: 30px;
  }
`;

export const Stats = styled.ul`
  background-color: #e0eded;
  width: 400px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 0 0 4px 4px;

  box-shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);
  -webkit-box-shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);
  -moz-box-shadow: 2px 3px 6px 3px rgba(181, 181, 181, 0.75);

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    span:first-child {
      font-size: 14px;
      color: gray;
      margin-bottom: 4px;
    }
    span:last-child {
      font-size: 18px;
      font-weight: 800;
      color: #575757;
    }
  }
`;
