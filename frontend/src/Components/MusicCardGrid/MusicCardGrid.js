import React, {useState, useEffect} from "react";
import * as S from "./MusicCardGrid.elements";
import { MusicCard, MusicCardOpened } from "..";
import axios from "axios";

const MusicCardGrid = ({currUser, token, userId}) => {
  const [content, setContent] = useState(null);
  const [openCard, setOpenCard] = useState(-1);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/recentmusic/0`,
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

    
    
    // const MusicCardList = content
    // ? content["music list"].map((c, i) => {
    //   console.log(content);
    //   return (
    //     <S.MusicCardWrapper>
    //       <MusicCard
    //         title={c.track_title}
    //         artist={c.track_artist}
    //         cover={c.track_album_cover}
    //         source={c.track_audio}
    //         link={c.spotify_link}
    //         cardIndex={i}
    //         handleClick={handleClick}
    //         open={isOpened && openCard === i}
    //         cols="1"
    //         postId="1"
    //       />
    //       <MusicCardOpened
    //         currUser={currUser}
    //         token={token}
    //         userId={userId}
    //         open={open}
    //         cardIndex={i}
    //         title={c.track_title}
    //         artist={c.track_artist}
    //         cover={c.track_album_cover}
    //         source={c.track_audio}
    //         link={c.spotify_link}
    //       />
    //     </S.MusicCardWrapper>
    //   );
    // })
    // : [];

    const MusicCardList = content
    ? content["music list"].map((c, i) => {
      console.log(content);
      return (
        <S.MusicCardWrapper>
          <MusicCard
            title={c[0]}
            artist={c[1]}
            cover={c[2]}
            source={c[3]}
            link={c[4]}
            cardIndex={i}
            handleClick={handleClick}
            open={isOpened && openCard === i}
            cols="1"
            postId="1"
          />
          <MusicCardOpened
            currUser={currUser}
            token={token}
            userId={userId}
            open={open}
            cardIndex={i}
            title={c[0]}
            artist={c[1]}
            cover={c[2]}
            source={c[3]}
            link={c[4]}
          />
        </S.MusicCardWrapper>
      );
    })
    : [];
  

  return (
    <S.MusicListContainer>
      {MusicCardList}
    </S.MusicListContainer>

  )
}

export default MusicCardGrid;