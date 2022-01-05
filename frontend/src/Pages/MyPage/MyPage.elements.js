import styled from 'styled-components';
import * as colors from '../../styles/Colors';
import { NavLink } from 'react-router-dom';

export const MyPageBanner = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 5%;
`;

export const InfoChangeLink = styled(NavLink)`
  &:hover {
    i {
      color: ${colors.iiPurple};
    }
  }

  @media screen and (max-width: 1279px) {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
`;

export const User = styled.span`
  color: ${colors.iiPurple};
`;

export const Message = styled.p`
  width: 60%;
  text-align: left;

  margin: auto 0;

  font-size: 2.5rem;
  line-height: 4.5rem;

  @media screen and (max-width: 1279px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`;

// Banner section
export const Date = styled.p`
  margin: 1rem 0;

  font-size: 1.3rem;
  font-weight: 300;

  color: ${colors.iiBrown};
  opacity: 80%;

  @media screen and (max-width: 1279px) {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
`;

export const StatsWrapper = styled.div`
  text-align: left;
`;

export const Stat = styled.p`
  margin: 1rem 0;

  font-size: 1.3rem;
  font-weight: 300;

  color: ${colors.iiBrown};
  opacity: 80%;

  @media screen and (max-width: 1279px) {
    font-size: 0.8rem;
    margin: 0.2rem 0;
  }
`;

export const PostListSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const OverviewSection = styled.section``;

export const ListSwitchContainer = styled.div`
  display: flex;
`;

export const ListSwitchWrapper = styled.div`
  margin: 0 5% 5% 0;
  text-align: right;
  display: flex;
`;

export const ListSwitch = styled.button`
  border: none;
  background-color: #00000000;

  cursor: pointer;

  font-size: 1.5rem;

  ${(p) =>
    p.isSelected
      ? `border-bottom: 1.5px solid ${colors.iiPurple};`
      : `border-bottom: none;`};

  &:hover {
    color: ${colors.iiPurple};
  }

  @media screen and (max-width: 1279px) {
    font-size: 1rem;
  }

  transition: all 100ms;
`;

export const LikeListSection = styled.section``;

export const MainContentContainer = styled.section`
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  text-align: left;
  margin: 1rem 0;
  font-size: 1.5rem;
`;
