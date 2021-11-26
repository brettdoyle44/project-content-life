import { FunctionComponent, useState } from 'react';
import {
  ProfileContainer,
  ProfilePic,
  ProfileRole,
  ProfileName,
  DropdownButton,
  Dropdown,
  DropdownContent,
  DropLink,
  SettingsIcon,
  BillingIcon,
  LogoutIcon,
} from './uikit/navProfile';

interface Props {}

const ProfileDropdown: FunctionComponent<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    return setIsOpen(!isOpen);
  }
  return (
    <>
      <ProfileContainer onClick={toggleDropdown}>
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
      </ProfileContainer>
    </>
  );
};

export default ProfileDropdown;
