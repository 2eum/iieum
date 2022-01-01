import styled from 'styled-components';
import * as colors from '../../styles/Colors';
import {
  ButtonShadow,
  CardShadow,
  CustomButton,
} from '../../styles/globalStyles';

export const PostCardArea = styled.section`
  width: 34rem;
  height: 50rem;
  margin: auto;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${colors.iiBeige};
  box-shadow: ${CardShadow};
  border-radius: 8px;
  border: 1px solid #abaaa6;

  // if card is stacked, set z-index according to order
  z-index: ${(p) => p.order * -1};

  @media screen and (max-width: 1279px) {
    width: 20rem;
    height: 29rem;
    margin: auto;
  }
`;

export const HeaderArea = styled.section`
  height: max-content;
`;

export const CloseBtnArea = styled.section`
  text-align: right;
  margin: 2%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1279px) {
    margin: 0.5rem;
  }
`;

export const CloseBtn = styled.p`
  cursor: pointer;
`;

export const PostTop = styled.section`
  display: flex;
  justify-content: ${(p) => (p.editMode ? 'flex-end' : 'space-between')};
  align-items: center;
  margin: 2%;
`;

export const LikeArea = styled.div`
  width: 30%;
  display: flex;
  gap: 10%;
  align-items: center;
`;

export const LikeBtn = styled.div`
  cursor: pointer;
  font-size: 1.5rem;

  i {
    color: ${colors.iiPurple};
  }
`;

export const LikeCount = styled.div``;

export const Question = styled.p`
  text-align: right;
  color: ${colors.iiBrown};
  opacity: 0.5;
`;

export const MiddleArea = styled.section`
  height: ${(p) => (p.editMode ? '60%' : '70%')};
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MusicArea = styled.section`
  width: 20vw;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  @media screen and (max-width: 1279px) {
    width: 70%;
  }
`;

export const ContentArea = styled.section`
  text-align: left;
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;

  @media screen and (max-width: 1279px) {
    justify-content: flex-start;
  }
`;

export const ContentTitle = styled.h2`
  margin-bottom: 5%;
  word-wrap: break-word;
`;

export const PubDate = styled.p`
  color: ${colors.iiBrown};
  text-align: left;
`;

export const BodyWrapper = styled.div`
  overflow-y: scroll;
  height: 20vw;
  @media screen and (max-width: 1279px) {
    height: 60%;
  }
`;

export const ContentBody = styled.p`
  line-height: 1.8;
  font-weight: 400;
`;

export const PostBottom = styled.section`
  display: flex;
  ${(p) =>
    p.editMode
      ? 'flex-direction: column; align-items: flex-end; height: 20%;'
      : 'flex-direction: row-reverse; justify-content: space-between; align-items: center; height: 10%;'}
  margin: 2%;
`;

export const BtnArea = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 1279px) {
    width: 60%;
  }
`;

export const EditBtn = styled.div`
  margin: auto 5%;
  cursor: pointer;
  color: ${colors.iiPurple};

  i {
    color: ${colors.iiPurple};
  }

  &:hover {
    border-bottom: 1px solid ${colors.iiPurple};
  }

  @media screen and (max-width: 1279px) {
    font-size: 0.8rem;
  }
`;

export const DeleteBtn = styled.div`
  margin: auto 5%;
  cursor: pointer;
  color: ${colors.iiPurple};

  i {
    color: ${colors.iiPurple};
  }

  &:hover {
    border-bottom: 1px solid ${colors.iiPurple};
  }

  @media screen and (max-width: 1279px) {
    font-size: 0.8rem;
  }
`;

export const Signature = styled.h3`
  margin: 1%;
  justify-self: flex-end;
  font-family: 'Daughter_handwriting';
  font-size: 2.5rem;

  @media screen and (max-width: 1279px) {
    font-size: 2rem;
  }
`;

export const MusicSearchArea = styled.section`
  height: ${(p) => (p.isSearching ? '70%' : '20%')};
  display: flex;
  justify-content: ${(p) => (p.isSearching ? 'center' : 'flex-end')};
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
  box-shadow: ${CardShadow};
`;

export const FormArea = styled.section`
  height: ${(p) => (p.isSearching ? '30%' : '60%')};
  display: flex;
  flex-direction: column;
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

export const SubmitButton = styled(CustomButton)`
  margin-top: 1rem;

  @media screen and (max-width: 1279px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const ResetChoiceButton = styled.p`
  text-decoration: underline;
  margin-top: 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  text-align: right;
`;

export const EditMessage = styled.p`
  color: green;
  justify-self: flex-start;

  @media screen and (max-width: 1279px) {
    font-size: 0.8rem;
  }
`;

export const EditBtnsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const EditLeftWrapper = styled.div``;
