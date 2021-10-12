import React, { useState } from "react";

const LikeButton = (liked, likeCount) => {
    const [isLiked, setIsLiked] = useState(liked);
    const [count, setCount] = useState(likeCount);

    onLike = () => {
        isLiked ? setIsLiked(false) : setIsLiked(true);
    };

    return (
        <>
            <div>
                { isLiked ?
                    <p onClick={onLike}>좋아요 {count + 1}</p> :
                    <p onClick={onLike}>안좋아요 {count - 1}</p>
                }
            </div>
        </>
    );
};

LikeButton = styled.button``;

export default LikeButton;