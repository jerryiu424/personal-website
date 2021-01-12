import React from 'react';
import styled from 'styled-components';

import keySwitch from './assets/key-switch.png';

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 200px;
  margin-right: 5px;
  & > * {
    position: absolute;
  }
`;

const KeyCap = styled.img`
  top: 0px;
  left: 0px;
  width: 125%;
  max-width: 125px;
  max-height: 111px;
  z-index: 100;
`;

const KeySwitch = styled.img`
  top: 25%;
  left: 25%;
  width: 100%;
  height: 80%;
  max-width: 95px;
  max-height: 100px;
`;

const Keycap = ({ keyCap }) => {
  return (
    <Root>
      <KeyCap src={keyCap} />
      <KeySwitch src={keySwitch} />
    </Root>
  );
};

export default Keycap;
