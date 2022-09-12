import React, { useState, useRef } from 'react';
import "./PostShare.css";
import { useSelector, useDispatch } from "react-redux";
import ProfileImg from "../../img/Lock.png";
import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
import UilPlayCircle from "@iconscout/react-unicons/icons/uil-play-circle";
import UilSchdule from "@iconscout/react-unicons/icons/uil-schedule";
import UilLocationPoint from "@iconscout/react-unicons/icons/uil-location-point";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import { uploadImage, uploadPost } from '../../actions/UploadAction';
import img from "../../img/Bee.png"


const PostShare = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.postReducer.uploading);
  const { user } = useSelector((state) => state.authReducer.authData);

  const serverPublic = process.env.REACT_PUBLIC_IMAGE_FOLDER

  const desc = useRef();
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  }

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);

      try {
        dispatch(uploadImage(data));

      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  }
  return (
    <div className="postShare">
       {/* <img src={user.imageProfile ? serverPublic + user.imageProfile : 
        serverPublic + "1660836478197Bee.png"} alt="" /> */}
        <img src={img} alt="" />
      <div>
        <input
          ref={desc}
          required
          type="text" placeholder="What's happenning"
        />

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
          <button className='button ps-button' onClick={handleSubmit} >
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input type="file" name="myImage" ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="img" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare