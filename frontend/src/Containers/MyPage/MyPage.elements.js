import styled from "styled-components";
import * as g from "../../globalStyles";
import * as colors from "../../Colors";
import { Link } from "react-router-dom";

export const MyPageBanner = styled(g.BannerContainer)`
  // background: linear-gradient(
  //   120deg,
  //   rgba(235, 178, 155, 0.5),
  //   rgba(255, 252, 248, 0.58)
  // );

  width: 100%;

  display: flex;
  justify-content: space-between;

  margin: 5% 0;
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

  // color: ${colors.iiBrown};
`;

// Banner section
export const Date = styled.p`
  margin: 1rem 0;

  font-size: 1.3rem;
  font-weight: 300;

  color: ${colors.iiBrown};
  opacity: 80%;

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
`;

// export const CreateButton = styled(g.DefaultButton)`
//   margin: 5% auto;
// `;

// export const MyPageTitle = styled.h1`
//   margin: 10vh auto;

//   text-align: center;
// `;

// export const MyPageContentContainer = styled.div`

// `;

export const PostListSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const OverviewSection = styled.section`
  
`;

export const ListSwitchContainer = styled.div`
  display: flex;
  // justify-content:
`;

export const ListSwitchWrapper = styled.div`
  margin: 0 5% 5% 0;
  text-align: right;
  display: flex;
`;

export const ListSwitch = styled.button`

  // margin: 0 2%;
  border: none;
  background-color: #00000000;

  cursor: pointer;

  font-size: 1.5rem;

  ${(p) => (p.isSelected ? 
    `border-bottom: 1.5px solid ${colors.iiPurple};`
    : `border-bottom: none;`
    )
  }
  ;

  &:hover {
    text-decoration: underline;
  }
`;

export const LikeListSection = styled.section`
  
`;