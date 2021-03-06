import React, { useState } from 'react';
import LogoImg from './iieum_logo.png';
import * as S from './Navbar.elements';

const Navbar = ({ currUser, handleLogout, handleAlert }) => {
  const [keyword, setKeyword] = useState('');

  const searchUrl = `/search?q=${keyword}`;

  return (
    <>
      <S.NavContainer>
        <S.LogoContainer to="/">
          <S.Logo src={LogoImg} />
        </S.LogoContainer>

        <S.SearchBarContainer>
          <S.SearchBar
            placeholder="찾고 싶은 이야기나 음악이 있나요?"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          {keyword.length > 0 ? (
            <S.SearchButton to={searchUrl}>
              <i className="fas fa-search"></i>
            </S.SearchButton>
          ) : (
            <S.SearchButtonDisabled
              onClick={() => handleAlert('검색어를 입력해주세요!')}
            >
              <i className="fas fa-search"></i>
            </S.SearchButtonDisabled>
          )}
        </S.SearchBarContainer>
        <S.NavLinkContainer>
          <S.GreetMessage>
            어서오세요 {currUser ? `${currUser}님` : ''} :)
            {currUser ? '' : ' 글을 작성하려면 로그인해주세요.'}
          </S.GreetMessage>
          <S.RightNavLinksWrapper>
            <S.NavLink to="/explore">질문 둘러보기</S.NavLink>
            {currUser ? (
              <>
                <S.NavLink to="/mypage">내 페이지</S.NavLink>
                <S.LogoutLink onClick={() => handleLogout()}>
                  로그아웃
                </S.LogoutLink>
              </>
            ) : (
              <>
                <S.NavLink to="/login">로그인</S.NavLink>
                <S.NavLink to="/sign-up">회원가입</S.NavLink>
              </>
            )}
          </S.RightNavLinksWrapper>
        </S.NavLinkContainer>
      </S.NavContainer>
    </>
  );
};

export default Navbar;
