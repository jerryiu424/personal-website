import { ListItem, UnorderedList } from '@chakra-ui/react';

const PhlytInternList = () => {
  return (
    <UnorderedList fontSize='sm' spacing='15px'>
      <ListItem>
        Developed an adminstration management portal using <b>React</b> and{' '}
        <b>Java with Spring</b> for a separate learning platform used by
        customers from the mining industry.
      </ListItem>
      <ListItem>
        Created a <b>RabbitMQ</b> microservice in Spring to help alleviates
        network calls across different downstream services.
      </ListItem>
    </UnorderedList>
  );
};

export default PhlytInternList;
