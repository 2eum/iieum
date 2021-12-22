import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as colors from '../../styles/Colors';

// Container
export const NavContainer = styled.nav`
  width: 100%;

  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 15;

  background-color: ${colors.iiBG};
`;

// Logo
export const LogoContainer = styled(Link)`
  width: 10%;
`;

export const Logo = styled.img`
  width: 65%;
  cursor: pointer;
`;

// Search Bar
export const SearchBarContainer = styled.section`
  width: 25%;

  padding: 0 1rem;

  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 13rem;
  height: 2rem;

  padding: 0.5rem;

  font-size: 0.7rem;

  border: none;

  border-bottom: solid 1px ${colors.cardStroke};

  background-color: ${colors.iiBG};
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled(Link)`
  width: 1rem;
  height: 2rem;

  padding: 0.5rem;
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

export const SearchButtonDisabled = styled.div`
  width: 1rem;
  height: 2rem;

  padding: 0.5rem;
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
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::nth-child(1) {
    justify-self: flex-start;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;

  &:hover {
    translate: scale(1.05);
    color: ${colors.iiPurple};
  }

  transition: all 100ms;
`;

export const LogoutLink = styled.p`
  cursor: pointer;

  &:hover {
    translate: scale(1.05);
    color: ${colors.iiPurple};
  }

  transition: all 100ms;
`;

export const RightNavLinksWrapper = styled.div`
  display: flex;
  & * {
    margin: 0 1rem;
    font-size: 0.9rem;
  }
`;

export const GreetMessage = styled.p`
  font-size: 1rem;
  color: ${colors.iiBrown};
  opacity: 0.7;
`;
