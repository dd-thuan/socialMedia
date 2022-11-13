import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Heart from "@iconscout/react-unicons/icons/uil-heart";
import Share from "@iconscout/react-unicons/icons/uil-share-alt";
import Comment from "@iconscout/react-unicons/icons/uil-comment-add";
import "./Post.css";
import { likePost } from '../../api/PostRequest';


const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData)


  //error when upload in homepage
  const [liked, setLiked] = useState() //data.likes.includes(user._id)
  const [likes, setLikes] = useState() //data.likes.length



  const handleHeart = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }
<q></q>
  return (
    <div className='post'>

      <img src={data.imageProfile.url} alt={data.name} />
      <div className="postAct" >
        {liked
          ? <Heart color="pink" onClick={handleHeart} alt="" />
          : <Heart onClick={handleHeart} alt="" />
        }

        <Comment />
        <Share />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} {likes > 1
          ? "likes"
          : "like"}
      </span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post