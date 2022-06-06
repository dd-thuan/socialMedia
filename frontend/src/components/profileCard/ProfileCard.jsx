import React from 'react'
import Logo from "../../img/logo.png";
import "./ProfileCard.css";

const ProfileCard = () => {
  const profilePage = true;
  return (
    <div className='profileCard'>
      <div className="profileImages">
        <img src={Logo} alt="" />
        <img src={Logo} alt="" />
      </div>

      <div className="profileName">
        <span>Name</span>
        <span>Position</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,6666</span>
            <span>Followings</span>
          </div>
          <div className="verticalLine"></div>
          <div className="follow">
            <span>374</span>
            <span>Followers</span>
          </div>
          {profilePage && (
            <>
              <div className="verticalLine">
              </div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>}
    </div>
  )
}

export default ProfileCard