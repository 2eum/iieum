import React, { useState } from "react";

import blank from "./blank.png";

import {
  CalendarArea,
  MonthArea,
  WeekDaysArea,
  DatesArea,
  DateItem,
  DateNum,
  DateImg,
  MonthChangeArea,
  MonthChangeButton,
} from "./Calendar.elements";

const sampleData = {
  "9-26": {
    url: "http://127.0.0.1:8000/api/musicdiary/1/",
    id: 1,
    title: "피 피카츄~",
    user: "wook",
    content: "피까피까!",
    pub_date: "2021-09-26T00:48:36.113238+09:00",
    img_link:
      "https://ww.namu.la/s/bded2b2e08e690ab4dafcf6931ca23742efa29aba60d55350816c3441e0d6208849b946c8d683aed2850de028019702746ab51626cc3d4a036d7c0d550c8d7c51fc5d800f17c264304e883c214107058",
    question: {
      url: "http://127.0.0.1:8000/api/question/1/",
      id: 1,
      question_content: "오늘의 포켓몬은 뭘까아아아요?",
    },
  },
  "9-29": {
    url: "http://127.0.0.1:8000/api/musicdiary/2/",
    id: 2,
    title: "라 라이츄~",
    user: "wook",
    content: "피까피까!",
    pub_date: "2021-09-29T00:48:36.113238+09:00",
    img_link:
      "https://ww.namu.la/s/bded2b2e08e690ab4dafcf6931ca23742efa29aba60d55350816c3441e0d6208849b946c8d683aed2850de028019702746ab51626cc3d4a036d7c0d550c8d7c51fc5d800f17c264304e883c214107058",
    question: {
      url: "http://127.0.0.1:8000/api/question/1/",
      id: 1,
      question_content: "오늘의 포켓몬은 뭘까아아아요?",
    },
  },
};

const Calendar = () => {
  const [viewMonth, setMonth] = useState({ year: 2021, month: 8 });

  const viewDates = [];

  const firstDate = new Date(viewMonth.year, viewMonth.month, 1);
  const beginDay = firstDate.getDay();

  const lastDate = new Date(viewMonth.year, viewMonth.month + 1, 0);
  const endDay = lastDate.getDay();

  for (let i = -1 * beginDay + 1; i <= 0; i++) {
    let prevDate = new Date(viewMonth.year, viewMonth.month, i);
    viewDates.push(prevDate);
  }

  for (let i = 1; i <= lastDate.getDate(); i++) {
    let currDate = new Date(viewMonth.year, viewMonth.month, i);
    viewDates.push(currDate);
  }

  for (let i = 1; endDay + i <= 6; i++) {
    let nextDate = new Date(
      viewMonth.year,
      viewMonth.month,
      lastDate.getDate() + i
    );
    viewDates.push(nextDate);
  }

  const dates = viewDates.map((d) => {
    let date = `${d.getMonth() + 1}-${d.getDate()}`;
    return (
      <DateItem
        key={date}
        curr={d.getMonth() === viewMonth.month ? "curr" : ""}
      >
        <DateNum day={d.getDay() === 0 ? "sun" : d.getDay() === 6 ? "sat" : ""}>
          {d.getDate()}
        </DateNum>
        {sampleData[date] ? (
          <DateImg src={sampleData[date].img_link} alt="pikachu" />
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
      <DatesArea rows={viewDates.length / 7}>{dates}</DatesArea>
    </CalendarArea>
  );
};

export default Calendar;
