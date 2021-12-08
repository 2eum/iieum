import styled from "styled-components";
import { Link } from "react-router-dom";

export const CreateCardWrapper = styled.div`
  margin: 0 20%;
`;

export const Title = styled.h3`
  font-size: 2rem;
  text-align: center;
`;

export const ReselectButtonWrapper = styled.div`
  margin: 3% auto;
  text-align: center;
`;

export const ReselectButton = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.7;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin: 4%;
  text-align: center;
`;
