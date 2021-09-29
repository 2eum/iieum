import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { nearWhite, pink } from "./Colors";

const GlobalStyle = createGlobalStyle`

// import web font
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

  font-family: Pretendard-Regular, Arial, Helvetica, sans-serif;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #000000;

  &:hover {
    color: ${pink}
  }
}
`;

export const BannerContainer = styled.section`
  padding: 3rem;
  text-align: center;
`;

export const BoldSpan = styled.span`
  color: ${pink};
`;

export const DefaultButton = styled(Link)`
  padding: 0.5rem 1.5rem;

  border: none;
  border-radius: 5px;

  background-color: ${pink};

  font-size: 1.3rem;
  font-weight: 600;
  color: ${nearWhite};

  cursor: pointer;
`;

export const MainContentContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export default GlobalStyle;
