import React, {useState, useEffect} from "react";
import * as S from "./QuestionCardGrid.elements";
import { QuestionOpened, QuestionCard } from "..";
import axios from "axios";

const QuestionCardGrid= ({currUser, token, userId}) => {
  const [content, setContent] = useState(null);
  const [openCard, setOpenCard] = useState();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
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
        console.log(data);
        setContent(data);
      });
  }, []);


  const handleClick = (cardIndex) => {
    console.log(cardIndex);
    setOpenCard(cardIndex);
    if (isOpened === false){
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  }

  const QuestionCardList = content ? content.map((c, i) => {
    return(
      <S.QuestionCardWrapper>
        <QuestionCard
          question = {c.question_content}
          date = {c.released_date}
          cardIndex = {i}
          handleClick = {handleClick}
        />
        <QuestionOpened
          currUser = {currUser}
          token = {token}
          userId = {userId}
          question = {c.question_content}
          detail = {c.explain}
          cardIndex = {i}
          open = {isOpened && openCard === i}
        />
      </S.QuestionCardWrapper>
    );
  }) : [];
  
  return (
    <S.QuestionGridContainer>
      {QuestionCardList}
      
    </S.QuestionGridContainer>

  )
}

export default QuestionCardGrid;