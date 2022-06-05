import React from 'react'
import "./Home.css"
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'

const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide />
      <PostSide />
      <div className="rightSide">Rights</div>

    </div>
  )
}

export default Home