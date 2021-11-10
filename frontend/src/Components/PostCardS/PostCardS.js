import React from "react";
import * as e from "./PostCardS.elements";


const PostCardS = () => {
  return (
    <e.PostCardArea>
      <e.TopArea>
        <e.Author>Mayzel</e.Author>
      </e.TopArea>
      <e.MusicArea>
        <e.MusicCover src="https://image.bugsm.co.kr/album/images/500/40591/4059180.jpg"></e.MusicCover>
        <e.MusicInfoArea>
          <e.MusicTitleWrapper>
            <e.MusicTitle>KNOCK(With 박문치dddd)</e.MusicTitle>
          </e.MusicTitleWrapper>
          <e.MusicArtist>권진아</e.MusicArtist>
        </e.MusicInfoArea>
      </e.MusicArea>
      <e.TitleArea>
        <e.ContentTitle>나란히 누워 별을 셀 때</e.ContentTitle>
      </e.TitleArea>
    </e.PostCardArea>
  
    );
};

export default PostCardS;
