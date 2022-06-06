import React, { useState } from 'react';
import "./InfoCard.css";
import EditIcon from "@iconscout/react-unicons/icons/uil-pen"
import ProfileModal from '../profileModal/ProfileModal';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Profile</h4>
        <div>
          <EditIcon
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal 
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status</b>
          <span>In relationship</span>
        </span>
      </div>

      <div className="info">
        <span>
          <b>Lives in</b>
          <span>Vn</span>
        </span>
      </div>

      <div className="info">
        <span>
          <b>Works at</b>
          <span>IBM</span>
        </span>
      </div>

      <button className='button btn-logout'>Logout</button>
    </div>
  )
}

export default InfoCard