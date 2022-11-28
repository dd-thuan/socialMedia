import React, { useState, useRef } from 'react';
import "./PostShare.css";
import { useSelector, useDispatch } from "react-redux";
import { uploadPost } from '../../actions/UploadAction';
import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
import UilPlayCircle from "@iconscout/react-unicons/icons/uil-play-circle";
import UilSchdule from "@iconscout/react-unicons/icons/uil-schedule";
import UilLocationPoint from "@iconscout/react-unicons/icons/uil-location-point";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";

import img from "../../img/Bee.png"


const PostShare = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.postReducer.uploading);
  const { user } = useSelector((state) => state.authReducer.authData);

  const imageRef = useRef();
  const desc = useRef();


  const defaultImage = 'https://res.cloudinary.com/dhnhufybl/image/upload/v1663656373/posts/hxjon2bmtyfhhfwsd6y5.jpg'

  const [image, setImage] = useState(defaultImage);

  const onImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

  }


  const reset = () => {
    desc.current.value = ""
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }



    if (image) {
      const myForm = new FormData();
      myForm.append("image", image);
      // myForm.append("desc", desc);
      newPost.image = image
    }


    console.log(newPost);

    dispatch(uploadPost(newPost));
    reset();
  }
  return (
    <div className="postShare">
      <img src={user.imageProfile.url === null ? img : user.imageProfile.url} alt="" />
      <div>
        <input
          required
          type="text" placeholder="What's happenning"
          name="desc"
          ref={desc}
        />

        <div className="postOptions">

          <div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
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
          <button className='button ps-button' onClick={handleSubmit} >
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="image"
              accept="image/*"
              ref={imageRef}
              onChange={onImageChange}
            />

          </div>
        </div>

        {image && (
          <div className="previewImage">

            <UilTimes onClick={() => setImage(null)} />
            <img src={image} alt="Avatar Preview" />
          </div>)}
      </div>
    </div>
  )
}

export default PostShare