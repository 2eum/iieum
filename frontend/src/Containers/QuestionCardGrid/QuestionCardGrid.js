import React, { useState, useEffect } from "react";
import * as S from "./QuestionCardGrid.elements";
import { QuestionOpened, QuestionCard } from "../../Components";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

const QuestionCardGrid = ({
  currUser,
  token,
  userId,
  list,
  width,
  isExplore,
}) => {
  const [content, setContent] = useState();
  const [openCard, setOpenCard] = useState(-1);
  const [isOpened, setIsOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    setContent();
    if (list && list.length) {
      setContent(list);
    }
  }, [list]);

  const getNextQuestionPage = () => {
    if (!isExplore) {
      setIsLastPage(true);
    }
    if (!list) {
      axios({
        method: "get",
        url: `api/question-page/?page=${currentPage}`,
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
          const current = content ? [...content] : [];
          setContent([...current, ...data.results]);
          return data;
        })
        .then((data) => {
          if (!data.next) {
            setIsLastPage(true);
          }
          setCurrentPage(currentPage + 1);
        });
    }
  };

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
          <S.QuestionCardWrapper key={i}>
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
              width={width}
            />
          </S.QuestionCardWrapper>
        );
      })
    : [];

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={getNextQuestionPage}
      hasMore={!isLastPage}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
      threshold={30}
    >
      <S.QuestionGridContainer>{QuestionCardList}</S.QuestionGridContainer>
    </InfiniteScroll>
  );
};

export default QuestionCardGrid;
