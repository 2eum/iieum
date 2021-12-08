import React, { useState, useEffect } from "react";
import * as S from "./QuestionCardGrid.elements";
import { QuestionOpened, QuestionCard } from "../../Components";
import axios from "axios";

const QuestionCardGrid = ({ currUser, token, userId, list }) => {
  const [content, setContent] = useState();
  const [openCard, setOpenCard] = useState(-1);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setContent();
    if (list && list.length) {
      setContent(list);
    }
  }, [list]);

  useEffect(() => {
    if (!list) {
      axios({
        method: "get",
        url: `/api/question`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status > 400) {
            setPlaceholder("Something went wrong!");
          }
          return response.data;
        })
        .then((data) => {
          setContent(data);
        });
    }
  }, []);

  const handleClick = (clickedCard) => {
    if (clickedCard === openCard) {
      setOpenCard(-1);
      setIsOpened(false);
    } else {
      //다른 카드 클릭
      setOpenCard(clickedCard);
      setIsOpened(true);
    }
  };

  const QuestionCardList = content
    ? content.map((c, i) => {
        return (
          <S.QuestionCardWrapper 
            key={i}
          >
            <QuestionCard
              question={c.question_content}
              date={c.released_date}
              cardIndex={i}
              handleClick={handleClick}
              open={isOpened && openCard === i}
            />
            <QuestionOpened
              currUser={currUser}
              token={token}
              userId={userId}
              questionId={c.id}
              question={c.question_content}
              detail={c.explain}
              cardIndex={i}
              open={isOpened && openCard === i}
            />
          </S.QuestionCardWrapper>
        );
      })
    : [];

  return <S.QuestionGridContainer>{QuestionCardList}</S.QuestionGridContainer>;
};

export default QuestionCardGrid;
