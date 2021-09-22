import React from "react";
import {
  MusicWrapper,
  MusicCover,
  MusicTitle,
  MusicArtist,
} from "./MusicCard.elements";
import { MusicPlayer } from "../../Components";

const MusicCard = () => {
  return (
    <>
      <MusicWrapper>
        <MusicCover src="https://i.scdn.co/image/ab67616d0000b273ef383114d44a889364922113" />
        <MusicTitle>Cheapest Flight</MusicTitle>
        <MusicArtist>PREP</MusicArtist>
        <MusicPlayer />
      </MusicWrapper>
    </>
  );
};

export default MusicCard;
