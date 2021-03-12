import React from 'react';
import styled from 'styled-components';

import Skills from './assets/skills.png';

const Wrapper = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

const Headings = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SkillImgWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const SkillImg = styled.img`
  width: 100%;
  height: 450px;
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
