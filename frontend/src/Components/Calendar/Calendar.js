import React, { useState, useEffect } from "react";
import axios from "axios";

import blank from "./blank.png";

import {
  CalendarArea,
  MonthArea,
  WeekDaysArea,
  DatesArea,
  DateImgWrapper,
  DateItem,
  DateNum,
  DateImg,
  MonthChangeArea,
  MonthChangeButton,
} from "./Calendar.elements";

const Calendar = ({ token }) => {
  const [viewMonth, setMonth] = useState({ year: 2021, month: 8 });

  // api content state
  const [content, setContent] = useState({});

  const [placeholder, setPlaceholder] = useState("Loading Content");

  useEffect(() => {
    // get all music diary data
    axios({
      method: "get",
      url: "/api/mypage/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        // error handling
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
        }
        return response.data;
      })
      .then((data) => {
        // set up data for state
        const obj = {};
        data.forEach((d) => {
          const keyDate = new Date(d.pub_date);
          const key = `${keyDate.getMonth() + 1}-${keyDate.getDate()}`;
          obj[key] = d;
        });
        return obj;
      })
      .then((data) => setContent(data)); // add data to state
  }, []);

  // array for all dates in calendar
  const viewDates = [];

  // get first and last week day of month
  const firstDate = new Date(viewMonth.year, viewMonth.month, 1);
  const beginDay = firstDate.getDay();

  const lastDate = new Date(viewMonth.year, viewMonth.month + 1, 0);
  const endDay = lastDate.getDay();

  // prev month fill in
  for (let i = -1 * beginDay + 1; i <= 0; i++) {
    let prevDate = new Date(viewMonth.year, viewMonth.month, i);
    viewDates.push(prevDate);
  }

  // current month dates
  for (let i = 1; i <= lastDate.getDate(); i++) {
    let currDate = new Date(viewMonth.year, viewMonth.month, i);
    viewDates.push(currDate);
  }

  // next month dates fill in
  for (let i = 1; endDay + i <= 6; i++) {
    let nextDate = new Date(
      viewMonth.year,
      viewMonth.month,
      lastDate.getDate() + i
    );
    viewDates.push(nextDate);
  }

  // create date items
  let items = viewDates.map((d) => {
    let date = `${d.getMonth() + 1}-${d.getDate()}`;
    return (
      <DateItem
        key={date}
        curr={d.getMonth() === viewMonth.month ? "curr" : ""}
      >
        <DateNum day={d.getDay() === 0 ? "sun" : d.getDay() === 6 ? "sat" : ""}>
          {d.getDate()}
        </DateNum>
        {date in content ? (
          <DateImgWrapper to={`/detail/${content[date].id}`}>
            <DateImg
              src="https://ww.namu.la/s/bded2b2e08e690ab4dafcf6931ca23742efa29aba60d55350816c3441e0d6208849b946c8d683aed2850de028019702746ab51626cc3d4a036d7c0d550c8d7c51fc5d800f17c264304e883c214107058"
              alt="pikachu"
            />
          </DateImgWrapper>
        ) : (
          <DateImg src={blank} alt="pikachu" />
        )}
      </DateItem>
    );
  });

  const toPrevMonth = () => {
    const dayOne = new Date(viewMonth.year, viewMonth.month - 1, 1);

    setMonth({ year: dayOne.getFullYear(), month: dayOne.getMonth() });
  };

  const toNextMonth = () => {
    const dayOne = new Date(viewMonth.year, viewMonth.month + 1, 1);

    setMonth({ year: dayOne.getFullYear(), month: dayOne.getMonth() });
  };

  return (
    <CalendarArea>
      <MonthArea>{`${viewMonth.year} . ${viewMonth.month + 1}`}</MonthArea>
      <MonthChangeArea>
        <MonthChangeButton onClick={() => toPrevMonth()}>
          지난 달 보기
        </MonthChangeButton>
        <MonthChangeButton onClick={() => toNextMonth()}>
          다음 달 보기
        </MonthChangeButton>
      </MonthChangeArea>
      <WeekDaysArea>
        <p>일</p>
        <p>월</p>
        <p>화</p>
        <p>수</p>
        <p>목</p>
        <p>금</p>
        <p>토</p>
      </WeekDaysArea>
      <DatesArea rows={viewDates.length / 7}>{items}</DatesArea>
    </CalendarArea>
  );
};

export default Calendar;
