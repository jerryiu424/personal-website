import React from 'react';
import styled from 'styled-components';

import keySwitch from './assets/key-switch.png';

const Root = styled.div`
  width: 100%;
  height: 100%;
  max-height: 150px;
  position: relative;
  visibility: ${(props) => props.blank && 'hidden'};
  & > * {
    position: absolute;
  }
`;

const KeyCap = styled.img`
  width: 125px;
  max-height: 111px;
  z-index: 100;
  &:hover {
    margin-top: 10px;
  }

  @media (max-width: 1300px) {
    width: 100px;
    height: 90px;
  }
`;

const KeySwitch = styled.img`
  width: 90px;
  height: 100px;
  max-width: 95px;
  max-height: 100px;
  margin-top: 40px;
  margin-left: 25px;

  @media (max-width: 1300px) {
    width: 75px;
    height: 80px;
    margin-top: 35px;
    margin-left: 20px;
  }
`;

const Keycap = ({ keyCap, blank }) => {
  return (
    <Root blank={blank}>
      <KeyCap src={keyCap} />
      <KeySwitch src={keySwitch} />
    </Root>
  );
};

export default Keycap;
