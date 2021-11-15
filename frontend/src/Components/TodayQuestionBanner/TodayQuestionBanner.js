import React, {useState} from "react";
import * as S from "./TodayQuestionBanner.elements";
import * as g from "../../globalStyles";

const TodayQuestionBanner = ({}) => {
  const [cardSOpened, setCardSOpened] = useState(false);

  return (
    <>
      <S.LeftContainer>
        cardSOpened ?
        {/* <com.PostCardL/> */}
        : <p>질문을 클릭해보세요</p>
      </S.LeftContainer>

      <S.RightContainer>
        <S.QuestionArea>
          <S.ShuffleButton className="fa fa-shuffle"/>
          <S.TodayQuestion>
            <S.QDate>오늘의 질문</S.QDate>
            <S.Question>{question}</S.Question>
          </S.TodayQuestion>
        </S.QuestionArea>
        <S.PostCardSArea>
          {/* <S.PostCardSWrapper>
            <S.LoadMoreButtonContainer>
              <h3>&lt;</h3>
            </S.LoadMoreButtonContainer>
            <com.PostCardS /><com.PostCardS/>
            <S.LoadMoreButtonContainer>
              <h3>&gt;</h3>
            </S.LoadMoreButtonContainer>
          </S.PostCardSWrapper> */}
          <S.IndicatorWrapper>
            <p>Indicator</p>
          </S.IndicatorWrapper>
        </S.PostCardSArea>
      </S.RightContainer>
  </>

  )
}

export default TodayQuestionBanner;