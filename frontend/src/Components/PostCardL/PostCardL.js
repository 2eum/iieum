import React, { useState, useEffect } from "react";
import * as S from "./PostCardL.elements";
import * as g from "../../globalStyles";
import { MusicCard, SearchedItem } from "..";
import axios from "axios";

const PostCardL = ({
  currUser,
  token,
  userId,
  handleCardClose,
  postId,
  order,
  cols,
}) => {
  const [content, setContent] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchReady, setSearchReady] = useState(false);
  const [submitted, setSubmit] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [mObject, setMObject] = useState({});

  // get content info from api
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/post/${postId}`,
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
        return data;
      })
      .then((data) => {
        checkLiked(data.liked_user);
        setLikeCount(data.liked_user.length);
        return data;
      });
  }, [postId, submitted]);

  // set date form
  const pubDateObj = new Date(content ? content.pub_date : "");
  let formattedDate = `${pubDateObj.getFullYear()}년
  ${pubDateObj.getMonth() + 1}월
  ${pubDateObj.getDate()}일`;

  // check if liked post
  const checkLiked = (likeList) => {
    const intId = userId * 1;
    if (likeList.includes(intId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  // like post request
  const postLike = (e) => {
    axios({
      method: "post",
      url: `/api/like/${postId}/`,
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
      .then((response) => {
        checkLiked(response.data.liked_user);
        setLikeCount(response.data.liked_user.length);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  // delete request
  const handleDelete = () => {
    console.log(1);
    axios({
      method: "delete",
      url: `/api/post/${postId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${token}`,
      },
    })
      .then((response) => {
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
        }
        return response.data;
      })
      .then(() => {
        handleCardClose();
      });
  };

  useEffect(() => {
    if (searchQuery !== "") {
      axios({
        method: "post",
        url: "api/spotify/",
        headers: {
          "Content-Type": "application/json",
          Authorization: `jwt ${token}`,
        },
        data: {
          search: searchQuery,
        },
      })
        .then((res) => {
          const results = res.data.Results.tracks.items;
          const arr = [];
          for (let m of results) {
            const info = {};
            info.img = m.album.images[0].url;
            info.url = m.external_urls.spotify;
            info.title = m.name;
            info.preview = m.preview_url;
            info.artist = m.artists.map((x) => x.name).join(", ");
            arr.push(info);
          }
          setSearchResult(arr);
        })
        .then(() => setSearchReady(true));
    }
  }, [searchQuery]);

  const updateSearchInput = (e) => {
    setSearchCount(searchCount + 1);
    let count = searchCount;
    setTimeout(() => {
      if (count === searchCount) {
        setSelected(false);
        setSearchQuery(e.target.value);
      }
    }, 1000);
  };

  const selectMusic = (i) => {
    let preview = searchResult[i].preview || "null";
    const musicInfo = {
      title: searchResult[i].title,
      artist: searchResult[i].artist,
      img: searchResult[i].img,
      url: searchResult[i].url,
      preview: preview,
    };
    setMObject(musicInfo);
    setSelected(true);
  };

  useEffect(() => {
    setSearching(false);
  }, [selected]);

  let musicResults = searchResult.map((s, i) => {
    return (
      <SearchedItem
        key={i}
        index={i}
        title={s.title}
        artist={s.artist}
        img={s.img}
        url={s.url}
        selectMusic={selectMusic}
      />
    );
  });

  const handleSubmit = (e) => {
    axios({
      method: "patch",
      url: `api/post/${postId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${token}`,
      },
      data: {
        title: title,
        content: body,
        track_title: mObject.title,
        track_artist: mObject.artist,
        track_album_cover: mObject.img,
        spotify_link: mObject.url,
        track_audio: mObject.preview,
        question: content.question.id,
      },
    }).then(() => setSubmit(true));
  };

  const resetMusicChoice = () => {
    setSelected(false);
    setSearching(true);
    setMObject({});
    setSearchReady(false);
  };

  useEffect(() => {
    if (content) {
      setTitle(content.title);
      setBody(content.content);
      const musicInfo = {
        title: content.track_title,
        artist: content.track_artist,
        img: content.track_album_cover,
        url: content.spotify_link,
        preview: content.track_audio,
      };
      setMObject(musicInfo);
      setSelected(true);
    }
  }, [editMode]);

  return (
    <>
      {/* load only if content is loaded */}
      {content && postId ? (
        <S.PostCardArea order={order}>
          {!editMode || submitted ? (
            <>
              <S.HeaderArea>
                <S.CloseBtnArea>
                  {/* render close button only on card list */}
                  {handleCardClose ? (
                    <S.CloseBtn onClick={handleCardClose}>닫기</S.CloseBtn>
                  ) : (
                    ""
                  )}
                </S.CloseBtnArea>
                <S.PostTop>
                  <S.LikeArea>
                    <S.LikeBtn onClick={postLike}>
                      {/* toggle full, empty heart icon */}
                      {isLiked ? (
                        <i className="fa fa-heart" />
                      ) : (
                        <i className="fa fa-heart-o" />
                      )}
                    </S.LikeBtn>
                    <S.LikeCount>{likeCount}</S.LikeCount>
                  </S.LikeArea>
                  <S.Question>{content.question.question_content}</S.Question>
                </S.PostTop>
              </S.HeaderArea>
              <S.MiddleArea>
                <S.MusicArea>
                  <MusicCard
                    title={content.track_title}
                    artist={content.track_artist}
                    source={content.track_audio}
                    link={content.spotify_link}
                    cover={content.track_album_cover}
                    cols={cols}
                    postId={postId}
                  />
                </S.MusicArea>
                <S.ContentArea>
                  <S.PubDate>{formattedDate}</S.PubDate>
                  <S.ContentTitle>{content.title}</S.ContentTitle>
                  <S.BodyWrapper>
                    <S.ContentBody>{content.content}</S.ContentBody>
                  </S.BodyWrapper>
                </S.ContentArea>
              </S.MiddleArea>
              <S.PostBottom>
                <S.Signature>{content.user}</S.Signature>
                {/* show edit, delete button only when user is post card owner */}
                {currUser === content.user ? (
                  <S.BtnArea>
                    <S.EditBtn
                      onClick={(e) => {
                        setEditMode(true);
                        setSubmit(false);
                      }}
                    >
                      <i className="fa fa-pen fa-lg" /> 수정하기
                    </S.EditBtn>
                    <S.DeleteBtn onClick={handleDelete}>
                      <i className="fa fa-trash fa-lg" /> 삭제하기
                    </S.DeleteBtn>
                  </S.BtnArea>
                ) : (
                  ""
                )}
              </S.PostBottom>
            </>
          ) : (
            <>
              <S.HeaderArea>
                <S.PostTop editMode={editMode}>
                  <S.Question editMode={editMode}>
                    {content.question.question_content}
                  </S.Question>
                </S.PostTop>
              </S.HeaderArea>
              <S.MiddleArea editMode={editMode}>
                <S.MusicSearchArea
                  isSearching={isSearching}
                  onClick={!selected ? () => setSearching(true) : () => {}}
                >
                  {selected ? (
                    <S.MusicCardWrapper>
                      <MusicCard
                        title={mObject.title}
                        artist={mObject.artist}
                        cover={mObject.img}
                        link={mObject.url}
                        source={mObject.preview}
                      />
                      <S.ResetChoiceButton onClick={resetMusicChoice}>
                        음악 변경
                      </S.ResetChoiceButton>
                    </S.MusicCardWrapper>
                  ) : (
                    <S.SearchBar>
                      <i className="fa fa-search" />
                      <S.SearchInput
                        placeholder="음악 검색"
                        type="text"
                        onChange={(e) => updateSearchInput(e)}
                      />
                      {searchReady ? (
                        <S.SearchResultContainer>
                          {musicResults}
                        </S.SearchResultContainer>
                      ) : (
                        ""
                      )}
                    </S.SearchBar>
                  )}
                </S.MusicSearchArea>
                <S.FormArea isSearching={isSearching}>
                  <S.PubDate>{formattedDate}</S.PubDate>
                  <S.FormTitle
                    type="text"
                    name="title"
                    placeholder="제목을 입력하세요"
                    maxLength={120}
                    autoComplete="off"
                    defaultValue={content.title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <S.FormBody
                    placeholder="당신의 이야기를 들려주세요 :)"
                    name="body"
                    autoComplete="off"
                    defaultValue={content.content}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </S.FormArea>
              </S.MiddleArea>
              <S.PostBottom editMode={editMode}>
                <S.Signature>{currUser}</S.Signature>
                <S.EditBtnsWrapper>
                  <S.EditLeftWrapper>
                    <S.EditMessage>글을 수정하고 있어요</S.EditMessage>
                    <S.SubmitButton onClick={(e) => setEditMode(false)}>
                      <i className="fas fa-times" />
                      수정 취소
                    </S.SubmitButton>
                  </S.EditLeftWrapper>

                  <S.SubmitButton onClick={handleSubmit}>
                    <i className="fas fa-check" /> 수정 완료
                  </S.SubmitButton>
                </S.EditBtnsWrapper>
              </S.PostBottom>
            </>
          )}
        </S.PostCardArea>
      ) : (
        ""
      )}
    </>
  );
};

export default PostCardL;
