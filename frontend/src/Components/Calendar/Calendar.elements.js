import styled from "styled-components";
import * as colors from "../../styles/Colors";
import { IndicatorDot } from "../../styles/globalStyles";

export const CalendarSection = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 55rem;
`;

export const CardContainer = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;
`;

export const CardFlexSlider = styled.div`
  display: flex;
  gap: 5rem;
  transform: translateX(-${(p) => p.index * 39}rem);

  transition: transform 1s ease-in-out;
`;

export const CardWrapper = styled.div`
  margin: auto;
`;

export const CardSwitchButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const CardSwitchButton = styled.div`
  cursor: pointer;
`;

export const CardIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CardIndicator = styled(IndicatorDot)``;

export const CalendarContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 2%;
  height: fit-content;

  box-sizing: border-box;

  background-color: ${colors.iiBeige};
  border: 1px solid ${colors.cardStroke};
  border-radius: 5px;
`;

export const Month = styled.p`
  margin: 0;

  text-align: center;
  font-size: 1.5rem;
  font-family: "Noto Serif KR", serif;
  font-weight: 500;
  color: ${colors.iiPurple};
`;

export const MonthChangeArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MonthChangeButton = styled.button`
  margin: 0 5%;

  border: none;
  background-color: #00000000;

  cursor: pointer;

  &:hover {
    color: #cccccc;
  }
`;

export const WeekDaysArea = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  text-align: center;

  p {
    padding: 0.5rem 0;
  }

  p:first-child {
    color: #ff8d8d;
  }

  p:last-child {
    color: #56a4ff;
  }
`;

export const DatesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 7rem);
  background-color: ${colors.iiSunset};
  border: 1px solid ${colors.cardStroke};
`;

export const DateItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10%;

  opacity: ${(props) => (props.curr === "curr" ? 1 : 0.7)};

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const DateNum = styled.p`
  width: 100%;
  margin-bottom: 5%;
  color: ${(props) =>
    props.day === 0 ? "#FF8D8D" : props.day === 6 ? "#56A4FF" : colors.iiBrown};
  text-align: center;
`;

export const DateImgWrapper = styled.div`
  cursor: pointer;
`;

export const DateImg = styled.img`
  width: 100%;
  align-self: center;
  justify-self: flex-end;
`;
