import React, {useState, useEffect} from "react";
import * as S from "./MusicCardOpened.elements";
import {PostCardL, MusicCard} from "..";
import * as g from "../../globalStyles";
import axios from "axios";

const MusicCardOpened = ({currUser, token, userId, cardIndex, title, artist, source, link, cover}) => {
  const gridNum = cardIndex % 3;
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/postlist-music/${title}/${artist}/0`,
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
  }, [title]);

  const OpenedPostList = content 
    ? content.map((c) => {
      console.log(c);
      return (
        <>
          <PostCardL
          currUser={currUser}
          token={token}
          userId={userId}
          postId={c.id}
          />
        </>
      )
    }) : [];

  return (
    <>
      <S.OpenedContainer>
        <S.MusicContainer>
          <MusicCard
            title={title}
            artist={artist}
            source={source}
            link={link}
            cover={cover}
          />
        </S.MusicContainer>
        <S.PostCardGrid>
          {OpenedPostList}
        </S.PostCardGrid>
      </S.OpenedContainer>
    </>
  )


}

export default MusicCardOpened;