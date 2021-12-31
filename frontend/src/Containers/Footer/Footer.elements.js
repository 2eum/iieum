import styled from 'styled-components';
import * as colors from '../../styles/Colors';

export const FooterContainer = styled.section`
  padding: 5rem 2rem;

  border-top: 0.5px solid ${colors.iiBrown};
  opacity: 0.7;

  background-color: ${colors.iiBG};

  text-align: center;
  font-size: 0.9rem;
`;

export const CopyRight = styled.p`
  margin: 1rem 0;
`;
