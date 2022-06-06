import React from 'react';
import "./Profile.css";
import ProfileLeft from "../profileLeft/ProfileLeft";
import PostSide from "../postSide/PostSide";
import ProfileCard from "../profileCard/ProfileCard"


const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profileCenter">
        <ProfileCard />
        <PostSide />
      </div>
    </div>
  )
}

export default Profile