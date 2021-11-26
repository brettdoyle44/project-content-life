import { FunctionComponent } from 'react';
// import {
//   ProfileContainer,
//   ProfilePic,
//   ProfileRole,
//   ProfileName,
//   DropdownButton,
//   Dropdown,
//   DropdownContent,
//   DropLink,
//   SettingsIcon,
//   BillingIcon,
//   LogoutIcon,
// } from './uikit/navProfile';
import { styled } from '../stitches.config';
import ProfileDropdown from './ProfileDropdown';

const HeaderArea = styled('div', {
  gridArea: 'header',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1.5em 2em 0em 2em',
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
  // const [isOpen, setIsOpen] = useState(false);

  // function toggleDropdown() {
  //   return setIsOpen(!isOpen);
  // }

  return (
    <>
      <HeaderArea>
        <Search placeholder="Search" />
        <ProfileDropdown />
        {/* <ProfileContainer onClick={toggleDropdown}>
          <ProfilePic src="avatar-1.jpg" alt="profile picture" />
          <ProfileName>Brett D.</ProfileName>
          <ProfileRole>Owner</ProfileRole>
          <DropdownButton />
          {isOpen && (
            <Dropdown>
              <DropdownContent>
                <DropLink>
                  <SettingsIcon />
                  Settings
                </DropLink>
                <DropLink>
                  <BillingIcon />
                  Billing
                </DropLink>
                <DropLink>
                  <LogoutIcon />
                  Logout
                </DropLink>
              </DropdownContent>
            </Dropdown>
          )}
        </ProfileContainer> */}
      </HeaderArea>
    </>
  );
};

export default Header;
