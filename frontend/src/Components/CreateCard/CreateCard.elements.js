import styled from "styled-components";
import * as colors from "../../styles/Colors";
import { CardShadow } from "../../styles/globalStyles";

export const CreateCardArea = styled.section`
  width: 34rem;
  height: 50rem;
  padding: 50px;
  margin: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.nearWhite};
  box-shadow: ${CardShadow};
  border-radius: 8px;
  border: 1px solid #abaaa6;
`;

export const TopArea = styled.section`
  text-align: right;
  height: 10%;
`;

export const Question = styled.p`
  opacity: 0.7;
`;

export const MusicSearchArea = styled.section`
  height: ${(p) => (p.isSearching ? "70%" : "20%")};
  display: flex;
  justify-content: ${(p) => (p.isSearching ? "center" : "flex-end")};
  align-items: flex-start;
  transition: all 1s;
  position: relative;
`;

export const MusicCardWrapper = styled.div`
  width: 60%;
`;

export const SearchBar = styled.div`
  border-bottom: 1px solid ${colors.iiBrown};
  width: 40%;
  display: flex;
  align-items: center;
  gap: 5%;
  padding: 0.5rem 0;
`;

export const SearchInput = styled.input`
  width: 80%;
  background-color: #ffffff00;
  border: none;
  position: relative;
  z-index: 1;
  &:focus {
    outline: none;
  }
`;

export const SearchResultContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  height: 23rem;
  overflow-y: scroll;
  box-shadow: ${g.CardShadow};
`;

export const FormArea = styled.section`
  height: ${(p) => (p.isSearching ? "30%" : "60%")};
  display: flex;
  flex-direction: column;
`;

export const PubDate = styled.p`
  color: ${colors.iiBrown};
  margin: 2% 0;
  text-align: left;
`;

export const FormTitle = styled.input`
  background-color: ${colors.iiBeige};
  border: 0;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`;

export const FormBody = styled.textarea`
  margin: 4% 0;
  width: 100%;
  height: 80%;
  border: 0;
  background-color: ${colors.iiBeige};
  font-size: 1rem;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const BottomArea = styled.section`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Signature = styled.h3`
  font-family: "Daughter_handwriting";
  font-size: 2.5rem;
`;

export const SubmitButton = styled.p`
  margin-top: 1rem;
  cursor: pointer;
  background-color: ${colors.iiPurple};
  border-radius: 5px;
  border: solid 1px ${colors.iiPurple};
  width: 8rem;
  padding: 0.5rem 1rem;
  color: ${colors.iiBeige};
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: ${g.ButtonShadow};

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

export const ResetChoiceButton = styled.p`
  text-decoration: underline;
  margin-top: 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  text-align: right;
`;

export const CompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const RedirectButton = styled.p`
  margin-top: 1rem;
  cursor: pointer;
  background-color: ${colors.iiPurple};
  border-radius: 5px;
  width: 5rem;
  padding: 0.5rem 1rem;
  color: ${colors.iiBeige};
  text-align: center;
  border: solid 1px ${colors.iiPurple};
  box-shadow: ${g.ButtonShadow};

  &:hover {
    color: ${colors.iiPurple};
    background-color: ${colors.iiBeige};

    i {
      color: ${colors.iiPurple};
    }
  }

  transition: all 100ms;
`;
