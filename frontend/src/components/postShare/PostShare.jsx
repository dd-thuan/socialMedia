import React, { useState, useRef } from 'react';
import "./PostShare.css";
import ProfileImg from "../../img/logo.png";
import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
import UilPlayCircle from "@iconscout/react-unicons/icons/uil-play-circle";
import UilSchdule from "@iconscout/react-unicons/icons/uil-schedule";
import UilLocationPoint from "@iconscout/react-unicons/icons/uil-location-point";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }
  return (
    <div className="postShare">
      <img src={ProfileImg} alt="logo" />
      <div>
        <input type="text" placeholder="What's happenning" />

        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchdule />
            Schedule
          </div>
          <button className='button ps-button'>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input type="file" name="myImage" ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=> setImage(null)} />
            <img src={image.image} alt="img" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare