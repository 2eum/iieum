import React from "react";
import * as S from "./SearchedItem.elements";

const SearchedItem = ({ title, artist, img, url, preview }) => {
  console.log(preview);
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Artist>{artist}</S.Artist>
      <S.Cover src={img} alt="cover-art" />
      <S.Link>
        <a>{url}</a>
      </S.Link>
      <S.Preview>{preview}</S.Preview>
    </S.Container>
  );
};

export default SearchedItem;
