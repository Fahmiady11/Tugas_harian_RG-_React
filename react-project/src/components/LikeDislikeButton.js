// TODO: answer here
import React from "react";
import Button from "./Button";

export default function LikeDislikeButton({ id, isLiked,image,isDisliked, likeCount, dislikeCount}) {
    // TODO: answer here
    return (
        <Button
            id={id}
            image={image}
            isLiked={isLiked}
            isDisliked={isDisliked}
            likeCount={likeCount}
            dislikeCount={dislikeCount}
        />
    )
}