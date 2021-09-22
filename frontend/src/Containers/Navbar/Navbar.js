import React from "react";
import LogoImg from "./1eum_logo.png";

import {
  NavContainer,
  LogoContainer,
  Logo,
  SearchBarContainer,
  SearchBar,
  SearchButton,
  NavLinkContainer,
  NavLink,
  RightNavLinksWrapper,
  GreetMessage,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <LogoContainer>
          <Logo src={LogoImg} onClick={() => {}} />
        </LogoContainer>

        <SearchBarContainer>
          <SearchBar placeholder="검색하기" />
          <SearchButton>
            <i className="fas fa-search"></i>
          </SearchButton>
        </SearchBarContainer>
        <NavLinkContainer>
          <NavLink to="/">사용 안내</NavLink>
          <GreetMessage>어서오세요 :)</GreetMessage>
          <RightNavLinksWrapper>
            <NavLink to="/">내 페이지</NavLink>
            <NavLink to="/">로그아웃</NavLink>
            <NavLink to="/">피드백 남기기</NavLink>
          </RightNavLinksWrapper>
        </NavLinkContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
