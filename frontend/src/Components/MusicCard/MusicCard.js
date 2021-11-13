import React from "react";
import {
  MusicWrapper,
  MusicCover,
  MusicTitle,
  MusicArtist,
  MusicInfo,
} from "./MusicCard.elements";
import { MusicPlayer } from "..";

const MusicCard = () => {
  return (
    <>
      <MusicWrapper>
        <MusicInfo>
          <MusicTitle>Cheapest Flight</MusicTitle>
          <MusicArtist>PREP</MusicArtist>
          <MusicPlayer source="https://p.scdn.co/mp3-preview/c291a40cd256f1381f0c42f6246047e23d59a74c?cid=cf0635b8ba9c4fb79c950f97b20e353e" />
        </MusicInfo>
        <MusicCover src="https://i.scdn.co/image/ab67616d0000b273ef383114d44a889364922113" />
      </MusicWrapper>
    </>
  );
};

export default MusicCard;
