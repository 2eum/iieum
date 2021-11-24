import { Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import * as colors from "./Colors";

const GlobalStyle = createGlobalStyle`

// import web font

//noto serif kr
// font-family: 'Noto Serif KR'
// font-weight로 조절
/* @import url('https://cdn.rawgit.com/kattergil/NotoSerifKR-Web/76eb9ebf/stylesheet/NotoSerif-Web.css'); */


// defaults
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: 'Noto Serif KR';
  font-weight: 400;
  color: ${colors.iiBrown};
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
  }
  &::-webkit-scrollbar-thumb:hover{
    background: rgba(0,0,0,0.4);
  }
  &::-webkit-scrollbar-thumb:active{
    background: rgba(0,0,0,.9);
  }

  wordbreak: keep-all;
}

.fa {
  color: ${colors.iiPurple};
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;

  &:hover {
    color: ${colors.iiPurple};
  }
}

h1, h2, h3 {
  font-weight: 500;
}

* {
  wordbreak: keep-all;
}

`;

export const CardShadow = "8px 8px 8px 1px rgba(0, 0, 0, .15)";

export const ButtonShadow = "2px 2px 4px 0 rgba(0, 0, 0, .25)";

export const BoldSpan = styled.span`
  color: ${colors.iiPurple};
`;

export const DefaultButton = styled(Link)`
  padding: 0.5rem 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.iiPurple};
  box-shadow: ${ButtonShadow};
  font-size: 1rem;
  font-weight: 300;
  color: ${colors.iiBeige};
  cursor: pointer;
`;

export const MainContentContainer = styled.div`
  width: 100%;
  margin: 4%;
  text-align: center;
`;

// text slide animation
export const slide = keyframes`
    0% {
      left: 100%;
    }
    100% {
      left: -200%;
    }
`;

//Buttons
export const ButtonWrapper = styled.div`
  width: 135px;
  height: 45px;
`;

export const ButtonIconArea = styled.div``;

export const ButtonIcon = styled.i`
  color: ${colors.iiBeige};
  margin-right: 8px;
`;

export const ButtonName = styled.p``;

export const OpenListButtonWrapper = styled.div`
  margin: 2%;
  margin-top: 20%;
`;

export const OpenListButtonIcon = styled.i`
  color: ${colors.iiPurple};
  margin-right: 8px;
`;

export const IndicatorDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(p) =>
    p.selected ? colors.iiPurple : colors.iiPurpleOpacity};
  border-radius: 100%;
  content: "";
  cursor: pointer;
`;

//Page layout
export const Background = styled.div`
  background-color: ${colors.iiBG};
  padding: 8% 5%;

  @media screen and (min-width: 1920px) {
    padding: 8% 20%;
  }
`;
export const PageSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin: 10% auto;
`;

export const PageTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PageTitle = styled.h3`
  font-size: 2rem;
`;

export default GlobalStyle;
