import { FunctionComponent, useState } from 'react';
import {
  ProfileContainer,
  ProfilePic,
  ProfileName,
  DropdownButton,
  Dropdown,
  DropdownContent,
  DropLink,
  MainProfileArea,
} from './uikit/navProfile';
import { HiCog, HiCurrencyDollar, HiLogout } from 'react-icons/hi';

interface Props {}

const ProfileDropdown: FunctionComponent<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    return setIsOpen(!isOpen);
  }
  return (
    <>
      <ProfileContainer>
        <MainProfileArea onClick={toggleDropdown}>
          <ProfilePic src="photo.png" alt="profile picture" />
          <ProfileName>Brett D.</ProfileName>
          <DropdownButton />
        </MainProfileArea>
        {isOpen && (
          <Dropdown>
            <DropdownContent>
              <DropLink>
                <HiCog />
                Settings
              </DropLink>
              <DropLink>
                <HiCurrencyDollar />
                Billing
              </DropLink>
              <DropLink>
                <HiLogout />
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
