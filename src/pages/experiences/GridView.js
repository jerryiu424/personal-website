import { useState } from 'react';
import {
  useTheme,
  Box,
  Image,
  Grid,
  GridItem,
  Text,
  Icon,
  Tag,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { BiTime } from 'react-icons/bi';
import { FiTool } from 'react-icons/fi';
import styled from '@emotion/styled';

import ExperienceModal from './ExperienceModal';
import { cards } from 'data/experiences';

const Card = styled(Box)`
  height: 100%;
  border-radius: 6px;
`;

const BackgroundCard = styled(Card)`
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:before {
    content: '';
    position: absolute;
    border-radius: 6px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: ${(props) => props.backgroundColor};
    opacity: 0.6;
  }

  &:hover {
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      border-radius: 6px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: ${(props) => props.backgroundColor};
      opacity: 0.4;
    }
    & > *:last-of-type {
      display: flex;
    }
  }

  & > * {
    position: relative;
  }

  & > *:last-of-type {
    display: none;
  }
`;

const SeeMore = styled.div`
  width: 75%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor}CF;
  box-sizing: border-box;
  border-radius: 6px;
  &:hover {
    background-color: ${(props) => props.backgroundColor};
  }
`;

const ModalMetaDataWrapper = styled.div`
  margin-top: 50px;
  & > * {
    margin-bottom: 10px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

const GridView = () => {
  const [open, setOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);
  const chakraTheme = useTheme();
  const color = chakraTheme.colors.primary;
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleClose = () => {
    setOpen(false);
    setSelectedExp(null);
  };

  return (
    <Grid gap='50px 100px' templateColumns='repeat(3,1fr)' templateRows='auto'>
      {cards.map((experience, index) => {
        const {
          placement,
          title,
          subtitle = '',
          image,
          details,
          logo,
          duration,
          skills = [],
        } = experience;
        return (
          <motion.div
            key={index}
            ref={ref}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            transition={{
              delay: Math.floor(index / 3) * 0.5,
              ease: 'easeOut',
            }}>
            <GridItem
              colSpan={1}
              h='300px'
              borderRadius='6px'
              filter='drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));'
              textAlign='left'>
              <BackgroundCard
                backgroundImage={image}
                backgroundColor={color.secondary}
                onClick={() => {
                  setOpen(true);
                  setSelectedExp({
                    details,
                    logo,
                    duration,
                    skills,
                  });
                }}>
                <div>
                  <Text fontSize='sm' color={color.main}>
                    {placement}
                  </Text>
                  <Text fontSize='md' fontWeight='bold' color={color.main}>
                    {title}
                  </Text>
                  <Text fontSize='16px' color={color.main}>
                    {subtitle}
                  </Text>
                </div>
                <SeeMore
                  borderColor={color.main}
                  backgroundColor={color.main}>
                  <Text fontSize='sm' fontWeight='bold' color={color.secondary}>
                    See More
                  </Text>
                </SeeMore>
              </BackgroundCard>
            </GridItem>
          </motion.div>
        );
      })}
      <ExperienceModal open={open} handleClose={handleClose}>
        {selectedExp && (
          <Grid templateColumns={'repeat(3,1fr)'} columnGap='25px'>
            <GridItem colSpan={1} p='10px 0'>
              <>
                <Image src={selectedExp.logo} maxH='150px' />
                <ModalMetaDataWrapper>
                  <Text fontWeight='bold' display='flex' alignItems='center'>
                    <Icon as={BiTime} mr='10px' fontSize='md' />
                    {selectedExp?.duration}
                  </Text>
                  <Text fontWeight='bold' display='flex'>
                    {selectedExp.skills.length > 0 && (
                      <Icon
                        as={FiTool}
                        mr='10px'
                        fontSize='md'
                        transform='rotate(-90deg)'
                      />
                    )}
                    <TagsWrapper>
                      {selectedExp?.skills.map((skill, index) => {
                        return (
                          <Tag
                            key={index}
                            borderRadius='full'
                            size='sm'
                            color={color.main}
                            bg={color.secondary}>
                            {skill}
                          </Tag>
                        );
                      })}
                    </TagsWrapper>
                  </Text>
                </ModalMetaDataWrapper>
              </>
            </GridItem>
            <GridItem colSpan={2}>{selectedExp?.details()}</GridItem>
          </Grid>
        )}
      </ExperienceModal>
    </Grid>
  );
};

export default GridView;
