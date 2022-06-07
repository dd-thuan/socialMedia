import React from 'react';
import Heart from "@iconscout/react-unicons/icons/uil-heart";
import Share from "@iconscout/react-unicons/icons/uil-share-alt";
import Comment from "@iconscout/react-unicons/icons/uil-comment-add";
import "./Post.css";

const Post = ({ data }) => {
  return (
    <div className='post'>
      <img src={data.img} alt="img" />
      <div className="postAct">
        {data.liked ? <Heart color='pink' /> : <Heart />}
        <Comment />
        <Share />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>{data.likes} likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.description}</span>
      </div>
    </div>
  )
}

export default Post