import styled from 'styled-components';

export const Bar = styled.div`
  flex: 1;
  background-color: #383e42;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;
  border-radius: 15px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #316d6d;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
    border-radius: 15px;
  }

  a {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border: 0px;
    cursor: pointer;
    text-align: right;
    text-decoration: none;
    line-height: 160%;
  }
`;