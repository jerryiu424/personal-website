import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'

import background from 'assets/background.png';
import Keycap from 'components/Keycap';
import jKey from 'assets/keycaps/J.png';
import eKey from 'assets/keycaps/E.png';
import rKey from 'assets/keycaps/R.png';
import yKey from 'assets/keycaps/Y.png';
import iKey from 'assets/keycaps/I.png';
import uKey from 'assets/keycaps/U.png';
import emailKey from 'assets/keycaps/email.png';
import githubKey from 'assets/keycaps/github.png';
import linkedinKey from 'assets/keycaps/linkedin.png';
import resumeKey from 'assets/keycaps/resume.png';

const LandingPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  &:first-of-type {
    animation: ${arrowAnimation} 3s ease-out infinite;
  }

  &:nth-of-type(2) {
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

const firstnameKeys = [jKey, eKey, rKey, rKey, yKey];
const lastnameKeys = [iKey, uKey];
const socialKeys = [
  {
    cap: emailKey,
    link: 'mailto:jerryiu424@gmail.com',
  },
  {
    cap: linkedinKey,
    link: 'https://www.linkedin.com/in/jerryiu424',
  },
  {
    cap: githubKey,
    link: 'https://github.com/jerryiu424',
  },
  {
    cap: resumeKey,
    link: 'https://drive.google.com/file/d/1Tj5OhFvvliFhfmcmij3X_wXwmmKYvQux/view?usp=sharing',
  },
];

const LandingPage = () => {
  return (
    <LandingPageWrapper backgroundImage={background}>
      <KeycapWrapper>
        <FirstNameWrapper>
          {firstnameKeys.map((cap, index) => {
            return <Keycap key={index} keyCap={cap} delay={index} />;
          })}
        </FirstNameWrapper>
        <LastNameWrapper>
          {lastnameKeys.map((cap, index) => {
            return (
              <Keycap
                key={index}
                keyCap={cap}
                delay={index + firstnameKeys.length}
              />
            );
          })}
        </LastNameWrapper>
      </KeycapWrapper>

      <SocialKeyWrapper>
        {socialKeys.map(({ cap, link }, index) => {
          return (
            <a key={index} href={link} target='_BLANK' rel='noreferrer'>
              <Keycap
                keyCap={cap}
                delay={
                  index + (firstnameKeys.length + lastnameKeys.length) * 0.7
                }
              />
            </a>
          );
        })}
      </SocialKeyWrapper>

      {/* <ArrowsWrapper>
        <Arrow />
        <Arrow />
        <Arrow />
      </ArrowsWrapper> */}
    </LandingPageWrapper>
  );
};

export default LandingPage;
