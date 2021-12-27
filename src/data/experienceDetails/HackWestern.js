import { ListItem, UnorderedList } from '@chakra-ui/react';

const HackWesternList = () => {
  return (
    <UnorderedList fontSize='sm' spacing='15px'>
      <ListItem>
        Collaborated in a team of four to help create three different portals in
        a span of <b>9 months</b> for one of the largest student-run hackathon
        in Canada. All while doing everything virtually.
      </ListItem>
      <ListItem>
        Oversaw <b>7,000</b> hacker applications and judged more than <b>100</b>{' '}
        project submissions
      </ListItem>
      <ListItem>
        Secured one of our gold tier sponsor by reaching out to the company's
        campus outreach respresentative.
      </ListItem>
    </UnorderedList>
  );
};

export default HackWesternList;
