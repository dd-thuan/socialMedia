import React, { useState, useEffect } from 'react';
import "./InfoCard.css";
import EditIcon from "@iconscout/react-unicons/icons/uil-pen"
import ProfileModal from '../profileModal/ProfileModal';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../actions/AuthAction';
import { useParams } from 'react-router-dom';
import * as UserApi from "../../api/UserRequest";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id
  const [profileUser, setProfileUser] = useState({})
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user)
        console.log(profileUser)
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser)
        console.log(profileUser)
      }
    }
    fetchProfileUser();
  }, [user])
  const logout = () => {
    dispatch(logOut());
  }
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Profile</h4>
        {user._id === profileUserId ? (
          <div>
            <EditIcon
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : ("")}
      </div>

      
      <div className="info">
        
        <span>
          <b>Fullname: </b>
          <span>{profileUser.lastname + profileUser.firstname ? profileUser.lastname +  profileUser.firstname : "Nothing..." }</span>
        </span>
      </div>

      <div className="info">
        
        <span>
          <b>Username: </b>
          <span>{profileUser.username ? profileUser.username : "Nothing..." }</span>
        </span>
      </div>
      <div className="info">
        
        <span>
          <b>Status: </b>
          <span>{profileUser.relationship ? profileUser.relationship : "Nothing..." }</span>
        </span>
      </div>

      <div className="info">
        <span>
          <b>Lives in: </b>
          <span>{profileUser.livesIn ? profileUser.livesIn : "Nothing..."}</span>
        </span>
      </div>

      <div className="info">
        <span>
          <b>Works at: </b>
          <span>{profileUser.worksAt ? profileUser.worksAt : "Nothing..."}</span>
        </span>
      </div>
      <div className="info">
        
        <span>
          <b>Country: </b>
          <span>{profileUser.country ? profileUser.country : "Nothing..." }</span>
        </span>
      </div>

      <button className='button btn-logout' onClick={logout}>Logout</button>
    </div>
  )
}

export default InfoCard
