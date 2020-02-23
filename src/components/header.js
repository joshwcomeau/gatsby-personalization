import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import AuthMenu from './auth-menu';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Spacer = styled.div`
  width: ${props => props.size}px;
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Nav>
        <NavLink to="/">Store</NavLink>
        <Spacer size={32} />
        <NavLink to="/">About</NavLink>
        <Spacer size={32} />
        <AuthMenu />
      </Nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
