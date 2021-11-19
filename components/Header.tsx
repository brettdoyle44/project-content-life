import { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import { DropDownWrapper, DropDown } from './uikit/uikit';

const HeaderArea = styled('div', {
  gridArea: 'header',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.5em 2em',
});

export const Search = styled('input', {
  padding: '$md $lg',
  borderRadius: '14px',
  border: '1px solid #fff',
  boxSizing: 'border-box',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  outline: 'none',
  '&:focus': {
    border: '1px solid $primary',
  },
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
        <DropDownWrapper>
          <DropDown></DropDown>
        </DropDownWrapper>
      </HeaderArea>
    </>
  );
};

export default Header;
