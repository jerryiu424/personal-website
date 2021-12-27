import React from 'react';
import styled from '@emotion/styled';

import dimensionData from './assets/dimension-data.jpeg';
import rbc from './assets/rbc.jpg';
import phlyt from './assets/new-phlyt.png';

const Wrapper = styled.div`
  width: 90%;
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

const WorkCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const WorkCard = styled.div`
  width: 40%;
  max-width: 350px;
  @media (max-width: 420px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 4px 4px 0px 0px;
`;

const WorkDescription = styled.div`
  margin-top: -5px;
  min-height: 250px;
  background: #323235;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 4px 4px;
`;

const CompanyName = styled.div`
  font-size: 24px;
  font-weight: 400;
  height: min-content;
  margin: 10px auto 0px auto;
`;

const WorkTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  height: min-content;
  margin: 0px auto;
`;

const WorkDuration = styled.div`
  font-size: 16px;
  font-weight: 400;
  height: min-content;
  margin: 0px auto 10px auto;
`;

const DescriptionItem = styled.div`
  line-height: 22.5px;
`;

const WorkExperience = () => {
  return (
    <Wrapper>
      <Headings>Work Experience</Headings>
      <WorkCardsWrapper>
        <WorkCard>
          <WorkImage src={phlyt} alt='Phlyt logo' />
          <WorkDescription>
            <CompanyName>Phlyt</CompanyName>
            <WorkTitle>Software Engineer</WorkTitle>
            <WorkDuration>May 2020 - August 2020</WorkDuration>
            <ul style={{ paddingRight: '20px' }}>
              <li>
                <DescriptionItem>
                  Developed an admin portal using{' '}
                  <b>JavaScript (React with Hooks)</b> and{' '}
                  <b>Java with Spring</b> for a learning platform used by several
                  customers from the mining industry.
                </DescriptionItem>
              </li>
              <li>
                <DescriptionItem>
                  Created a <b>RabbitMQ</b> service that alleviates network
                  communication across multiple applications.
                </DescriptionItem>
              </li>
            </ul>
          </WorkDescription>
        </WorkCard>
        <WorkCard>
          <WorkImage src={rbc} alt='RBC logo' />
          <WorkDescription>
            <CompanyName>Royal Bank of Canada</CompanyName>
            <WorkTitle>Cloud Engineer</WorkTitle>
            <WorkDuration>May 2019 - April 2020</WorkDuration>
            <ul style={{ paddingRight: '20px' }}>
              <li>
                <DescriptionItem>
                  Developed a <b>PCF</b> and <b>OpenShift</b> space provisioner
                  that allows users to manage their work in a
                  temporaryprovisioned space
                </DescriptionItem>
              </li>
              <li>
                <DescriptionItem>
                  Developed the frontend of an internal <b>Azure</b> deployment
                  console using <b>Typescript</b> and <b>Angular</b>.
                </DescriptionItem>
              </li>
              <li>
                <DescriptionItem>
                  Used <b>Docker</b> and <b>Kubernetes</b> to deploy several
                  applications while following the twelve-factor
                  applicationmethodologies.
                </DescriptionItem>
              </li>
              <li>
                <DescriptionItem>
                  Contributed to over ten different InnerSource Projects within
                  RBC, as well as hosted over ten various DeveloperExperience
                  events with the likes of DX Buzz and Devoxx for Kids.
                </DescriptionItem>
              </li>
            </ul>
          </WorkDescription>
        </WorkCard>
        <WorkCard>
          <WorkImage src={dimensionData} alt='Dimension Data logo' />
          <WorkDescription>
            <CompanyName>Dimension Data</CompanyName>
            <WorkTitle>Project Coordinator</WorkTitle>
            <WorkDuration>June 2017 - Aug 2017</WorkDuration>
            <ul style={{ paddingRight: '20px' }}>
              <li>
                <DescriptionItem>
                  Created a <b>VBA</b> application that locates product
                  information with over 100,000 data points.
                </DescriptionItem>
              </li>
            </ul>
          </WorkDescription>
        </WorkCard>
      </WorkCardsWrapper>
    </Wrapper>
  );
};

export default WorkExperience;
