import { ListItem, UnorderedList } from '@chakra-ui/react';

const RbcInternList = () => {
  return (
    <UnorderedList fontSize='sm' spacing='15px'>
      <ListItem>
        Developed a <b>PCF</b> and <b>Openshift</b> space provisioner that
        allows users to manage their work in an ephemeral space.
      </ListItem>
      <ListItem>
        Part of the cloud enablement team working on an internal learning
        platform that enables developers to adpat some of the company's tribal
        knowledge.
      </ListItem>
      <ListItem>
        Developed an application manager portal that enabled over <b>500</b>{' '}
        RBC developers to manage their cloud applications deployed onto azure.
      </ListItem>
      <ListItem>
        Hosted the largest developer lunch-and-learn session to date
      </ListItem>
    </UnorderedList>
  );
};

export default RbcInternList;
