import React from 'react';
import styled from 'styled-components';

import {
  getUserInfo,
  persistUserInfo,
  FAKE_USER,
} from '../auth.helpers';

import UnstyledButton from './unstyled-button';
import MenuIcon from './menu-icon';

const AuthMenu = () => {
  const [
    hasMounted,
    setHasMounted,
  ] = React.useState(false);

  const [user, setUser] = React.useState(
    getUserInfo()
  );

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {user ? (
        <LoggedInMenu user={user} />
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
      persistUserInfo(FAKE_USER);
    }}
  >
    Log in
  </Wrapper>
);

const LoggedInMenu = ({ user }) => (
  <Wrapper>
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
