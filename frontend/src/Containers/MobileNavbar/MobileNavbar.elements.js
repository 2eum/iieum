import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import * as colors from '../../styles/Colors';

// Container
export const NavContainer = styled.nav`
  width: 375px;
  padding: 1rem;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  position: sticky;
  top: 0;
  z-index: 15;

  background-color: ${colors.iiBG};
`;

// Top
export const NavTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// Logo
export const LogoContainer = styled(Link)`
  width: 50%;
  text-align: center;
`;

export const Logo = styled.img`
  width: 65%;
  cursor: pointer;
`;

// Search Bar
export const SearchBarContainer = styled.section`
  width: 25%;
  height: 100%;
  position: relative;

  padding: 0 1rem;

  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: ${(p) => (p.open ? '10rem' : '0')};
  height: 2rem;
  position: absolute;
  left: 4.5rem;

  padding: 0.5rem;

  font-size: 0.7rem;

  border: none;
  border-bottom: solid 1px ${colors.cardStroke};

  opacity: ${(p) => (p.open ? 1 : 0)};
  background-color: ${colors.iiBG};
  :focus {
    outline: none;
  }

  transition: all 200ms;
`;

export const SearchButton = styled(Link)`
  width: max-content;
  height: 2rem;
  position: absolute;
  left: ${(p) => (p.open ? '14rem' : 0)};

  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  opacity: ${(p) => (p.open ? 1 : 0)};
  background-color: ${colors.iiBG};

  & i {
    color: ${colors.iiPurple};
    opacity: 0.7;
  }

  transition: all 200ms;
`;

export const SearchButtonDisabled = styled.div`
  width: max-content;
  height: 2rem;

  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: ${colors.iiBG};

  & i {
    color: ${colors.iiPurple};
    opacity: 0.7;
  }
`;

// Links
export const NavLinkContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CustomNavLink = styled(NavLink)`
  ${(p) => (p.top ? 'width: 25%;' : '')}
  width: calc(100% / 3);
  padding: 0.5rem 0;
  position: relative;

  cursor: pointer;
  text-align: center;

  background-color: ${(p) => (p.top ? '' : colors.iiSunset)};

  &:hover {
    translate: scale(1.05);
    color: ${colors.iiPurple};
  }

  &.active {
    background-color: ${colors.iiBG};
    box-shadow: ${(p) => (p.top ? '' : '0px -3px 4px rgba(0, 0, 0, 0.1)')};
    z-index: 20;
  }

  transition: all 100ms;
`;

export const LogoutLink = styled.p`
  width: 25%;
  cursor: pointer;
  text-align: center;

  &:hover {
    translate: scale(1.05);
    color: ${colors.iiPurple};
  }

  transition: all 100ms;
`;
