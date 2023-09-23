import styled from 'styled-components';

export const Button = styled.button`
  background-color: #bad211;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px;
  width: 100px;
  transition: 0.2s linear;
  text-transform: capitalize;

  &:hover {
    color: #fff;
  }
`;
