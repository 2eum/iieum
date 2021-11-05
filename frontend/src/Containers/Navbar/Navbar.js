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
  LogoutLink,
} from "./Navbar.elements";

const Navbar = ({ currUser, handleLogout }) => {
  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <Logo src={LogoImg} onClick={() => {}} />
        </LogoContainer>

        <SearchBarContainer>
          <SearchBar placeholder="검색하기" />
          <SearchButton>
            <i className="fas fa-search"></i>
          </SearchButton>
        </SearchBarContainer>
        <NavLinkContainer>
          <GreetMessage>
            어서오세요 {currUser ? `${currUser}님` : ""} :)
          </GreetMessage>
          <RightNavLinksWrapper>
            <NavLink to="/">둘러보기</NavLink>
            {currUser ? (
              <>
                <NavLink to="/mypage">내 페이지</NavLink>
                <LogoutLink onClick={() => handleLogout()}>로그아웃</LogoutLink>
              </>
            ) : (
              <>
                <NavLink to="/login">로그인</NavLink>
                <NavLink to="/register">회원가입</NavLink>
              </>
            )}
          </RightNavLinksWrapper>
        </NavLinkContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
