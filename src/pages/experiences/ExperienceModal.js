import { Children, useContext } from 'react';
import {
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';

import { UserContext } from 'context/UserContext';

const ExperienceModal = ({ open, handleClose, children }) => {
  const { user } = useContext(UserContext);
  const theme = user.selectedTheme;
  const chakraTheme = useTheme();
  const color = chakraTheme.colors.primary;

  return (
    <Modal isOpen={open} onClose={handleClose} isCentered>
      <ModalOverlay bg={'rgba(50, 50, 53, 0.5)'} />
      <ModalContent
        maxWidth='1000px'
        p='25px 50px'
        bg={theme === 'light' ? color.main : color.secondary}
        color={theme === 'light' ? color.secondary : color.main}>
        <ModalHeader p='0'>
          <Text fontSize='xl' fontWeight='bold'>
            Overview
          </Text>
        </ModalHeader>
        <ModalCloseButton m='25px 50px' fontSize='16px' />
        <ModalBody p={'25px 0'}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ExperienceModal;
