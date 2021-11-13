import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./Calendar.elements";
import { PostCardL } from "..";

const Calendar = ({ currUser, token, userId }) => {
  const today = new Date();
  const [viewMonth, setMonth] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  // api content state
  const [content, setContent] = useState({});
  const [showPostId, setPostId] = useState([]);

  const prevMonthSearch = new Date(viewMonth.year, viewMonth.month - 1, 23);
  const nextMonthSearch = new Date(viewMonth.year, viewMonth.month + 1, 6);
  useEffect(() => {
    // get all music diary data
    axios({
      method: "get",
      url: `api/postlist-user-date/${userId}/${prevMonthSearch.getFullYear()}/${
        prevMonthSearch.getMonth() + 1
      }/23/${nextMonthSearch.getFullYear()}/${
        nextMonthSearch.getMonth() + 1
      }/6/0`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        // error handling
        if (response.status > 400) {
        }
        return response.data;
      })
      .then((data) => {
        // set up data for state
        const obj = {};

        for (let d of data) {
          const keyDate = new Date(d.pub_date);
          const key = `${keyDate.getMonth() + 1}-${keyDate.getDate()}`;
          if (obj[key]) {
            obj[key].push(d);
          } else {
            obj[key] = [];
            obj[key].push(d);
          }
        }

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

  const handleDatePick = (date) => {
    let ids = content[date].map((d) => d.id);
    setPostId(ids);
  };

  // create date items
  let items = viewDates.map((d) => {
    let date = `${d.getMonth() + 1}-${d.getDate()}`;
    if (date in content) {
      let latestItem = content[date][0];
      return (
        <S.DateItem
          key={date}
          curr={d.getMonth() === viewMonth.month ? "curr" : ""}
          onClick={() => handleDatePick(date)}
        >
          <S.DateNum
            day={d.getDay() === 0 ? "sun" : d.getDay() === 6 ? "sat" : ""}
          >
            {d.getDate()}
          </S.DateNum>
          <S.DateImgWrapper>
            <S.DateImg
              src={latestItem.track_album_cover}
              alt={`album cover image of ${latestItem.track_title}`}
            />
          </S.DateImgWrapper>
        </S.DateItem>
      );
    } else {
      return (
        <S.DateItem
          key={date}
          curr={d.getMonth() === viewMonth.month ? "curr" : ""}
        >
          <S.DateNum
            day={d.getDay() === 0 ? "sun" : d.getDay() === 6 ? "sat" : ""}
          >
            {d.getDate()}
          </S.DateNum>
          <S.DateImgWrapper></S.DateImgWrapper>
        </S.DateItem>
      );
    }
  });

  const toPrevMonth = () => {
    const dayOne = new Date(viewMonth.year, viewMonth.month - 1, 1);

    setMonth({ year: dayOne.getFullYear(), month: dayOne.getMonth() });
    setPostId([]);
  };

  const toNextMonth = () => {
    const dayOne = new Date(viewMonth.year, viewMonth.month + 1, 1);

    setMonth({ year: dayOne.getFullYear(), month: dayOne.getMonth() });
    setPostId([]);
  };

  const CardLs = showPostId.map((id, i) => {
    return (
      <PostCardL
        key={i}
        token={token}
        currUser={currUser}
        userId={userId}
        postId={id}
        order={i}
      />
    );
  });

  const handleCardSwitch = (d) => {
    let arr = showPostId;
    let move;
    if (d > 0) {
      move = arr.shift();
      arr.push(move);
    } else {
      move = arr.pop();
      arr.unshift(move);
    }
    setPostId([...arr]);
  };

  return (
    <S.CalendarSection>
      <S.CardContainer>
        <S.CardWrapper>{CardLs}</S.CardWrapper>
        {CardLs.length > 1 ? (
          <S.CardSwitchButtonWrapper>
            <S.CardSwitchButton onClick={() => handleCardSwitch(-1)}>
              <i className="fas fa-chevron-left" />
            </S.CardSwitchButton>
            <S.CardSwitchButton onClick={() => handleCardSwitch(1)}>
              <i className="fas fa-chevron-right" />
            </S.CardSwitchButton>
          </S.CardSwitchButtonWrapper>
        ) : (
          ""
        )}
      </S.CardContainer>
      <S.CalendarContainer>
        <S.MonthChangeArea>
          <S.MonthChangeButton onClick={() => toPrevMonth()}>
            <i className="fas fa-chevron-left" />
          </S.MonthChangeButton>
          <S.Month>{`${viewMonth.year}년 ${viewMonth.month + 1}월`}</S.Month>
          <S.MonthChangeButton>
            <i className="fas fa-chevron-right" onClick={() => toNextMonth()} />
          </S.MonthChangeButton>
        </S.MonthChangeArea>
        <S.WeekDaysArea>
          <p>일</p>
          <p>월</p>
          <p>화</p>
          <p>수</p>
          <p>목</p>
          <p>금</p>
          <p>토</p>
        </S.WeekDaysArea>
        <S.DatesArea rows={viewDates.length / 7}>{items}</S.DatesArea>
      </S.CalendarContainer>
    </S.CalendarSection>
  );
};

export default Calendar;
