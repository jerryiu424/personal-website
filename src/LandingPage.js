import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

import background from './assets/background.png';
import Keycap from './Keycap';
import jKey from './assets/kecaps/J.png';
import eKey from './assets/kecaps/E.png';
import rKey from './assets/kecaps/R.png';
import yKey from './assets/kecaps/Y.png';
import iKey from './assets/kecaps/I.png';
import uKey from './assets/kecaps/U.png';
import blankKey from './assets/kecaps/blank.png';
import emailKey from './assets/kecaps/email.png';
import githubKey from './assets/kecaps/github.png';
import linkedinKey from './assets/kecaps/linkedin.png';
import resumeKey from './assets/kecaps/resume.png';

const LandingPageWrapper = styled.div`
  // background-image: url(${(props) => props.backgroundImage});
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const KeycapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  max-height: 150px;
`;

const SocialKeyWrapper = styled.div`
  width: 60%;
  height: 100%;
  max-height: 150px;
  display: flex;
  justify-content: center;
  & > * {
    width: 100%;
    max-width: 111px;
  }
`;

const arrowAnimation = keyframes`
  25% {
    opacity: 0;
    }
  33.3% {
    opacity: 0;
    transform: translateY(1.6rem * 3.8);
  }
  66.6% {
    opacity: 1;
    transform: translateY(1.6rem * 5.2);
  }
  100% {
    opacity: 0;
    transform: translateY(1.6rem * 8) scale(0.5);
  }
`;

const ArrowsWrapper = styled.div`
  position: absolute;
  bottom: 7%;
  width: 100px;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.div`
  width: calc(2.6rem * 3.5);
  height: calc(1.6rem * 0.8);
  opacity: 0;
  transform: scale(0.3);
  animation: ${arrowAnimation} 3s ease-out 2s infinite;

  &:first-child {
    animation: ${arrowAnimation} 3s ease-out infinite;
  }

  &:nth-child(2) {
    animation: ${arrowAnimation} 3s ease-out 1s infinite;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: #ffffff;
  }

  &:before {
    left: 0;
    transform: skewY(30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skewY(-30deg);
  }
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper backgroundImage={background}>
      <KeycapWrapper>
        <Keycap keyCap={jKey} />
        <Keycap keyCap={eKey} />
        <Keycap keyCap={rKey} />
        <Keycap keyCap={rKey} />
        <Keycap keyCap={yKey} />
        <Keycap keyCap={blankKey} blank={true} />
        <Keycap keyCap={iKey} />
        <Keycap keyCap={uKey} />
      </KeycapWrapper>

      <SocialKeyWrapper>
        <a href='mailto:jerryiu424@gmail.com'>
          <Keycap keyCap={emailKey} />
        </a>
        <a
          href='https://github.com/jerryiu424'
          target='_BLANK'
          rel='noreferrer'>
          <Keycap keyCap={githubKey} />
        </a>
        <a
          href='https://www.linkedin.com/in/jerryiu424'
          target='_BLANK'
          rel='noreferrer'>
          <Keycap keyCap={linkedinKey} />
        </a>
        <a
          href='https://drive.google.com/file/d/1Tj5OhFvvliFhfmcmij3X_wXwmmKYvQux/view?usp=sharing'
          target='_BLANK'
          rel='noreferrer'>
          <Keycap keyCap={resumeKey} />
        </a>
      </SocialKeyWrapper>

      <Link to='additional-page' spy={true} smooth={true} duration={500}>
        <ArrowsWrapper>
          <Arrow />
          <Arrow />
          <Arrow />
        </ArrowsWrapper>
      </Link>
    </LandingPageWrapper>
  );
};

export default LandingPage;
