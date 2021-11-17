import styled from "styled-components";
import * as c from "../../Colors";

export const FooterContainer = styled.section`
  padding-top: 6rem;
  padding-bottom: 5rem;

  border-top: 0.5px solid ${c.iiBrown};
  opacity: 0.7;

  background-color: ${c.iiBG};

  text-align: center;
  font-size: 0.9rem;
`;

export const CopyRight = styled.p`
  margin: 1rem 0;
`;

export const GitHubLink = styled.a`
  margin: 1rem 0;
`;
