import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background-color: #fff;
  padding: 20px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-size: 30px;
  padding: 10px;
  margin-right: 10px;
  :last-child {
    margin: 0;
  }

  &.active {
    color: red;
    font-weight: 700;
  }
`;
