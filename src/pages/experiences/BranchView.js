import { useContext } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { UserContext } from 'context/UserContext';
import lightBranch from 'assets/light-branch.png';
import darkBranch from 'assets/dark-branch.png';
import BranchNode from './BranchNode';

const BranchWrapper = styled(GridItem)`
  & > img {
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

const OFFSET_X = 75;

const BranchView = () => {
  const { user } = useContext(UserContext);
  const theme = user.selectedTheme;
  const branch = theme === 'light' ? darkBranch : lightBranch;

  return (
    <Grid templateColumns='repeat(2,1fr)'>
      <BranchWrapper
        colSpan={2}
        h='800px'
        position='relative'
        backgroundImage={branch}
        backgroundRepeat='no-repeat'
        pt='110px'>
        <BranchNode
          text={'[June 2021] Graduated from Western University 🎓'}
          offset={OFFSET_X}
        />
        <BranchNode text={'[May 2021] Full time cloud engineer at RBC 💼'} />
        <BranchNode
          text={'[Mar - Nov 2020] Hack Western 7 Organizer 💜'}
          offset={OFFSET_X}
        />
        <BranchNode
          text={'[Summer 2020] Software engineer at Phlyt'}
          offset={OFFSET_X * 2}
        />
        <BranchNode
          text={'[May 2019 - Apr 2020] Cloud engineer intern at RBC'}
          offset={OFFSET_X * 2}
        />
        <BranchNode
          text={'[Summer 2017] Project coordinator at Dimension Data '}
          offset={OFFSET_X * 2}
        />
      </BranchWrapper>
    </Grid>
  );
};

export default BranchView;
