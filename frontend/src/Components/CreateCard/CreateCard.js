import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as S from './CreateCard.elements';
import { MusicCard, SearchedItem } from '..';
import { useHistory } from 'react-router';

const CreateCard = ({ currUser, token, userId, questionId, locationAt }) => {
  const [questionContent, setQuestionContent] = useState();
  const [isSearching, setSearching] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchReady, setSearchReady] = useState(false);
  const [submitted, setSubmit] = useState(false);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [mObject, setMObject] = useState({});

  useEffect(() => {
    if (searchQuery !== '') {
      axios({
        method: 'post',
        url: 'api/spotify/',
        headers: {
          'Content-Type': 'application/json',
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
            info.artist = m.artists.map((x) => x.name).join(', ');
            arr.push(info);
          }
          setSearchResult(arr);
        })
        .then(() => setSearchReady(true));
    }
  }, [searchQuery]);

  const today = new Date();
  const formatToday = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  useEffect(() => {
    axios({
      method: 'get',
      url: `api/question/${questionId}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      setQuestionContent(response.data.question_content);
    });
  }, [questionId]);

  const updateSearchInput = (e) => {
    if (!currUser) {
      alert('로그인 후 글 작성이 가능합니다!');
      e.target.value = '';
    } else {
      setSearchCount(searchCount + 1);
      let count = searchCount;
      setTimeout(() => {
        if (count === searchCount) {
          setSelected(false);
          setSearchQuery(e.target.value);
        }
      }, 1000);
    }
  };

  const selectMusic = (i) => {
    let preview = searchResult[i].preview || 'null';
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
      method: 'post',
      url: 'api/post/',
      headers: {
        'Content-Type': 'application/json',
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
        question: questionId,
      },
    }).then(() => setSubmit(true));
  };

  const resetMusicChoice = () => {
    setSelected(false);
    setSearching(true);
    setMObject({});
    setSearchReady(false);
  };

  let history = useHistory();

  return (
    <>
      <S.CreateCardArea
        loggedOut={!currUser}
        onClick={
          !currUser ? () => alert('로그인 후 글 작성이 가능합니다!') : ''
        }
      >
        {submitted ? (
          <S.CompleteContainer>
            <p>글 작성이 완료되었습니다</p>
            <S.RedirectButton
              onClick={() => {
                if (locationAt === 'home') {
                  window.location.reload();
                  window.scrollTo(0, 0);
                } else {
                  history.goBack();
                }
              }}
            >
              확인
            </S.RedirectButton>
          </S.CompleteContainer>
        ) : (
          <>
            <S.TopArea>
              <S.Question>{questionContent}</S.Question>
            </S.TopArea>
            <S.MusicSearchArea
              isSearching={isSearching}
              onClick={
                !selected
                  ? currUser
                    ? () => setSearching(true)
                    : () => alert('로그인 후 글 작성이 가능합니다!')
                  : () => {}
              }
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
                    ''
                  )}
                </S.SearchBar>
              )}
            </S.MusicSearchArea>
            <S.FormArea isSearching={isSearching}>
              <S.PubDate>{formatToday}</S.PubDate>
              <S.FormTitle
                type="text"
                name="title"
                placeholder="제목을 입력하세요"
                maxLength={120}
                autoComplete="off"
                onChange={(e) =>
                  currUser
                    ? setTitle(e.target.value)
                    : alert('로그인 후 글 작성이 가능합니다!')
                }
              />
              <S.FormBody
                placeholder="당신의 이야기를 들려주세요 :)"
                name="body"
                autoComplete="off"
                onChange={(e) =>
                  currUser
                    ? setBody(e.target.value)
                    : alert('로그인 후 글 작성이 가능합니다!')
                }
              />
            </S.FormArea>
            <S.BottomArea>
              <S.Signature>{currUser}</S.Signature>
              <S.SubmitButton
                onClick={
                  currUser
                    ? () => handleSubmit()
                    : () => alert('로그인 후 글 작성이 가능합니다!')
                }
              >
                <i className="fas fa-check" />다 썼어요!
              </S.SubmitButton>
            </S.BottomArea>
          </>
        )}
      </S.CreateCardArea>
    </>
  );
};

export default CreateCard;
