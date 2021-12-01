import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      main: 'Nunito Sans, sans-serif',
    },
    colors: {
      primary: '#4F9DA6',
      secondary: '#1F4287',
      danger: '#Ff5959',
      warning: '#F9BF3B',
      dark: '#071E3D',
      white: '#ffffff',
      black: '#000000',
      lightGray: '#D8E0F0',
      mainGray: '#7D8592',
    },
    fontSizes: {
      xs: '0.875rem',
      sm: '0.9rem',
      md: '1rem',
      mdsm: '1.125em',
      mdlg: '1.25em',
      lg: '1.5rem',
      xl: '2rem',
    },
    space: {
      xs: '0.3rem',
      sm: '0.6rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    lineHeights: {
      xs: '1rem',
      sm: '1.25rem',
      md: '1.4rem',
      lg: '1.8rem',
      xl: '2.25rem',
    },
  },
  media: {
    bp1: '(min-width: 46.875em)',
  },
});
