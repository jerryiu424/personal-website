import { ListItem, UnorderedList } from '@chakra-ui/react';

const RbcFulltimeList = () => {
  return (
    <UnorderedList fontSize='sm' spacing='15px'>
      <ListItem>
        Part of the platform automation team that owns the frontdoor to all
        infrastructure as a service for the company with over <b>80,000</b>{' '}
        employees.
      </ListItem>
      <ListItem>
        Developed a portal using micro-frontend and microservice architecture
        for our respective frontends and backends.
      </ListItem>
      <ListItem>
        Reduced services provision time from <b>days to seconds</b>{' '}
        with our portal.
      </ListItem>
      <ListItem>
        Made over <b>100</b> contributions back into our company's innersource
        ecosystem by creating a new <b>Material Ui</b> theme that follows the
        RBC design principle and standard..
      </ListItem>
    </UnorderedList>
  );
};

export default RbcFulltimeList;
