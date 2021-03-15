import React from 'react';
import styled, { keyframes } from 'styled-components';

import background from './assets/background.png';
import Keycap from './Keycap';
import jKey from './assets/kecaps/J.png';
import eKey from './assets/kecaps/E.png';
import rKey from './assets/kecaps/R.png';
import yKey from './assets/kecaps/Y.png';
import iKey from './assets/kecaps/I.png';
import uKey from './assets/kecaps/U.png';
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
  @media (max-width: 1280px) {
    & > * {
      max-width: 700px;
    }
  }
  @media (max-width: 420px) {
    & > * {
      max-width: 500px;
    }
  }
`;

const KeycapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  max-height: 150px;
  & > * {
    height: 100%;
    display: flex;
  }
  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 420px) {
    flex-wrap: wrap;
    max-height: 170px;
    margin-bottom: 15px;
    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
    }
  }
`;

const FirstNameWrapper = styled.div`
  width: 70%;
  margin-right: 85px;
  @media (max-width: 420px) {
    width: 80%;
    margin: 0;
  }
`;

const LastNameWrapper = styled.div`
  width: 30%;
  @media (max-width: 420px) {
    width: 80%;
    display: flex;
    justify-content: center;
    & > * {
      width: 20%;
    }
  }
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
  @media (max-width: 420px) {
    max-height: 70px;
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
  width: 100%;
  height: 20%;
  display: flex;
  margin: 0 auto;
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

  @media (max-width: 420px) {
    width: calc(1.9rem * 3.5);
    height: calc(0.9rem * 0.8);
  }
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper backgroundImage={background}>
      <KeycapWrapper>
        <FirstNameWrapper>
          <Keycap keyCap={jKey} />
          <Keycap keyCap={eKey} />
          <Keycap keyCap={rKey} />
          <Keycap keyCap={rKey} />
          <Keycap keyCap={yKey} />
        </FirstNameWrapper>
        <LastNameWrapper>
          <Keycap keyCap={iKey} />
          <Keycap keyCap={uKey} />
        </LastNameWrapper>
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

      <ArrowsWrapper>
        <Arrow />
        <Arrow />
        <Arrow />
      </ArrowsWrapper>
    </LandingPageWrapper>
  );
};

export default LandingPage;
