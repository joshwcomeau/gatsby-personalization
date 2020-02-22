import React from 'react';
import styled from 'styled-components';

import {
  getUserInfo,
  FAKE_USER,
  LOCAL_STORAGE_KEY,
} from '../auth.helpers';
import usePersistedState from '../hooks/use-persisted-state.hook';

import UnstyledButton from './unstyled-button';
import MenuIcon from './menu-icon';
import ClientOnly from './client-only';

const isBeingPrebuilt =
  typeof window === 'undefined';

const AuthMenu = () => {
  const [user, setUser] = usePersistedState(
    LOCAL_STORAGE_KEY,
    getUserInfo()
  );

  if (isBeingPrebuilt) {
    return null;
  }

  return (
    <>
      {user ? (
        <LoggedInMenu
          user={user}
          setUser={setUser}
        />
      ) : (
        <LoginLink setUser={setUser} />
      )}
    </>
  );
};

const LoginLink = ({ setUser }) => (
  <Wrapper
    onClick={() => {
      setUser(FAKE_USER);
    }}
  >
    Log in
  </Wrapper>
);

const LoggedInMenu = ({ user, setUser }) => (
  <Wrapper onClick={() => setUser(null)}>
    <Avatar
      src={user.avatar}
      alt={`${user.displayName}'s avatar`}
    />
    <DisplayName>{user.displayName}</DisplayName>
    <MenuIcon />
  </Wrapper>
);

const Wrapper = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  color: white;
`;

const Avatar = styled.img`
  display: block;
  margin-right: 8px;
  margin-bottom: 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const DisplayName = styled.span`
  display: block;
  margin-right: 8px;
`;

export default AuthMenu;
