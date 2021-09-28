import styled from "styled-components";

export const CalendarArea = styled.div`
  width: 70%;
  margin: auto;
  padding: 3%;

  box-sizing: border-box;

  background: linear-gradient(
    315deg,
    #ffdbdb 0%,
    rgba(255, 242, 242, 0.35) 100%
  );

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
export const MonthArea = styled.div`
  margin: 0;
  padding: 0 auto 1rem 0;

  text-align: center;
  font-size: 2rem;
  letter-spacing: 1rem;
`;

export const MonthChangeArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MonthChangeButton = styled.button`
  margin: 0 5%;

  border: none;
  border-bottom: 1px solid #000000;
  background-color: #00000000;

  cursor: pointer;

  &:hover {
    color: #cccccc;
    border-bottom: 1px solid #cccccc;
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
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;

export const DateItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.3rem 0.5rem;

  border: 1px solid #ff8c8c;

  opacity: ${(props) => (props.curr === "curr" ? 1 : 0.7)};
`;

export const DateNum = styled.p`
  width: 100%;
  margin-bottom: 5%;

  color: ${(props) =>
    props.day === "sun" ? "#FF8D8D" : props.day === "sat" ? "#56A4FF" : "#000"};
  text-align: center;
  font-size: 0.7rem;
`;

export const DateImg = styled.img`
  width: 100%;
  align-self: center;
  justify-self: flex-end;
`;
