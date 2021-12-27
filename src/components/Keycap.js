import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import keySwitch from 'assets/key-switch.png';

const Root = styled.div`
  width: 100%;
  height: 100%;
  max-height: 150px;
  position: relative;
  visibility: ${(props) => props.blank && 'hidden'};
  & > * {
    position: absolute;
  }
  & > *:first-of-type {
    z-index: 100;
  }
`;

const KeyCap = styled.img`
  width: 125px;
  max-height: 111px;
  &:hover {
    margin-top: 10px;
  }
  @media (max-width: 1300px) {
    width: 100px;
    height: 90px;
  }
  @media (max-width: 420px) {
    width: 60px;
    height: 50px;
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
  @media (max-width: 420px) {
    width: 40px;
    height: 45px;
    margin-top: 20px;
    margin-left: 15px;
  }
`;

const Keycap = ({ keyCap, blank, delay = 0 }) => {
  return (
    <Root blank={blank}>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: delay * 0.2,
          type: 'spring',
          stiffness: 750,
          damping: 25,
        }}>
        <KeyCap src={keyCap} />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: delay * 0.1,
          ease: 'easeOut',
        }}>
        <KeySwitch src={keySwitch} />
      </motion.div>
    </Root>
  );
};

export default Keycap;
