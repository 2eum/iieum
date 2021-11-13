import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import * as colors from "./Colors";

const GlobalStyle = createGlobalStyle`

// import web font

  //noto serif kr
  // font-family: 'Noto Serif KR'
  // font-weight로 조절
@import url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Web/76eb9ebf/stylesheet/NotoSerif-Web.css);



@font-face {
  font-family: "Pretendard-Thin";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff")
    format("woff");
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard-ExtraLight";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff")
    format("woff");
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard-Light";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff")
    format("woff");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard-Medium";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff")
    format("woff");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard-SemiBold";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff")
    format("woff");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard-Bold";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
    format("woff");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard-ExtraBold";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff")
    format("woff");
  font-weight: 800;
  font-style: normal;
}

// defaults
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: Noto Serif KR;
  font-weight: 400;
  color: ${colors.iiBrown};
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

`;

export const CardShadow = "8px 8px 8px 1px rgba(0, 0, 0, .15)";

export const ButtonShadow = "2px 2px 4px 0 rgba(0, 0, 0, .25)";

export const BannerContainer = styled.section`
  padding: 3rem;
  text-align: center;
`;

export const BoldSpan = styled.span`
  color: ${colors.iiPurple};
`;

export const DefaultButton = styled(Link)`
  padding: 0.5rem 1.2rem;
  display: flex;
  justify-content: center;
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
  width: 80%;
  margin: auto;
`;



export default GlobalStyle;
