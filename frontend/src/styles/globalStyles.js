import styled, { createGlobalStyle, keyframes } from 'styled-components';
import * as colors from './Colors';
import daughterHandwriting from './Daughter_handwriting.woff';
import { HashLink as Link } from 'react-router-hash-link';

const GlobalStyle = createGlobalStyle`

// import signature font
@font-face {
    font-family: 'Daughter_handwriting';
    src: url(${daughterHandwriting}) format('woff');
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
  position: relative;
  overflow-y: ${(p) => (p.alertOpen ? 'hidden' : 'scroll')}
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
export const CardShadow = '8px 8px 8px 1px rgba(0, 0, 0, .15)';
export const ButtonShadow = '2px 2px 4px 0 rgba(0, 0, 0, .25)';

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
  content: '';
  cursor: pointer;
`;

// page layout
export const BodyContainer = styled.main`
  background-color: ${colors.iiBG};
  padding: 8% 5%;

  @media screen and (min-width: 1920px) {
    padding: 8% 20%;
  }
`;

export const CustomButton = styled.div`
  cursor: pointer;
  background-color: ${colors.iiPurple};
  border-radius: 5px;
  border: solid 1px ${colors.iiPurple};
  width: max-content;
  padding: 0.5rem 1rem;
  color: ${colors.iiBeige};
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${ButtonShadow};

  i {
    color: ${colors.iiBeige};
  }

  &:hover {
    color: ${colors.iiPurple};
    background-color: ${colors.iiBeige};

    i {
      color: ${colors.iiPurple};
    }
  }

  transition: all 100ms;
`;

export const CustomButtonInvert = styled(CustomButton)`
  background-color: ${colors.iiBeige};
  color: ${colors.iiPurple};
  i {
    color: ${colors.iiPurple};
  }

  &:hover {
    color: ${colors.iiBeige};
    background-color: ${colors.iiPurple};

    i {
      color: ${colors.iiBeige};
    }
  }
`;

export const CustomLink = styled(Link)`
  margin-top: 1rem;
  cursor: pointer;
  background-color: ${colors.iiPurple};
  border-radius: 5px;
  border: solid 1px ${colors.iiPurple};
  width: max-content;
  padding: 0.5rem 1rem;
  color: ${colors.iiBeige};
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${ButtonShadow};

  i {
    color: ${colors.iiBeige};
  }

  &:hover {
    color: ${colors.iiPurple};
    background-color: ${colors.iiBeige};

    i {
      color: ${colors.iiPurple};
    }
  }

  transition: all 100ms;
`;

export default GlobalStyle;
