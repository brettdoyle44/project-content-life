import { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import { Button } from '../components/uikit/uikit';
import { HiClock } from 'react-icons/hi';
import { FaEnvelope, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { HiPlusCircle } from 'react-icons/hi';

const Layout = styled('div', {
  display: 'grid',
  padding: '0.5em 1.5em',
  gridGap: '1.5em',
  //   grid: 'auto / 2fr 1fr',

  grid: `[row1-start]'header header addbutton' 2.5em [row1-end]
           [row2-start]'campaign campaign campaign' auto [row2-end]
            / 1fr 1fr 11em
      `,
  //   '@bp1': {
  //     gridTemplateColumns: '1fr 20em',
  //     gridTemplateAreas: `'project calendar'
  //       'project calendar'`,
  //   },
});

export const Title = styled('div', {
  gridArea: 'header',
  justifySelf: 'start',
  fontSize: '$lg',
  alignSelf: 'end',
  fontWeight: '700',
});

export const CampaignLayout = styled('div', {
  gridArea: 'campaign',
  display: 'grid',
  grid: 'auto / 1fr 1fr 1fr',
  gridGap: '1.5em',
});

export const Card = styled('div', {
  display: 'grid',
  backgroundColor: '#fff',
  borderRadius: '0.5em',
  padding: '1.5em',
  border: '1px solid #fff',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
  gridGap: '1em',
  grid: `[row1-start]'campaignname campaignname' 1.5em [row1-end]
  [row2-start]'campaigndetail campaigndetail' auto [row2-end]
  [row3-start]'channels channels' auto [row3-end]
  [row4-start]'duedate status' auto [row4-end] 
  / 1fr 1fr
  
  `,
  '&:hover': {
    border: '1px solid $primary',
    cursor: 'pointer',
  },
});

export const BlankCard = styled('div', {
  display: 'grid',
  borderRadius: '0.5em',
  padding: '1.5em',
  height: '18em',
  border: '3px dashed $primary',
  '&:hover': {
    opacity: '0.8',
    cursor: 'pointer',
  },
});

export const CampaignName = styled('div', {
  gridArea: 'campaignname',
});

export const CampaignDetail = styled('div', {
  gridArea: 'campaigndetail',
  fontSize: '$md',
  color: '#91929E',
});

export const Channels = styled('div', {
  gridArea: 'channels',
  fontSize: '$md',
  display: 'grid',
  grid: ' 1.5em 1fr / 1fr',
  gridGap: '0.5em',
});

export const ChannelText = styled('div', {
  fontSize: '$md',
});

export const Icons = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const IconWrapper = styled('div', {
  background: '$primary',
  color: '#fff',
  padding: '0.3em',
  borderRadius: '50px',
  width: '35px',
  height: '35px',
  marginRight: '0.5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const DueDate = styled('div', {
  gridArea: 'duedate',
  fontSize: '$xs',
  alignSelf: 'center',
  width: '100px',
  padding: '$xs',
  color: '#cc8e00',
  background: '$warning',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const Status = styled('div', {
  gridArea: 'status',
  fontSize: '$xs',
  alignSelf: 'center',
  color: '$warning',
});

interface CampaignsProps {}

const Campaigns: FunctionComponent<CampaignsProps> = () => {
  return (
    <>
      <Layout>
        <Title>Campaigns</Title>
        <Button color="primary" style={{ gridArea: 'addbutton' }}>
          <HiPlusCircle style={{ color: '#fff' }} /> New Campaign
        </Button>
        <CampaignLayout>
          <Card>
            <CampaignName>Sample Name</CampaignName>
            <CampaignDetail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ut quia velit culpa voluptates fugit...
            </CampaignDetail>
            <Channels>
              <ChannelText>Channels:</ChannelText>
              <Icons>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <IconWrapper>
                  <FaFacebookF />
                </IconWrapper>
                <IconWrapper>
                  <FaTwitter />
                </IconWrapper>
              </Icons>
            </Channels>
            <DueDate>
              <HiClock style={{ marginRight: '3px' }} /> Mar 20th
            </DueDate>
            <Status>In Progress</Status>
          </Card>
          <Card>
            <CampaignName>Sample Name</CampaignName>
            <CampaignDetail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ut quia velit culpa voluptates fugit.
            </CampaignDetail>
            <Channels>Email, Facebook, Twitter</Channels>
            <DueDate>
              <HiClock style={{ marginRight: '3px' }} /> Mar 20th
            </DueDate>
            <Status>In Progress</Status>
          </Card>
          <Card>
            <CampaignName>Sample Name</CampaignName>
            <CampaignDetail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ut quia velit culpa voluptates fugit.
            </CampaignDetail>
            <Channels>Email, Facebook, Twitter</Channels>
            <DueDate>
              <HiClock style={{ marginRight: '3px' }} /> Mar 20th
            </DueDate>
            <Status>In Progress</Status>
          </Card>
          <Card>
            <CampaignName>Sample Name</CampaignName>
            <CampaignDetail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ut quia velit culpa voluptates fugit.
            </CampaignDetail>
            <Channels>Email, Facebook, Twitter</Channels>
            <DueDate>
              <HiClock style={{ marginRight: '3px' }} /> Mar 20th
            </DueDate>
            <Status>In Progress</Status>
          </Card>
          <Card>
            <CampaignName>Sample Name</CampaignName>
            <CampaignDetail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ut quia velit culpa voluptates fugit.
            </CampaignDetail>
            <Channels>Email, Facebook, Twitter</Channels>
            <DueDate>
              <HiClock style={{ marginRight: '3px' }} /> Mar 20th
            </DueDate>
            <Status>In Progress</Status>
          </Card>
          <Card>
            <CampaignName>Sample Name</CampaignName>
            <CampaignDetail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ut quia velit culpa voluptates fugit.
            </CampaignDetail>
            <Channels>Email, Facebook, Twitter</Channels>
            <DueDate>
              <HiClock style={{ marginRight: '3px' }} /> Mar 20th
            </DueDate>
            <Status>In Progress</Status>
          </Card>
        </CampaignLayout>
      </Layout>
    </>
  );
};

export default Campaigns;
