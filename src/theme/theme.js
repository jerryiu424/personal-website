import { extendTheme } from '@chakra-ui/react';

import DividerOverride from './DividerOverride';
import TabsOverride from './TabsOverride';

const sharedPrimaryColorTheme = {
  alt: '#3281CE',
  disabled: '#E2E8F0',
};

const components = {
  components: {
    ...DividerOverride,
    ...TabsOverride,
  },
};

const fontSizes = {
  fontSizes: {
    xl: '40px',
    lg: '30px',
    md: '24px',
    sm: '20px',
    xs: '12px',
  },
};

const breakpoints = {
  breakpoints: {
    '2xl': 1600,
    xl: 1440,
    lg: 1080,
    md: 660,
    sm: 320,
    base: 0,
  },
};

const lightTheme = extendTheme({
  ...components,
  ...fontSizes,
  ...breakpoints,
  colors: {
    primary: {
      main: '#fffff0',
      secondary: '#323235',
      ...sharedPrimaryColorTheme,
    },
  },
});

const darkTheme = extendTheme({
  ...components,
  ...fontSizes,
  ...breakpoints,
  colors: {
    primary: {
      main: '#323235',
      secondary: '#fffff0',
      ...sharedPrimaryColorTheme,
    },
  },
});

export { lightTheme, darkTheme };
