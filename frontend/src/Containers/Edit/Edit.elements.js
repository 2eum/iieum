import styled from "styled-components";

import { black } from "../../Colors";

export const MainContentContainer = styled.div`
  width: 65%;
  margin: 10vh auto;
`;

export const PageHeader = styled.h2`
  color: ${black};
`;

export const Line = styled.hr`
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #dedbd8;
  background-color: #dedbd8;
  width: 20%;
`;
