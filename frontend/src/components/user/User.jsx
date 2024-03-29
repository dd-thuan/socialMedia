import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from '../../actions/userAction';

const User = ({ person }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData)
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  )

  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user))

    setFollowing((prev) => !prev)
  }

  return (
    <div className="follower">
      <div>
        <img src={person.imageProfile.url} alt="img" className='followerImg' />
        <div className="name">
          <span>{person.username}</span>
          <span>@{person.email}</span>
        </div>
      </div>

      <button className='button fc-button' onClick={handleFollow}>
        {!following ? "Follow" : "UnFollow"}
      </button>

    </div>
  )
}

export default User