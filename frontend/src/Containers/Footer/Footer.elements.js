import styled from 'styled-components';
import * as colors from '../../styles/Colors';

export const FooterContainer = styled.section`
  padding: 5rem 2rem;

  border-top: 0.5px solid ${colors.iiBrown};
  opacity: 0.7;

  background-color: ${colors.iiBG};

  text-align: center;
  font-size: 0.9rem;

  @media screen and (max-width: 1279px) {
    width: 375px;
    margin: auto;
  }
`;

export const CopyRight = styled.p`
  margin: 1rem 0;
`;
