import { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import Link from 'next/link';
import Image from 'next/image';
import { HiCalendar, HiArrowNarrowUp, HiClock } from 'react-icons/hi';
import { cursorTo } from 'readline';
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
  border: '1px solid #fff',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  grid: `[row1-start]'ideaimage ideanum ideanum divider ideadata ideadata ideadata' 1.5em [row1-end]
    [row2-start]'ideaimage ideaname ideaname divider ideastats ideastats ideastats' auto [row2-end]
    [row3-start]'created created priority divider ideastats ideastats ideastats' auto [row3-end] 
    / 4em 1fr 1fr 1em 1fr 1fr 1fr
    
    `,
  '&:hover': {
    border: '1px solid $primary',
    cursor: 'pointer',
  },
});

export const TaskCard = styled('div', {
  gridArea: 'tasks',
  display: 'grid',
  padding: '1.5em 0',
  gridGap: '10px',
  grid: `
  [row1-start]'header header viewall' 1.5em [row1-end]
          [row2-start]'task1 task2 task3' 200px [row2-end]
          [row3-start]'task4 task5 task6' 200px [row3-end]
          / 1fr 1fr 1fr
    `,
});

export const CalendarCard = styled('div', {
  gridArea: 'calendar',
  display: 'grid',
  background: '#fff',
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
  color: '#91929E',
  fontSize: '$xs',
});
export const Divider = styled('div', {
  gridArea: 'divider',
  height: '100%',
  borderRight: '2px solid #ddd',
  justifySelf: 'center',
});
export const IdeaData = styled('div', {
  gridArea: 'ideadata',
  fontWeight: '700',
  paddingLeft: '2em',
  paddingTop: '0.75em',
  fontSize: '$md',
});
export const IdeaName = styled('div', {
  gridArea: 'ideaname',
  fontWeight: '700',
  fontSize: '$mdsm',
});

export const Created = styled('div', {
  display: 'flex',
  gridArea: 'created',
  alignItems: 'center',
  color: '$mainGray',
});

export const CalendarIcon = styled(HiCalendar, {
  fontSize: '$lg',
});

export const IdeaDate = styled('div', {
  color: '$mainGray',
  paddingLeft: '$xs',
  fontSize: '$xs',
  marginTop: '3px',
});

export const UpArrowIcon = styled(HiArrowNarrowUp, {
  fontSize: '$lg',
});

export const PriorityLevel = styled('div', {
  paddingLeft: '$xs',
  fontSize: '$xs',
  marginTop: '3px',
  fontWeight: '700',
});

export const Priority = styled('div', {
  display: 'flex',
  gridArea: 'priority',
  alignItems: 'center',
  justifySelf: 'center',
  color: '$warning',
});

export const IdeaStats = styled('div', {
  display: 'grid',
  gridArea: 'ideastats',
  gridGap: '10px',
  paddingLeft: '2em',
  paddingTop: '1.25em',
  grid: '1fr / 1fr 1fr 1fr',
});

export const StatsHeader = styled('div', {
  fontSize: '$xs',
  color: '#91929E',
  paddingBottom: '5px',
});

export const Stats = styled('div', {
  fontWeight: '700',
});

export const Avatars = styled('div', {});

export const Title = styled('div', {
  gridArea: 'header',
  justifySelf: 'start',
  fontSize: '$lg',
  alignSelf: 'end',
  fontWeight: '700',
});

export const Task = styled('div', {
  display: 'grid',
  background: '#fff',
  height: '100%',
  width: '100%',
  borderRadius: '10px',
  padding: '1em 1.65em',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  grid: `
          [row1-start]'channel' 2em [row1-end]
          [row2-start]'ideaname' 2em [row2-end]
          [row3-start]'taskname' 1fr [row3-end]
          [row4-start]'duedate' 2em [row4-end]
          / 1fr
    `,
});

export const TaskIdeaName = styled('div', {
  gridArea: 'ideaname',
  fontSize: '$xs',
  color: '#91929E',
});

export const TaskName = styled('div', {
  gridArea: 'taskname',
});

export const DueDate = styled('div', {
  maxWidth: '100px',
  fontSize: '$xs',
  height: '1.85em',
  background: '$danger',
  borderRadius: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Channel = styled('div', {
  fontSize: '$xs',
  color: '$primary',
  fontWeight: '700',
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
  paddingLeft: '1.25em',
  justifySelf: 'start',
  fontSize: '$mdlg',
  alignSelf: 'center',
  fontWeight: '700',
});

export const ViewAllLinkTwo = styled('div', {
  gridArea: 'viewall',
  justifySelf: 'end',
  paddingRight: '1.25em',
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
        <SubSectionTitleTwo>Tasks</SubSectionTitleTwo>

        <ViewAllLinkTwo>
          <Link href="/">View All &gt;</Link>
        </ViewAllLinkTwo>
        <Task style={{ gridArea: 'task1' }}>
          <Channel>Youtube</Channel>
          <TaskIdeaName>Medical App (iOS native)</TaskIdeaName>
          <TaskName>Build the whole damn application right now.</TaskName>
          <DueDate>
            <HiClock style={{ marginRight: '3px' }} /> Mar 20th
          </DueDate>
        </Task>
        <Task style={{ gridArea: 'task2' }}>
          <Channel>Youtube</Channel>
          <TaskIdeaName>Medical App (iOS native)</TaskIdeaName>
          <TaskName>Build the whole damn application right now.</TaskName>
          <DueDate>
            <HiClock style={{ marginRight: '3px' }} /> Mar 20th
          </DueDate>
        </Task>
        <Task style={{ gridArea: 'task3' }}>
          <Channel>Youtube</Channel>
          <TaskIdeaName>Medical App (iOS native)</TaskIdeaName>
          <TaskName>Build the whole damn application right now.</TaskName>
          <DueDate>
            <HiClock style={{ marginRight: '3px' }} /> Mar 20th
          </DueDate>
        </Task>
        <Task style={{ gridArea: 'task4' }}>
          <Channel>Youtube</Channel>
          <TaskIdeaName>Medical App (iOS native)</TaskIdeaName>
          <TaskName>Build the whole damn application right now.</TaskName>
          <DueDate>
            <HiClock style={{ marginRight: '3px' }} /> Mar 20th
          </DueDate>
        </Task>
        <Task style={{ gridArea: 'task5' }}>
          <Channel>Youtube</Channel>
          <TaskIdeaName>Medical App (iOS native)</TaskIdeaName>
          <TaskName>Build the whole damn application right now.</TaskName>
          <DueDate>
            <HiClock style={{ marginRight: '3px' }} /> Mar 20th
          </DueDate>
        </Task>
        <Task style={{ gridArea: 'task6' }}>
          <Channel>Youtube</Channel>
          <TaskIdeaName>Medical App (iOS native)</TaskIdeaName>
          <TaskName>Build the whole damn application right now.</TaskName>
          <DueDate>
            <HiClock style={{ marginRight: '3px' }} /> Mar 20th
          </DueDate>
        </Task>
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
          <IdeaNumber>PN0001265</IdeaNumber>
          <Divider></Divider>
          <IdeaData>Idea Data</IdeaData>
          <IdeaName>Medical App (iOS native)</IdeaName>
          <Created>
            <CalendarIcon /> <IdeaDate>Created Nov 27, 2021</IdeaDate>
          </Created>
          <Priority>
            <UpArrowIcon /> <PriorityLevel>Medium</PriorityLevel>
          </Priority>
          <IdeaStats>
            <div>
              <StatsHeader>All tasks</StatsHeader>
              <Stats>34</Stats>
            </div>
            <div>
              <StatsHeader>Active tasks</StatsHeader>
              <Stats>13</Stats>
            </div>
            <div>
              <StatsHeader>Stakeholders</StatsHeader>
              <Avatars>
                {' '}
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
              </Avatars>
            </div>
          </IdeaStats>
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
          <IdeaNumber>PN0001265</IdeaNumber>
          <Divider></Divider>
          <IdeaData>Idea Data</IdeaData>
          <IdeaName>Medical App (iOS native)</IdeaName>
          <Created>
            <CalendarIcon /> <IdeaDate>Created Nov 27, 2021</IdeaDate>
          </Created>
          <Priority>
            <UpArrowIcon /> <PriorityLevel>Medium</PriorityLevel>
          </Priority>
          <IdeaStats>
            <div>
              <StatsHeader>All tasks</StatsHeader>
              <Stats>34</Stats>
            </div>
            <div>
              <StatsHeader>Active tasks</StatsHeader>
              <Stats>13</Stats>
            </div>
            <div>
              <StatsHeader>Stakeholders</StatsHeader>
              <Avatars>
                {' '}
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
              </Avatars>
            </div>
          </IdeaStats>
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
          <IdeaNumber>PN0001265</IdeaNumber>
          <Divider></Divider>
          <IdeaData>Idea Data</IdeaData>
          <IdeaName>Medical App (iOS native)</IdeaName>
          <Created>
            <CalendarIcon /> <IdeaDate>Created Nov 27, 2021</IdeaDate>
          </Created>
          <Priority>
            <UpArrowIcon /> <PriorityLevel>Medium</PriorityLevel>
          </Priority>
          <IdeaStats>
            <div>
              <StatsHeader>All tasks</StatsHeader>
              <Stats>34</Stats>
            </div>
            <div>
              <StatsHeader>Active tasks</StatsHeader>
              <Stats>13</Stats>
            </div>
            <div>
              <StatsHeader>Stakeholders</StatsHeader>
              <Avatars>
                {' '}
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
              </Avatars>
            </div>
          </IdeaStats>
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
          <IdeaNumber>PN0001265</IdeaNumber>
          <Divider></Divider>
          <IdeaData>Idea Data</IdeaData>
          <IdeaName>Medical App (iOS native)</IdeaName>
          <Created>
            <CalendarIcon /> <IdeaDate>Created Nov 27, 2021</IdeaDate>
          </Created>
          <Priority>
            <UpArrowIcon /> <PriorityLevel>Medium</PriorityLevel>
          </Priority>
          <IdeaStats>
            <div>
              <StatsHeader>All tasks</StatsHeader>
              <Stats>34</Stats>
            </div>
            <div>
              <StatsHeader>Active tasks</StatsHeader>
              <Stats>13</Stats>
            </div>
            <div>
              <StatsHeader>Stakeholders</StatsHeader>
              <Avatars>
                {' '}
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
                <Image
                  src="/photo.png"
                  width="28"
                  height="28"
                  alt="something"
                />
              </Avatars>
            </div>
          </IdeaStats>
        </Idea>
      </IdeaCard>

      <StoryboardCard>
        <SubSectionTitle>Storyboards</SubSectionTitle>

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
