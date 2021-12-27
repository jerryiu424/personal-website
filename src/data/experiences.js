import phlytBg from 'assets/experiences/phlyt.png';
import rbcBg from 'assets/experiences/rbc.jpg';
import hw7Bg from 'assets/experiences/hw7logo.png';
import dimensionDataBg from 'assets/experiences/dimension-data.png';
import westernBg from 'assets/experiences/western.png';
import phlytLogo from 'assets/socials/modal/phlyt.png';
import rbcLogo from 'assets/socials/modal/rbc.png';
import hw7Logo from 'assets/socials/modal/hw7.png';
import dimensionDataLogo from 'assets/socials/modal/dd.png';
import westernLogo from 'assets/socials/modal/western.png';

import {
  WesternList,
  RbcFulltimeList,
  HackWesternList,
  PhlytInternList,
  RbcInternList,
  DimensionDataInternList,
} from './experienceDetails';

export const cards = [
  {
    id: 'western',
    placement: 'University of Western Ontario',
    title: 'Bachlor of Computer Science',
    image: westernBg,
    details: WesternList,
    logo: westernLogo,
    duration: 'Sept 2016 - June 2021',
  },
  {
    id: 'rbc-fulltime',
    placement: 'Royal Bank of Canada',
    title: 'Cloud Engineer',
    image: rbcBg,
    details: RbcFulltimeList,
    logo: rbcLogo,
    duration: 'May 2021 - Present',
    skills: ['React', 'Java', 'Docker', 'Kubernetes'],
  },
  {
    id: 'hw7',
    placement: 'Hack Western 7',
    title: 'Web Organizer',
    image: hw7Bg,
    details: HackWesternList,
    logo: hw7Logo,
    duration: 'March 2021 - Nov 2021',
    skills: ['React', 'Node', 'Express', 'MongoDB'],
  },
  {
    id: 'phlyt-intern',
    placement: 'Phlyt',
    title: 'Software Engineer',
    subtitle: '(Internship)',
    image: phlytBg,
    details: PhlytInternList,
    logo: phlytLogo,
    duration: 'May 2020 - Aug 2020',
    skills: ['React', 'Java', 'Spring'],
  },
  {
    id: 'rbc-intern',
    placement: 'Royal Bank of Canada',
    title: 'Cloud Engineer',
    subtitle: '(Internship)',
    image: rbcBg,
    details: RbcInternList,
    logo: rbcLogo,
    duration: 'May 2019 - Apr 2020',
    skills: ['React', 'Java', 'Spring', 'Pivotal Cloud Foundry'],
  },
  {
    id: 'dd-intern',
    placement: 'Dimension Data',
    title: 'Project Coordinator',
    subtitle: '(Internship)',
    image: dimensionDataBg,
    details: DimensionDataInternList,
    logo: dimensionDataLogo,
    duration: 'June 2017 - Aug 2017',
    skills: ['VBA', 'MS Excel'],
  },
];
