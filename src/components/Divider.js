import { useTheme, Divider } from '@chakra-ui/react';

const StyledDivider = () => {
  const chakraTheme = useTheme();
  const color = chakraTheme.colors.primary;

  return <Divider borderColor={color.secondary} />;
};

export default StyledDivider;
