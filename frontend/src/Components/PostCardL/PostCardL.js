import React from "react";
import { 
  PostCardArea, 
  PostTop, 
  MusicArea,
  ContentArea,
  PostBottom, 
  LikeArea,
  LikeBtn,
  LikeCount,
  ContentTitle,
  PubDate,
  ContentBody,
  EditBtn,
  DeleteBtn,
  Signature
} from "./PostCardL.elements";

const PostCardL = () => {
  return (
    <>
      <PostCardArea>
        <PostTop>
          <LikeArea>
            <LikeBtn />
            <LikeCount>15</LikeCount>
          </LikeArea>
        </PostTop>
        <MusicArea>Music</MusicArea>
        <ContentArea>
          <PubDate>2021년 11월 7일</PubDate>
          <ContentTitle>비에 흠뻑 젖은 날</ContentTitle>
          <ContentBody>올해는 유난히 장마가 긴 것 같다. 오늘은 엄청 바쁘고 동선도 복잡한 날이었는데, 
            하필 깜빡하고 우산을 안 챙겨나왔다. 
            학원에 가야 하는데 비를 피했다가 가기에는 시간이 애매해서 별 수 없이 홀딱 젖으며 역까지 뛰었다. 
            정신없는데 비까지 맞으니까 왠지 처량해서 눈물이 날 뻔했다. 
            비 오는 날이면 꼭 우산 챙기라고 메시지를 보내주던 그 애가 생각났다. 
            등굣길에 저멀리 그 애의 우산이 보이면 내 우산을 접고 그 속으로 뛰어들고는 했다. 
            가끔은 문득 그 순간이 그리워진다.</ContentBody>
        </ContentArea>
        <PostBottom>
          <EditBtn>edit</EditBtn>
          <DeleteBtn>delete</DeleteBtn>
          <Signature>효진</Signature>
        </PostBottom>
      </PostCardArea>
    </>
  );
};

export default PostCardL;
