import { propNames } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

import background from './assets/background.png';
import Keycap from './Keycap';
import cKey from './assets/kecaps/C.png';
import eKey from './assets/kecaps/E.png';
import lKey from './assets/kecaps/L.png';
import mKey from './assets/kecaps/M.png';
import oKey from './assets/kecaps/O.png';
import wKey from './assets/kecaps/W.png';

const LandingPageWrapper = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KeycapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  height: 100%;
  max-height: 200px;
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper backgroundImage={background}>
      <KeycapWrapper>
        <Keycap keyCap={wKey} />
        <Keycap keyCap={eKey} />
        <Keycap keyCap={lKey} />
        <Keycap keyCap={cKey} />
        <Keycap keyCap={oKey} />
        <Keycap keyCap={mKey} />
        <Keycap keyCap={eKey} />
      </KeycapWrapper>
    </LandingPageWrapper>
  );
};

export default LandingPage;
