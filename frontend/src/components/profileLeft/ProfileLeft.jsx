import React from 'react';
import LogoSearch from "../logoSearch/LogoSearch";
import InfoCard from '../infoCard/InfoCard';
import FollowersCard from "../followersCard/FollowesCard"


const ProfileLeft = () => {
  return (
    <div className="profileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft