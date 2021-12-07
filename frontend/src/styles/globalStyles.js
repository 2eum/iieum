import styled, { createGlobalStyle, keyframes } from "styled-components";
import * as colors from "./Colors";

const GlobalStyle = createGlobalStyle`

// import signature font
@font-face {
    font-family: 'Daughter_handwriting';
    src: url('./Daughter_handwriting.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

// defaults
* {
  // layout preset
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  // default font
  font-family: 'Noto Serif KR';
  font-weight: 400;
  color: ${colors.iiBrown};
  
  // default scroll bar
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

  word-break: keep-all;
}

body {
  background-color: ${colors.iiBG};
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
`;

// default shadows
export const CardShadow = "8px 8px 8px 1px rgba(0, 0, 0, .15)";
export const ButtonShadow = "2px 2px 4px 0 rgba(0, 0, 0, .25)";

// text slide animation
export const slide = keyframes`
    0% {
      left: 100%;
    }
    100% {
      left: -200%;
    }
`;

// indicator
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
export const BodyContainer = styled.div`
  background-color: ${colors.iiBG};
  padding: 8% 5%;

  @media screen and (min-width: 1920px) {
    padding: 8% 20%;
  }
`;

export default GlobalStyle;
