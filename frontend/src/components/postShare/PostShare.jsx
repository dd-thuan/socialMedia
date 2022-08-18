// import React, { useState, useRef } from 'react';
// import "./PostShare.css";
// import { useSelector, useDispatch } from "react-redux";
// import ProfileImg from "../../img/Lock.png";
// import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
// import UilPlayCircle from "@iconscout/react-unicons/icons/uil-play-circle";
// import UilSchdule from "@iconscout/react-unicons/icons/uil-schedule";
// import UilLocationPoint from "@iconscout/react-unicons/icons/uil-location-point";
// import UilTimes from "@iconscout/react-unicons/icons/uil-times";
// import { uploadImage, uploadPost } from '../../actions/UploadAction';


// const PostShare = () => {
//   const dispatch = useDispatch()
//   // const loading = useSelector((state) => state.postsReducer.uploading);
//   const { user } = useSelector((state) => state.authReducer.authData);

//   const desc = useRef();
//   const [image, setImage] = useState(null);
//   const imageRef = useRef();

//   const onImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let img = e.target.files[0];
//       setImage(img);
//     }
//   }

//   const reset = () => {
//     setImage(null);
//     desc.current.value = "";
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newPost = {
//       userId: user._id,
//       desc: desc.current.value
//     }

//     if (image) {
//       const data = new FormData();
//       const filename = Date.now() + image.name;
//       data.append("name", filename);
//       data.append("file", image);
//       newPost.image = filename;
//       console.log(newPost);

//       try {
//         dispatch(uploadImage(data));

//       } catch (error) {
//         console.log(error);
//       }
//     }
//     dispatch(uploadPost(newPost));
//     reset();
//   }
//   return (
//     <div className="postShare">
//       <img src={ProfileImg} alt="logo" />
//       <div>
//         <input
//           ref={desc}
//           required
//           type="text" placeholder="What's happenning"
//         />

//         <div className="postOptions">
//           <div className="option" style={{ color: "var(--photo)" }}
//             onClick={() => imageRef.current.click()}>
//             <UilScenery />
//             Photo
//           </div>
//           <div className="option" style={{ color: "var(--video)" }}>
//             <UilPlayCircle />
//             Video
//           </div>
//           <div className="option" style={{ color: "var(--location)" }}>
//             <UilLocationPoint />
//             Location
//           </div>
//           <div className="option" style={{ color: "var(--schedule)" }}>
//             <UilSchdule />
//             Schedule
//           </div>
//           <button className='button ps-button' onClick={handleSubmit} >
//             {/* {loading ? "Uploading..." : "Share"} */}
//           </button>
//           <div style={{ display: "none" }}>
//             <input type="file" name="myImage" ref={imageRef}
//               onChange={onImageChange}
//             />
//           </div>
//         </div>
//         {image && (
//           <div className="previewImage">
//             <UilTimes onClick={() => setImage(null)} />
//             <img src={URL.createObjectURL(image)} alt="img" />
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default PostShare






// import React, { useState, useRef } from 'react';
// import "./PostShare.css";
// import { useSelector, useDispatch } from "react-redux";
// import ProfileImg from "../../img/Lock.png";
// import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
// import UilPlayCircle from "@iconscout/react-unicons/icons/uil-play-circle";
// import UilSchdule from "@iconscout/react-unicons/icons/uil-schedule";
// import UilLocationPoint from "@iconscout/react-unicons/icons/uil-location-point";
// import UilTimes from "@iconscout/react-unicons/icons/uil-times";



// const PostShare = () => {
//   const [image, setImage] = useState(null);
//   const imageRef = useRef();

//   const onImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let img = e.target.files[0];
//       setImage({
//         image: URL.createObjectURL(img),
//       });
//     }
//   }
//   return (
//     <div className="postShare">
//       <img src={ProfileImg} alt="logo" />
//       <div>
//         <input type="text" placeholder="What's happenning" />

//         <div className="postOptions">
//           <div className="option" style={{ color: "var(--photo)" }}
//             onClick={() => imageRef.current.click()}>
//             <UilScenery />
//             Photo
//           </div>
//           <div className="option" style={{ color: "var(--video)" }}>
//             <UilPlayCircle />
//             Video
//           </div>
//           <div className="option" style={{ color: "var(--location)" }}>
//             <UilLocationPoint />
//             Location
//           </div>
//           <div className="option" style={{ color: "var(--schedule)" }}>
//             <UilSchdule />
//             Schedule
//           </div>
//           <button className='button ps-button'>
//             Share
//           </button>
//           <div style={{ display: "none" }}>
//             <input type="file" name="myImage" ref={imageRef}
//               onChange={onImageChange}
//             />
//           </div>
//         </div>
//         {image && (
//           <div className="previewImage">
//             <UilTimes onClick={()=> setImage(null)} />
//             <img src={image.image} alt="img" />
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default PostShare



import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";
import ProfileImg from "../../img/Lock.png";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const desc = useRef();

  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    // if there is an image with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };
  return (
    <div className="postShare">
     <img src={ProfileImg} alt="logo" />
       <div>
         <input
           ref={desc}
           required
           type="text" placeholder="What's happenning"
         />
  
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
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
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "uploading" : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;