import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const ProjectWrapper = styled.div`
  width: 90%;
  margin-top: 50px;
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

const ProjectItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

const ProjectItem = styled.div`
  width: 300px;
  height: auto;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  padding: 25px 0px;
  color: #ffffff;
  background: #323235;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow-y: auto;
  & > * {
    margin: 0 10px;
  }
  & > *:nth-child(1) {
    margin-top: 10px;
  }
  & > a {
    text-decoration: none;
  }
`;

const ProjectTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

const ProjectDescription = styled.div`
  font-size: 18px;
  font-weight: 300;
  padding: 10px 0;
  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  & > * {
    margin-right: 10px;
    margin-bottom: 5px;
  }

  & > *:nth-last-child() {
    margin-right: 0px;
  }
`;

const LinkButton = styled.div`
  margin: 20px auto 0px auto;
  width: 75%;
  height: 50px;
  color: #ffffff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #323235;
    background: #ffffff;
    text-decoration: none;
  }
`;

const Projects = () => {
  return (
    <ProjectWrapper>
      <Headings>Projects</Headings>
      <ProjectItemWrapper>
        <ProjectItem>
          <div>
            <ProjectTitle>MeetBetween</ProjectTitle>
            <ProjectDescription>
              An online platform that places emphasis on the future of work,
              while utilizing a hybrid environment (both online and in-person)
            </ProjectDescription>
            <span>Built with:</span>
            <TagWrapper>
              <Tag name='JavaScript' color='#fdda3c' />
              <Tag name='React' color='#00ffff' />
            </TagWrapper>
          </div>
          <a
            href='https://devpost.com/software/meetbetween'
            target='_BLANK'
            rel='noreferrer'>
            <LinkButton>Link</LinkButton>
          </a>
        </ProjectItem>
        <ProjectItem>
          <div>
            <ProjectTitle>The Shoppies</ProjectTitle>
            <ProjectDescription>
              A movie finder application created for the shopify challenge{' '}
            </ProjectDescription>
            <span>Built with:</span>
            <TagWrapper>
              <Tag name='JavaScript' color='#fdda3c' />
              <Tag name='React' color='#00ffff' />
            </TagWrapper>
          </div>
          <a
            href='https://jerryiushopify.netlify.app'
            target='_BLANK'
            rel='noreferrer'>
            <LinkButton>Link</LinkButton>
          </a>
        </ProjectItem>
        <ProjectItem>
          <div>
            <ProjectTitle>QuickQuote</ProjectTitle>
            <ProjectDescription>
              A proof-of-concept tool for visually evaluating images of auto
              accidents and classifying the level of damage and estimated
              insurance payout.
            </ProjectDescription>
            <span>Built with:</span>
            <TagWrapper>
              <Tag name='HTML' color='#db4921' />
              <Tag name='CSS' color='#244cdd' />
              <Tag name='JavaScript' color='#fdda3c' />
            </TagWrapper>
          </div>
          <a
            href='https://devpost.com/software/quick-quote-bi3cf2'
            target='_BLANK'
            rel='noreferrer'>
            <LinkButton>Link</LinkButton>
          </a>
        </ProjectItem>
      </ProjectItemWrapper>
    </ProjectWrapper>
  );
};

export default Projects;
