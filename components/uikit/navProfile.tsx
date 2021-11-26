import { styled } from '../../stitches.config';
// import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa';

export const ProfileContainer = styled('div', {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   gridTemplateColumns: 'auto 1fr auto',
  //   gridColumnGap: '1em',
  //   gridTemplateAreas: 'pic name dropdown',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const MainProfileArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  background: '#fff',
  padding: '0.5em 1em',
  borderRadius: '14px',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
});

export const ProfilePic = styled('img', {
  maxWidth: '2em',
  borderRadius: '5em',
});

export const ProfileName = styled('div', {
  marginTop: '2px',
  fontSize: '0.9em',
  fontWeight: '700',
});

export const ProfileRole = styled('div', {
  fontSize: '0.75em',
});

export const DropdownButton = styled(FaAngleDown, {
  //   borderRadius: '5px',
  //   padding: '5px',
  //   width: '1em',
  //   height: 'auto',
  //   backgroundColor: '#f7f7ff',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const Dropdown = styled('div', {
  position: 'absolute',
  right: '12.10em',
  backgroundColor: '#fff',
  marginTop: '0.5em',
  alignItems: 'start',
  zIndex: '995',
});

export const DropdownContent = styled('div', {
  position: 'absolute',
  padding: '0.5em 0',
  borderRadius: '14px',
  paddingBottom: '0.5em',
  backgroundColor: '#fff',
  minWidth: '145.52px',
  zIndex: '1',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
});

export const DropLink = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75em',
  color: '#000',
  padding: '0.5em 0 0.5em 1.5em',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: '#4f9da6',
  },
});
