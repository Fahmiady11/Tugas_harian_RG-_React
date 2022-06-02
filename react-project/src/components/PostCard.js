//import { BrowserRouter } from "react-router-dom";
import "./../assets/css/PostCard.css";
import LikeDislikeButton from "./LikeDislikeButton";

export default function PostCard({ image, caption, username, id, date, liked, disliked, likeCount, dislikeCount }) {
  // TODO: answer here
  return (
    <>
      <div className="post-Card" aria-label="Post Card">
        <img className="post-Image" src={image} aria-label="Post Image" alt="gambar1" />
        <div className="post-Bottom">
          <p className="post-User-Name" onClick={() => console.log("bisa")} aria-label="Post User Name">{username}</p>
          <LikeDislikeButton
            id={id}
            isLiked={liked}
            isDisliked={disliked}
            likeCount={likeCount}
            dislikeCount={dislikeCount}

          />
        </div>
        <div className="column-2">
          <p className="post-Caption" aria-label="Post Caption">{caption}</p>
          <p className="post-Date" aria-label="Post Date">{date}</p>
        </div>
      </div>
    </>
  )
}


