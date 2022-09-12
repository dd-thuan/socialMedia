import React from 'react';
import "./Profile.css";
import PostSide from "../../components/postSide/PostSide";
import ProfileCard from "../../components/profileCard/ProfileCard"
import RightSide from '../../components/rightSide/RightSide';
import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import ProfileSide from '../../components/profileSide/ProfileSide';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profileCenter">
        <ProfileCard  location="profilePage"/>
        <PostSide />
      </div>
      <RightSide />
    </div>
  )
}

export default Profile