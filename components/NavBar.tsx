import { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
// import logo from '../public/vercel.svg';
import {
  HiLightningBolt,
  HiViewBoards,
  HiHome,
  HiCalendar,
} from 'react-icons/hi';

const SideNav = styled('div', {
  gridArea: 'sidenav',
  display: 'flex',
  flexDirection: 'column',
  margin: '1.5em 1.5em 0 1.5em',
  height: '95%',
  borderRadius: '24px',
  width: '240px',
  position: 'fixed',
  overflowY: 'auto',
  zIndex: '2',
  textAlign: 'left',
  backgroundColor: '#fff',
  transition: 'all 0.6s ease-in-out',
  boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)',
  '@bp1': {
    position: 'fixed',
    transform: 'translateX(0)',
    boxShadow: 'none',
    backgroundColor: '#fff,',
  },
});

const SideNavClose = styled('div', {
  position: 'absolute',
  visibility: 'visible',
  top: '8px',
  right: '12px',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#ddd',
  '@bp1': {
    visibility: 'hidden',
  },
});

const LogoContainer = styled('div', {
  padding: '2em 2.25em',
});

const Logo = styled('img', {
  width: '9em',
});

const LinkContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0.9em',
  fontWeight: '500',
  listStyle: 'none',
  margin: '0',
  paddingLeft: '1.25em',
  width: '100%',
});

const LinkWrapper = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1em',
  padding: '1em 0em 1em 1.25em',
  borderTopLeftRadius: '14px',
  borderBottomLeftRadius: '14px',
  '&:hover': {
    color: '#4f9da6',
    backgroundColor: '#f7f7ff',
    borderRight: '2px solid #4f9da6',
    cursor: 'pointer',
  },
});

const NavLink = styled(Link, {
  color: '#595967',
  display: 'block',
  textDecoration: 'none',
});

interface Props {}

const NavBar: FunctionComponent<Props> = () => {
  return (
    <>
      <SideNav>
        <SideNavClose>
          <FaTimes />
        </SideNavClose>
        <LogoContainer>
          <Logo src="CL-Final-Logo-Light.svg" alt="logo" />
        </LogoContainer>
        <div>
          <LinkContainer>
            <NavLink href="/home">
              <LinkWrapper>
                <HiHome /> Home
              </LinkWrapper>
            </NavLink>
            <NavLink href="/campaigns">
              <LinkWrapper>
                <HiLightningBolt /> Campaigns
              </LinkWrapper>
            </NavLink>
            <NavLink href="/calendar">
              <LinkWrapper>
                <HiCalendar />
                Calendar
              </LinkWrapper>
            </NavLink>
          </LinkContainer>
        </div>
      </SideNav>
    </>
  );
};

export default NavBar;
