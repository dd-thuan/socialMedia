import React from 'react';
import { PostData } from '../../data/PostData';
import Post from '../post/Post';
import "./Posts.css"

const Posts = () => {
  return (
    <div className='posts'>
      {PostData.map((post, id) => {
        return <Post data={post} id={id} />
      })}
    </div>
  )
}

export default Posts