import React from "react";
import {
  MusicWrapper,
  MusicCover,
  MusicTitle,
  MusicArtist,
  MusicInfo
} from "./MusicCard.elements";
import { MusicPlayer } from "..";

const MusicCard = () => {
  return (
    <>
      <MusicWrapper>
        <MusicInfo>
          <MusicTitle>Cheapest Flight</MusicTitle>
          <MusicArtist>PREP</MusicArtist>
          <MusicPlayer />
        </MusicInfo>
        <MusicCover src="https://i.scdn.co/image/ab67616d0000b273ef383114d44a889364922113" />
      </MusicWrapper>
    </>
  );
};

export default MusicCard;
