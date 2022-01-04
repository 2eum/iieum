import React, { useEffect } from "react";
import * as S from "./EmailConfirmed.elements";
import { Login } from "..";

const EmailConfirmed = ({ currUser, saveUserData }) => {
  useEffect(() => {
    alert("이메일 인증이 완료되었습니다! 이음에 오신 것을 환영합니다!");
  }, []);
  return (
    <S.ConfirmationSection>
      <Login saveUserData={saveUserData} currUser={currUser} />
    </S.ConfirmationSection>
  );
};

export default EmailConfirmed;
