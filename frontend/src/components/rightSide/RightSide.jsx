import React, { useState } from 'react';
import Home from "@iconscout/react-unicons/icons/uil-home";
import Setting from "@iconscout/react-unicons/icons/uil-setting";
import Comment from "@iconscout/react-unicons/icons/uil-comment-alt-dots";
import Bell from "@iconscout/react-unicons/icons/uil-bell";
import "./RightSide.css";
import TrendCard from '../trendCard/TrendCard';
import ShareModal from "../shareModal/ShareModal";
import { Link } from 'react-router-dom';

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="rightSide">
      <div className="navIcons">
        <Link to="../home">
        <Home />
        </Link>
        <Link to="../chat">
        <Comment />
        </Link>
        <Bell />
        <Setting />
      </div>

      <TrendCard />

      <button className='button r-button' onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
    </div>
  )
}

export default RightSide