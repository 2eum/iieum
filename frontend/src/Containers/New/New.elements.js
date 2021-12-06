import styled from "styled-components";
import { Link } from "react-router-dom";

export const CreateCardWrapper = styled.div`
  margin: 0 20%;
`;

export const ReselectButtonWrapper = styled.div`
  width: 30%;
  margin: 3% auto;
`;

export const ReselectButton = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.7;
`;
