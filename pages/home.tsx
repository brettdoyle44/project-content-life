import { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import Link from 'next/link';
import Image from 'next/image';
// import { SubSectionTitle, Card, ViewAllLink } from '../components/uikit/uikit';

const HomeLayout = styled('div', {
  display: 'grid',
  padding: '0.5em 1.5em',
  gridGap: '1.5em',
  //   grid: 'auto / 2fr 1fr',

  grid: `[row1-start]'header header header' 1.5em [row1-end]
  [row2-start]'tasks tasks calendar' auto [row2-end]
          [row3-start]'idea idea storyboard' auto [row3-end]
          / 1fr 1fr 1fr
    `,
  //   '@bp1': {
  //     gridTemplateColumns: '1fr 20em',
  //     gridTemplateAreas: `'project calendar'
  //       'project calendar'`,
  //   },
});

export const IdeaCard = styled('div', {
  gridArea: 'idea',
  display: 'grid',
  padding: '1.5em 0',
  gridGap: '10px',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  grid: `
    [row1-start]'header viewall' 1.5em [row1-end]
            [row2-start]'idea1 idea1' 145px [row2-end]
            [row3-start]'idea2 idea2' 145px [row3-end]
            [row3-start]'idea3 idea3' 145px [row3-end]
            [row3-start]'idea4 idea4' 145px [row3-end]
            / 1fr 1fr
      `,
});

export const Idea = styled('div', {
  display: 'grid',
  backgroundColor: '#fff',
  borderRadius: '0.5em',
  padding: '1.5em',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  grid: `[row1-start]'ideaimage ideanum ideanum divider ideadata ideadata ideadata' 1.5em [row1-end]
    [row2-start]'ideaimage ideaname ideaname divider ideastats ideastats ideastats' auto [row2-end]
    [row3-start]'created created priority divider ideastats ideastats ideastats' auto [row3-end] 
    / 4em 1fr 1fr 1em 1fr 1fr 1fr
    
    `,
});

export const TaskCard = styled('div', {
  gridArea: 'tasks',
  display: 'grid',
  backgroundColor: '#fff',
  borderRadius: '0.5em',
  padding: '1.5em',
  gridGap: '10px',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  grid: `
  [row1-start]'header header viewall viewall' 1.5em [row1-end]
          [row2-start]'task1 task2 task3 task4' 150px [row2-end]
          [row3-start]'task5 task6 task7 task8' 150px [row3-end]
          / 1fr 1fr 1fr 1fr
    `,
});

export const CalendarCard = styled('div', {
  gridArea: 'calendar',
  display: 'grid',
  backgroundColor: '#fff',
  borderRadius: '0.5em',
  padding: '1.5em',
  gridGap: '10px',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  grid: `
  [row1-start]'header viewall' 1.5em [row1-end]
          [row2-start]'event1 event1' 100px [row2-end]
          [row3-start]'event2 event2' 100px [row3-end]
          [row3-start]'event3 event3' 100px [row3-end]
          / 2fr 1fr
    `,
});

export const StoryboardCard = styled('div', {
  gridArea: 'storyboard',
  display: 'grid',
  backgroundColor: '#fff',
  borderRadius: '0.5em',
  padding: '1.5em',
  gridGap: '10px',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  grid: `
  [row1-start]'header viewall' 1.5em [row1-end]
          [row2-start]'story1 story1' 100px [row2-end]
          [row3-start]'story2 story2' 100px [row3-end]
          [row3-start]'story3 story3' 100px [row3-end]
          / 2fr 1fr
    `,
});

export const IdeaImage = styled('div', {
  gridArea: 'ideaimage',
});
export const IdeaNumber = styled('div', {
  gridArea: 'ideanum',
});
export const Divider = styled('div', {
  gridArea: 'divider',
  height: '100%',
  borderRight: '2px solid #ddd',
  justifySelf: 'center',
});
export const IdeaData = styled('div', {
  gridArea: 'ideadata',
});
export const IdeaName = styled('div', {
  gridArea: 'ideaname',
});
export const Created = styled('div', {
  gridArea: 'created',
});
export const Priority = styled('div', {
  gridArea: 'priority',
});

export const IdeaStats = styled('div', {
  gridArea: 'ideastats',
});

// export const CardLayout = styled('div', {
//     display: grid
// })
export const Title = styled('div', {
  gridArea: 'header',
  justifySelf: 'start',
  fontSize: '$lg',
  alignSelf: 'end',
  fontWeight: '700',
});

export const Task = styled('div', {
  background: '$lightGray',
  height: '100%',
  width: '100%',
});

export const CalendarEvent = styled('div', {
  background: '$lightGray',
  height: '100%',
  width: '100%',
});

export const Story = styled('div', {
  background: '$lightGray',
  height: '100%',
  width: '100%',
});

export const SubSectionTitle = styled('div', {
  gridArea: 'header',
  justifySelf: 'start',
  fontSize: '$mdlg',
  alignSelf: 'center',
  fontWeight: '700',
});

export const ViewAllLink = styled('div', {
  gridArea: 'viewall',
  justifySelf: 'end',
  color: '$primary',
  fontSize: '$md',
  alignSelf: 'center',
});
export const SubSectionTitleTwo = styled('div', {
  gridArea: 'header',
  paddingLeft: '1.5em',
  justifySelf: 'start',
  fontSize: '$mdlg',
  alignSelf: 'center',
  fontWeight: '700',
});

export const ViewAllLinkTwo = styled('div', {
  gridArea: 'viewall',
  justifySelf: 'end',
  paddingRight: '1.5em',
  color: '$primary',
  fontSize: '$md',
  alignSelf: 'center',
});

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <HomeLayout>
      <Title>Dashboard</Title>

      <TaskCard>
        <SubSectionTitle>Tasks</SubSectionTitle>

        <ViewAllLink>
          <Link href="/">View All &gt;</Link>
        </ViewAllLink>
        <Task style={{ gridArea: 'task1' }}></Task>
        <Task style={{ gridArea: 'task2' }}></Task>
        <Task style={{ gridArea: 'task3' }}></Task>
        <Task style={{ gridArea: 'task4' }}></Task>
        <Task style={{ gridArea: 'task5' }}></Task>
        <Task style={{ gridArea: 'task6' }}></Task>
        <Task style={{ gridArea: 'task7' }}></Task>
        <Task style={{ gridArea: 'task8' }}></Task>
      </TaskCard>

      <CalendarCard>
        <SubSectionTitle>Upcoming Events</SubSectionTitle>

        <ViewAllLink>
          <Link href="/">View All &gt;</Link>
        </ViewAllLink>
        <CalendarEvent style={{ gridArea: 'event1' }}></CalendarEvent>
        <CalendarEvent style={{ gridArea: 'event2' }}></CalendarEvent>
        <CalendarEvent style={{ gridArea: 'event3' }}></CalendarEvent>
      </CalendarCard>

      <IdeaCard>
        <SubSectionTitleTwo>Ideas</SubSectionTitleTwo>

        <ViewAllLinkTwo>
          <Link href="/">View All &gt;</Link>
        </ViewAllLinkTwo>
        <Idea style={{ gridArea: 'idea1' }}>
          <IdeaImage>
            <Image
              src="/Project-image.png"
              width="48"
              height="48"
              alt="something"
            />
          </IdeaImage>
          <IdeaNumber>ID000001</IdeaNumber>
          <Divider></Divider>
          <IdeaData>Idea Data</IdeaData>
          <IdeaName>Some Idea</IdeaName>
          <Created>Nov 27, 2021</Created>
          <Priority>Medium</Priority>
          <IdeaStats>1235</IdeaStats>
        </Idea>

        <Idea style={{ gridArea: 'idea2' }}>
          <IdeaImage>
            <Image
              src="/Project-image.png"
              width="48"
              height="48"
              alt="something"
            />
          </IdeaImage>
          <IdeaNumber>ID000001</IdeaNumber>
          <Divider></Divider>
          <IdeaData>Idea Data</IdeaData>
          <IdeaName>Some Idea</IdeaName>
          <Created>Nov 27, 2021</Created>
          <Priority>Medium</Priority>
          <IdeaStats>1235</IdeaStats>
        </Idea>

        <Idea style={{ gridArea: 'idea3' }}>
          <IdeaImage>
            <Image
              src="/Project-image.png"
              width="48"
              height="48"
              alt="something"
            />
          </IdeaImage>
          <IdeaNumber>ID000001</IdeaNumber>
          <Divider></Divider>
          <IdeaData>Idea Data</IdeaData>
          <IdeaName>Some Idea</IdeaName>
          <Created>Nov 27, 2021</Created>
          <Priority>Medium</Priority>
          <IdeaStats>1235</IdeaStats>
        </Idea>

        <Idea style={{ gridArea: 'idea4' }}>
          <IdeaImage>
            <Image
              src="/Project-image.png"
              width="48"
              height="48"
              alt="something"
            />
          </IdeaImage>
          <IdeaNumber>ID000001</IdeaNumber>
          <Divider></Divider>
          <IdeaData>Idea Data</IdeaData>
          <IdeaName>Some Idea</IdeaName>
          <Created>Nov 27, 2021</Created>
          <Priority>Medium</Priority>
          <IdeaStats>1235</IdeaStats>
        </Idea>
      </IdeaCard>

      <StoryboardCard>
        <SubSectionTitle>Recent Storyboards</SubSectionTitle>

        <ViewAllLink>
          <Link href="/">View All &gt;</Link>
        </ViewAllLink>
        <CalendarEvent style={{ gridArea: 'story1' }}></CalendarEvent>
        <CalendarEvent style={{ gridArea: 'story2' }}></CalendarEvent>
        <CalendarEvent style={{ gridArea: 'story3' }}></CalendarEvent>
      </StoryboardCard>
    </HomeLayout>
  );
};

export default HomePage;
