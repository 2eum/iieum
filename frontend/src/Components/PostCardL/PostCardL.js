import React from "react";
import { 
  PostCardArea, 
  PostTop, 
  MusicArea,
  ContentArea,
  PostBottom 
} from "./PostCardL.elements";

const PostCardL = () => {
  return (
    <>
      <PostCardArea>
        <PostTop>This is Top</PostTop>
        <MusicArea>Music</MusicArea>
        <ContentArea>Content</ContentArea>
        <PostBottom>Bottom</PostBottom>
      </PostCardArea>
    </>
  );
};

export default PostCardL;
