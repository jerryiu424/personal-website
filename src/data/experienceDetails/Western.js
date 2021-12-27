import { ListItem, UnorderedList } from '@chakra-ui/react';

const WesternList = () => {
  return (
    <UnorderedList fontSize='sm' spacing='15px'>
      <ListItem>
        Graduated in June 2021 with a bachlor in Computer Science.
      </ListItem>
      <ListItem>
        Part of the dean's honor list every year from 2016 to 2021.
      </ListItem>
      <ListItem>
        Coached Vixen and Armada (a residence female/male flag football team)
        from 2016 to 2018.
      </ListItem>
      <ListItem>Member of the Western Dragonboat Club.</ListItem>
    </UnorderedList>
  );
};

export default WesternList;
