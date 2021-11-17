import styled from "styled-components";
import { Link } from "react-router-dom";
import * as c from "../../Colors";


export const CreateCardWrapper = styled.div`
  margin: 0 20%;

`;

export const ReselectButtonWrapper = styled.div`
  width: 30%;
  margin: 2% auto;
`;

export const ReselectButton = styled(Link)`
  text-decoration: underline;
  margin-top: 1rem;
  cursor: pointer;
`;