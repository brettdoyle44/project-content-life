import { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
// import logo from '../public/vercel.svg';

const SideNav = styled('div', {
  gridArea: 'sidenav',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
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

const HeaderContainer = styled('div', {
  marginTop: '1em',
  paddingLeft: '1.25em',
});

const Header = styled('img', {
  width: '10em',
});

const LinkContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0.9em',
  fontWeight: '500',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  width: '100%',
});

const LinkWrapper = styled('li', {
  padding: '0.5em 0em 1em 2.5em',
  '&:hover': {
    color: '#4f9da6',
    backgroundColor: '#f7f7ff',
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
        <HeaderContainer>
          <Header src="vercel.svg" alt="logo" />
        </HeaderContainer>
        <div>
          <LinkContainer>
            <LinkWrapper>
              <NavLink href="/analytics">Analytics</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink href="/ideas">Ideas</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink href="/storyboard">Storyboard</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink href="/calendar">Calendar</NavLink>
            </LinkWrapper>
          </LinkContainer>
        </div>
      </SideNav>
    </>
  );
};

export default NavBar;
