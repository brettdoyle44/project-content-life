import { styled } from '../../stitches.config';

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
