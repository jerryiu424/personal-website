import { Text, useTheme } from '@chakra-ui/react';
import styled from '@emotion/styled';

const NodeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: calc(45px + ${(props) => props.marginLeftOffset}px);
  margin-bottom: 30px;
  z-index: 100;
`;

const Node = styled.div`
  content: '';
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const TooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 12.5px solid transparent;
  border-bottom: 12.5px solid transparent;
  border-right: 12.5px solid ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const Tooltip = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 25px;
  min-height: 50px;
  max-height: 75px;
  min-width: 300px;
  max-width: 800px;
  border-radius: 6px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const BranchNode = ({ text, offset = 0 }) => {
  const chakraTheme = useTheme();
  const color = chakraTheme.colors.primary;
  return (
    <NodeWrapper marginLeftOffset={offset}>
      <Node backgroundColor={color.secondary} />
      <TooltipWrapper>
        <Triangle backgroundColor={color.secondary} />
        <Tooltip backgroundColor={color.secondary} color={color.main}>
          <Text fontSize='sm'>{text}</Text>
        </Tooltip>
      </TooltipWrapper>
    </NodeWrapper>
  );
};

export default BranchNode;
