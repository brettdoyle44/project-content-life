import { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const CoreLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '50px 1fr 50px',
  gridTemplateAreas: `'header' 
  'main'`,
  // height: '100vh',
  backgroundColor: '#F4F9FD',
  '@bp1': {
    grid: `[row1-start]'sidenav header' 100px [row1-end]
          [row1-start]'sidenav main' auto [row1-end] / 
          240px 1fr
    `,
  },
});

const MainArea = styled('div', {
  gridArea: 'main',
  padding: '0.5em 2em',
});

interface Props {
  children: any;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <CoreLayout>
        <NavBar />
        <Header />
        <MainArea>{children}</MainArea>
      </CoreLayout>
    </>
  );
};

export default Layout;
