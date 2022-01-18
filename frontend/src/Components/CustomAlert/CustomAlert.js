import React, { useEffect, useState } from "react";
import * as S from "./CustomAlert.elements";

const CustomAlert = ({ alertOpen, handleAlert, alertMessage, canCancel }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      if (canCancel) {
        handleAlert("cancel");
      } else {
        handleAlert();
      }
    }
  };
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setScroll(window.scrollY);
  }, []);

  return (
    <S.ModalContainer
      onClick={onMaskClick}
      scroll={scroll}
      alertOpen={alertOpen}
    >
      <S.AlertContainer>
        <S.AlertMessage>{alertMessage}</S.AlertMessage>
        <S.ButtonContainer>
          {canCancel && (
            <S.AlertCloseButton onClick={() => handleAlert("cancel")}>
              취소
            </S.AlertCloseButton>
          )}
          <S.AlertCloseButton
            onClick={() => handleAlert(canCancel && "confirm")}
          >
            확인
          </S.AlertCloseButton>
        </S.ButtonContainer>
      </S.AlertContainer>
    </S.ModalContainer>
  );
};

export default CustomAlert;
