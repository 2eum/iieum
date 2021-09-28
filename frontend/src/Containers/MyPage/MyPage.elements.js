import styled from "styled-components";
import { BannerContainer, DefaultButton } from "../../globalStyles";
import { gray, lightBrown } from "../../Colors";
import { Link } from "react-router-dom";

export const MyPageBanner = styled(BannerContainer)`
  background: linear-gradient(
    120deg,
    rgba(235, 178, 155, 0.5),
    rgba(255, 252, 248, 0.58)
  );

  margin-bottom: 5%;
`;

// Banner section
export const Date = styled.p`
  margin: 1rem 0;

  font-size: 1.3rem;
  font-weight: 300;

  color: ${gray};
  opacity: 80%;
`;

export const Message = styled.p`
  width: 60%;

  margin: 2rem auto;

  font-size: 3rem;

  color: ${lightBrown};
`;

export const CreateButton = styled(DefaultButton)`
  margin: 5% auto;
`;

export const MyPageTitle = styled.h1`
  margin: 10vh auto;

  text-align: center;
`;

export const ViewSwitchWrapper = styled.div`
  margin: 0 10% 5% 0;

  text-align: right;
`;

export const ViewSwitch = styled.button`
  padding: 0 2%;

  border: none;
  background-color: #00000000;

  cursor: pointer;

  &:first-child {
    border-right: 1px solid #000000;
  }

  &:hover {
    text-decoration: underline;
  }
`;
