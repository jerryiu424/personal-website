import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: auto;
  min-width: 75px;
  height: 25px;
  padding: 5px;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px){
    font-size: 14px;
  }
`;

const Tag = ({ name, color }) => {
  return <Wrapper color={color}>{name}</Wrapper>;
};

export default Tag;
