import { styled } from '../../stitches.config';
import Link from 'next/link';

export const Button = styled('button', {
  color: '#fff',
  borderRadius: '14px',
  border: 'none',
  fontSize: '$md',
  fontWeight: 400,
  fontFamily: '$main',
  padding: '$sm $md',
  '&:hover': {
    cursor: 'pointer',
    opacity: '0.9',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
      danger: {
        backgroundColor: '$danger',
      },
      warning: {
        backgroundColor: '$warning',
      },
      dark: {
        backgroundColor: '$dark',
      },
    },
  },
});

export const Text = styled('p', {
  fontFamily: '$main',
  fontWeight: '400',
  color: '$dark',
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
      danger: {
        backgroundColor: '$danger',
      },
      warning: {
        backgroundColor: '$warning',
      },
    },
    size: {
      xsmall: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      small: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      normal: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      large: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xlarge: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
    },
  },
});

export const Input = styled('input', {
  padding: '$sm $lg',
  borderRadius: '14px',
  border: '1px solid $lightGray',
  boxSizing: 'border-box',
  boxShadow: '0px 1px 2px rgba(184, 200, 224, 0.222055)',
  outline: 'none',
  '&:focus': {
    borderColor: '$primary',
  },
  variants: {
    error: {
      true: {
        borderColor: '$danger',
      },
    },
  },
});

export const Card = styled('div', {
  backgroundColor: '#fff',
  borderRadius: '0.5em',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  display: 'flex',
  flexFlow: 'row wrap',
});

export const SubSectionTitle = styled('div', {
  fontSize: '$lg',
  alignSelf: 'start',
});

export const ViewAllLink = styled(Link, {
  fontSize: '$sm',
  alignSelf: 'end',
});
