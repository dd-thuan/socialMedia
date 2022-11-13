import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileCard.css";
import img from "../../img/Bee.png";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const posts = useSelector((state) => state.postReducer.posts)

  return (
    <div className='profileCard'>
      <div className="profileImages">
        <img src={user.imageCover.url == null ? img : user.imageCover.url  } alt="" />
        <img src={user.imageProfile.url == null ? img : user.imageProfile.url  } alt="" />
      </div>

      <div className="profileName">
        <span>{user.email}</span>
        <span>{user.worksAt ? user.worksAt : "Writting your position"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="verticalLine"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="verticalLine"></div>
              <div className="follow">
                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? "" :
        <span>
          <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            My Profile
          </Link>
        </span>
      }
    </div>
  )
}

export default ProfileCard
