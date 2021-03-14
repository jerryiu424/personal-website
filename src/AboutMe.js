import React from 'react';
import styled from 'styled-components';

import profilePic from './assets/profile-picture.png';

const ProfilePic = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 15px;
  @media (max-width: 420px) {
    width: 200px;
    height: 200px;
  }
`;

const Description = styled.div`
  text-align: left;
  font-size: 24px;
  max-width: 500px;
  font-weight: regular;
  margin-bottom: 25px;
  @media (max-width: 420px) {
    font-size: 20px;
    text-align: center;
  }
`;

const AboutMe = () => {
  return (
    <>
      <ProfilePic src={profilePic} alt='profile picture' />
      <h1>Hi ! 👋</h1>
      <Description>
        My name is
        <span style={{ color: '#000080', fontWeight: 'bold' }}> Jerry Iu</span>,
        a software / web developer based in Toronto, Canada. I'm currently
        finishing my last year of school at Western University for my Computer
        Science degree.
      </Description>
    </>
  );
};

export default AboutMe;
