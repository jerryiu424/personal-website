import { useTheme, Box, IconButton, Icon, Text } from '@chakra-ui/react';
import { BsFillGridFill } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';
import styled from '@emotion/styled';

const ToggleWrapper = styled(Box)`
  display: flex;
  flex-direction: ${(props) =>
    props.toggle === 'true' ? 'row' : 'row-reverse'};
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Toggle = ({ toggle, setToggle }) => {
  const chakraTheme = useTheme();
  const color = chakraTheme.colors.primary;

  return (
    <ToggleWrapper
      toggle={`${toggle}`}
      bg={toggle ? color.disabled : color.alt}
      w='100px'
      h='35px'
      p='0px 5px'
      alignItems='center'
      borderRadius='100px'
      onClick={setToggle}>
      <IconButton
        aria-label='Light theme'
        bg='#fff'
        borderRadius={100}
        isRound
        size='xs'
        icon={
          <Icon
            as={toggle ? BsFillGridFill : BiGitBranch}
            color={'#323235'}
            fontSize={toggle ? '10px' : '13px'}
          />
        }
      />
      <Text
        as='div'
        fontSize='16px'
        fontWeight='bold'
        color={toggle ? '#323235' : '#fffff0'}
        w='100%'
        textAlign='center'>
        {toggle ? 'grid' : 'branch'}
      </Text>
    </ToggleWrapper>
  );
};

export default Toggle;
