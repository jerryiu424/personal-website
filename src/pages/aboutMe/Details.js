import { Image, Grid, GridItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from '@emotion/styled';

import { SlideRight } from 'animations/variants';
import pokeball from 'assets/pokeball.png';
import petKeeb from 'assets/petKeeb.gif';
import keySwitch from 'assets/key-switch.png';

const Icon = styled(GridItem)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = ({ icon, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <GridItem colSpan={3}>
      <motion.div
        ref={ref}
        variants={SlideRight}
        initial='initial'
        animate={inView ? 'enter' : 'initial'}>
        <Grid templateColumns='repeat(3, 1fr)'>
          <Icon colSpan={1}>{icon}</Icon>
          <GridItem colSpan={2}>
            <Text fontSize='sm'>{children}</Text>
          </GridItem>
        </Grid>
      </motion.div>
    </GridItem>
  );
};

const Details = () => {
  return (
    <Grid
      templateRows='1fr auto`'
      templateColumns='repeat(3, 1fr)'
      m='25px 0'
      rowGap='50px'>
      <GridItem colSpan={3}>
        <Text fontSize='lg' fontWeight='500'>
          A blob about me
        </Text>
      </GridItem>
      <Section
        icon={
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image src={petKeeb} width='75px' position='absolute' zIndex={20} />
            <Image
              src={keySwitch}
              width='50px'
              position='absolute'
              marginTop="55px"
              marginLeft="20px"
            />
          </div>
        }>
        If it isn't already obvious from the landing page, I would consider
        myself a mechancial keyboard enthusiaist. I got into this hobby about
        two months into my first RBC internship, which you can read more in the
        experience tab. I've now built about 3 keyboards and I already want to
        build more 🥲
      </Section>
      <Section
        icon={
          <motion.div
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, -15, 15, -15, 15, 1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}>
            <Image src={pokeball} w='50px' />
          </motion.div>
        }>
        I’m a huge pokemon nerd. The first pokemon game that I played was
        platinum, however I started following the franchise long before I
        started playing. I remember waking up early on Sunday mornings to catch
        an episode of the show or watching a pokemon movie while my mom is
        giving me a haircut at home.
        <br />
        <br />
        If you were to ask what my favorite pokemon is, it has got to be Piplup.
        The fierce fluffy penguin pokemon has a never back down mentality that I
        can resonate with. I always strive for excellence in my work. Let it be
        following the best practices of building an API or making sure the 12th
        factors are followed when building a cloud application, I hold myself to
        a high degree of standard such that excellency can be achieved.
      </Section>
      <Section icon={<Text fontSize='xl'>🕹</Text>}>
        I am also an avid gamer. Some of the games that I’ve been enjoying
        lately include pokemon brilliant diamond & shining pearl, pokemon unite
        (I really like pokemon ... can’t you tell?), valorant and teamfight
        tactics.
      </Section>
      <Section icon={<Text fontSize='xl'>🏈</Text>}>
        On top of playing video games, I enjoy playing and watching various kind
        of sports in my off-time too! I was a defensive coach for my residence’s
        flag football team and played a key role in leading both the women’s and
        men’s team to championship for 3 years in a row.
        <br />
        <br />
        However, in terms of watching professional sports, my favorite sports
        team has got to be Borussia Dortmund, a German football club. I have
        been a fan of theirs since they made their champions league final
        appearance in 2012.
      </Section>
    </Grid>
  );
};

export default Details;
