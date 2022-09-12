import React from 'react';
import LogoSearch from "../../components/logoSearch/LogoSearch";
import ProfileCard from "../../components/profileCard/ProfileCard";
import FollowersCard from "../../components/followersCard/FollowesCard"
import "./ProfileSide.css";


const ProfileSide = () => {
  return (
    <div className='profileSide'>
      <LogoSearch />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide