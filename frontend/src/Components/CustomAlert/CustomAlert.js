import React from 'react';
import * as S from './CustomAlert.elements';

const CustomAlert = ({ scroll, alertOpen, handleAlert, alertMessage }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      handleAlert();
    }
  };

  return (
    <S.ModalContainer
      onClick={onMaskClick}
      scroll={scroll}
      alertOpen={alertOpen}
    >
      <S.AlertContainer>
        <S.AlertMessage>{alertMessage}</S.AlertMessage>
        <S.AlertCloseButton onClick={handleAlert}>닫기</S.AlertCloseButton>
      </S.AlertContainer>
    </S.ModalContainer>
  );
};

export default CustomAlert;
