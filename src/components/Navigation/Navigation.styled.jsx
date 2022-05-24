import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background-color: #fff;
  padding: 10px 0;
`;

export const Link = styled(NavLink)`
  color: black;
  font-size: 30px;
  /* padding: 10px; */
  margin-right: 10px;
  margin-bottom: 10px;

  :last-child {
    margin: 0;
  }

  &.active {
    color: red;
    font-weight: 700;
  }
`;
