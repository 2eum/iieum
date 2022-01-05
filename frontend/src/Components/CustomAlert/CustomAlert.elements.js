import styled from 'styled-components';
import * as colors from '../../styles/Colors';
import { CustomButton } from '../../styles/globalStyles';

export const ModalContainer = styled.div`
  display: ${(p) => (p.alertOpen ? 'flex' : 'hidden')};
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  top: ${(p) => p.scroll}px;
  background-color: ${`${colors.iiBG}99`};
  justify-content: center;
  align-items: center;
`;

export const AlertContainer = styled.div`
  width: 25rem;
  height: fit-content;
  padding: 2rem;
  background-color: ${colors.nearWhite};
  border: solid 1px ${colors.cardStroke};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 1279px) {
    width: 20rem;
  }
`;

export const AlertMessage = styled.p`
  max-height: 70vh;
  overflow-y: auto;
`;

export const AlertCloseButton = styled(CustomButton)``;
