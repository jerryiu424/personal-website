import { ListItem, UnorderedList } from '@chakra-ui/react';

const DimensionDataInternList = () => {
  return (
    <UnorderedList fontSize='sm' spacing='15px'>
      <ListItem>
        Created a product analysis application that analyzed over <b>10,000</b>{' '}
        product information using <b>VBA</b>.
      </ListItem>
      <ListItem>
        Attended several product meetings with clients to gather user
        requirements and went over some of the product analysis found from the
        application created above.
      </ListItem>
    </UnorderedList>
  );
};

export default DimensionDataInternList;
