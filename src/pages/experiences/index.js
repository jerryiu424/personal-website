import { useState } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

import BranchView from './BranchView';
import GridView from './GridView';
import Toggle from './Toggle';

const ExperiencesPage = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Grid templateRows='auto' templateColumns='repeat(12,1fr)' gap='50px'>
      <GridItem colSpan={1} />
      <GridItem colSpan={10} textAlign='center'>
        <Text fontSize='lg' fontWeight='bold'>
          Experiences
        </Text>
      </GridItem>
      <GridItem colSpan={1} alignItems='center' display='flex'>
        {/* <Toggle toggle={toggle} setToggle={() => setToggle(!toggle)} /> */}
      </GridItem>
      <GridItem colSpan={12} alignItems='center' textAlign='center'>
        {toggle ? <GridView /> : <BranchView />
        }
      </GridItem>
    </Grid>
  );
};

export default ExperiencesPage;
