import React from 'react';
import styled from '@emotion/styled';

import Skills from './assets/skills.png';

const Wrapper = styled.div`
  width: 90%;
  margin-bottom: 15px;
  max-width: 1440px;
`;

const Headings = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 420px) {
    font-size: 30px;
  }
`;

const SkillImgWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media (max-width: 420px) {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
  }
`;

const SkillImg = styled.img`
  width: 600px;
  height: 450px;
  @media (max-width: 1280px) {
    width: 450px;
    height: 300px;
  }
  @media (max-width: 420px) {
    width: 250px;
    height: 200px;
  }
`;

const SkillSet = () => {
  return (
    <Wrapper>
      <Headings>Skill set</Headings>
      <SkillImgWrapper>
        <SkillImg src={Skills} alt='my skills set' />
      </SkillImgWrapper>
    </Wrapper>
  );
};

export default SkillSet;
