import { styled } from '../../stitches.config';
// import Image from 'next/image';
import { FaAngleDown, FaCog, FaDollarSign, FaSignOutAlt } from 'react-icons/fa';

export const ProfileContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: 'auto auto',
  gridColumnGap: '1em',
  gridTemplateAreas: `'pic name dropdown'
    'pic role dropdown'`,
  //   '&:hover': {
  //     cursor: 'pointer',
  //   },
});

export const ProfilePic = styled('img', {
  gridArea: 'pic',
  maxWidth: '2.5em',
  borderRadius: '5em',
});

export const ProfileName = styled('div', {
  gridArea: 'name',
  marginTop: '2px',
  fontSize: '0.9em',
});

export const ProfileRole = styled('div', {
  gridArea: 'role',
  fontSize: '0.75em',
});

export const DropdownButton = styled(FaAngleDown, {
  gridArea: 'dropdown',
  alignSelf: 'center',
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
  marginTop: '3em',
  right: '11.5em',
  backgroundColor: '#fff',
  borderRadius: '2em',
  display: 'grid',
  gridGap: '1em',
  padding: '1em 0em',
  alignItems: 'start',
  zIndex: '995',
});

export const DropdownContent = styled('div', {
  position: 'absolute',
  paddingBottom: '0.5em',
  backgroundColor: '#fff',
  minWidth: '160px',
  boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
  zIndex: '1',
});

export const DropLink = styled('li', {
  color: '#000',
  padding: '0.5em 0 0.5em 1.5em',
  display: 'block',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: '#4f9da6',
  },
});

export const SettingsIcon = styled(FaCog, {
  position: 'relative',
  width: '1em',
  top: '7px',
  paddingRight: '0.5em',
});

export const BillingIcon = styled(FaDollarSign, {
  position: 'relative',
  width: '1em',
  top: '7px',
  paddingRight: '0.5em',
});

export const LogoutIcon = styled(FaSignOutAlt, {
  position: 'relative',
  width: '1em',
  top: '7px',
  paddingRight: '0.5em',
});
