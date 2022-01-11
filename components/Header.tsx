import { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import ProfileDropdown from './ProfileDropdown';

const HeaderArea = styled('div', {
  gridArea: 'header',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1.5em 0',
  padding: '0 3em',
});

export const Search = styled('input', {
  padding: '1.5em $lg',
  borderRadius: '14px',
  border: '1px solid #fff',
  boxSizing: 'border-box',
  height: '3.5em',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  outline: 'none',
  '&:focus': {
    border: '1px solid $primary',
  },
  width: '25vw',
  variants: {
    error: {
      true: {
        borderColor: '$danger',
      },
    },
  },
});

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <>
      <HeaderArea>
        <Search placeholder="Search" />
        <ProfileDropdown />
      </HeaderArea>
    </>
  );
};

export default Header;
