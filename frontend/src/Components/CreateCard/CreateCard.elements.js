import styled from "styled-components";
import * as colors from "../../Colors";
import * as g from "../../globalStyles";

export const CreateCardArea = styled.section`
  width: 530px;
  height: 720px;
  padding: 50px;
  margin: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.nearWhite};
  box-shadow: ${g.CardShadow};
  border-radius: 8px;
  border: 1px solid #ABAAA6;
`;

export const TopArea = styled.section`
  text-align: right;
`;

export const Question = styled.p`
  opacity: 0.7;
`;

export const MusicSearchArea = styled.section`
  height: 20%;
  text-align: right;
`;

export const FormArea = styled.section`
  height: 60%;  
  display: flex;
  flex-direction: column;
`;

export const PubDate = styled.h5`
  margin: 2% 0;
`;

export const FormTitle = styled.input`
  background-color: ${colors.iiBeige};
  border: 0;
  font-size: 1.5rem;
`;

export const FormBody = styled.textarea`
  margin: 4% 0;
  width: 100%;
  height: 80%;
  border: 0;
  background-color: ${colors.iiBeige};
  font-size: 1rem;
`;

export const BottomArea = styled.section`
  text-align: right;
`;

export const Signature = styled.h3``;

