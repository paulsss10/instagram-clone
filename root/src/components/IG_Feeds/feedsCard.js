import React, { useState } from "react";
import thumbnail from "../../rsrcs/thumbnail-story.jpg";
import postImage from "../../rsrcs/postImage-dummy.jpg";
import likeIcon from "../../rsrcs/heart-icon.svg";
import commentIcon from "../../rsrcs/comment-icon.svg";
import shareIcon from "../../rsrcs/PaperPlaneTilt.svg";
import bookmarkIcon from "../../rsrcs/bookmark-icon.svg";
import smallHeart from "../../rsrcs/heart-icon.svg";
import smileyIcon from "../../rsrcs/smiley-icon.svg";
import likedIcon from "../../rsrcs/liked-icon.svg";

const FeedsCard = () => {
  const [feedContent, setFeedContent] = useState([
    {
      id: 1,
      userHandle: "jordi_alba18",
      userProfile: thumbnail,
      userSponsor: "",
      postImage: postImage,
      datePosted: "25 minutes",
      postTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae dictum ex. Duis eget urna ac metus egestas fringilla sed ac sapien. #postText.",
      likes: 25000,
      likeStatus: false,
      comments: [
        {
          commenterHandle: "Commenter 1",
          comment: "Hey this is a comment!",
          like: 2,
        },
        {
          commenterHandle: "Commenter 2",
          comment: "Hey this is a comment!",
          like: 1,
        },
      ],
    },
    {
      id: 2,
      userHandle: "jordi_alba18",
      userProfile: thumbnail,
      userSponsor: "",
      postImage: postImage,
      datePosted: "25 minutes",
      postTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae dictum ex. Duis eget urna ac metus egestas fringilla sed ac sapien. #postText.",
      likes: 25000,
      likeStatus: false,
      comments: [
        {
          commenterHandle: "Commenter 1",
          comment: "Hey this is a comment!",
          like: 2,
        },
        {
          commenterHandle: "Commenter 2",
          comment: "Hey this is a comment!",
          like: 1,
        },
      ],
    },
  ]);

  const setYouLike = (e) => {
    document.getElementById(e).classList.add('liked');
  }

  return (
    <>
      {feedContent.map((feed) => (
        <div className="feeds__card">
          {/* card header */}
          <div className="feeds__userInfo">
            <div className="userProfile__container">
              <div className="postCard__header">
                <img
                  alt="user"
                  className="userProfile"
                  src={feed.userProfile}
                />

                <div className="userDetails__container">
                  <h3>{feed.userHandle}</h3>
                  <small>{feed.userSponsor}</small>
                </div>
              </div>
            </div>
          </div>

          {/* card post image */}
          <div className="postImage__container" onDoubleClick={(e)=> setYouLike(feed.id)}>
            <img alt="post image" src={feed.postImage} />
          </div>

          {/* card actions (like, comment, share, bookmark & comment section) */}
          <div className="postActions__container">
            <div className="postActions__wrapper">
              <div className="postActions__left">
                <a>
                  {feed.likeStatus === true ? <img src={likedIcon} id={feed.id} /> : <img src={likeIcon} id={feed.id} />}
                </a>
                <a>
                  <img src={commentIcon} />
                </a>
                <a>
                  <img src={shareIcon} />
                </a>
              </div>

              <div className="postActions__right">
                <a>
                  <img src={bookmarkIcon} />
                </a>
              </div>
            </div>

            <div className="postLikesCount__wrapper">
              <h3>{feed.likes.toLocaleString()} Likes</h3>
            </div>

            <div
              className="postTitle__wrapper"
              style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
            >
              <p>
                <a>
                  <span>{feed.userHandle}</span>
                </a>{" "}
                {feed.postTitle}
              </p>
            </div>

            <div className="postComment__wrapper">
              <a className="viewAllComment__btn">
                View all {feed.comments.length} comments
              </a>
              <div className="comments__wrapper">
                {feed.comments.map((comment) => (
                  <div>
                    <span>
                      <a href="#">{comment.commenterHandle}</a>{" "}
                      <small> {comment.comment}</small>
                    </span>
                    <img src={smallHeart} />
                  </div>
                ))}
              </div>

              <div className="postedDate__wrapper">
                <small>{feed.datePosted} ago</small>
              </div>

              <div className="addComment__wrapper">
                <div className="emoji-button">
                  <img alt="emoji" src={smileyIcon} />
                </div>

                <div className="comment-input">
                  <input type="text" placeholder="Type here" />
                </div>
                
                <div className="post-button">
                  <a>Post</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedsCard;
