import React from 'react';
import NotLike from "../../img/comment.png";
import Comment from "../../img/logo.png";
import Heart from "../../img/logo.png";
import Share from "../../img/logo.png";
import "./Post.css";

const Post = ({ data }) => {
  return (
    <div className='post'>
      <img src={data.img} alt="img" />
      <div className="postAct">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span>{data.likes} likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span>{data.description}</span>
      </div>
    </div>
  )
}

export default Post