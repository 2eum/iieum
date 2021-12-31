import React, { useState } from 'react';
import LogoImg from '../Navbar/iieum_logo.png';
import * as S from './MobileNavbar.elements';

const MobileNavbar = ({ currUser, handleLogout, handleAlert }) => {
  const [keyword, setKeyword] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const searchUrl = `/search?q=${keyword}`;

  return (
    <>
      <S.NavContainer>
        <S.NavTop>
          <S.SearchBarContainer>
            <p onClick={() => setSearchOpen(!searchOpen)}>검색</p>
            <S.SearchBar
              open={searchOpen}
              placeholder="찾고 싶은 이야기가 있나요?"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <S.SearchButton
              to={searchUrl}
              open={searchOpen}
              onClick={() => {
                setKeyword('');
                setSearchOpen(!searchOpen);
              }}
            >
              <i className="fas fa-search"></i>
            </S.SearchButton>
          </S.SearchBarContainer>
          <S.LogoContainer to="/">
            <S.Logo src={LogoImg} />
          </S.LogoContainer>
          {currUser ? (
            <S.LogoutLink onClick={() => handleLogout()}>로그아웃</S.LogoutLink>
          ) : (
            <S.CustomNavLink top={true} to="/login">
              로그인
            </S.CustomNavLink>
          )}
        </S.NavTop>

        <S.NavLinkContainer>
          <S.CustomNavLink exact to="/">
            홈
          </S.CustomNavLink>
          <S.CustomNavLink to="/explore">질문 둘러보기</S.CustomNavLink>
          {currUser ? (
            <S.CustomNavLink to="/mypage">내 페이지</S.CustomNavLink>
          ) : (
            <S.CustomNavLink to="/sign-up">회원가입</S.CustomNavLink>
          )}
        </S.NavLinkContainer>
      </S.NavContainer>
    </>
  );
};

export default MobileNavbar;
