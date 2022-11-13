import React, { useState } from 'react'
import { Modal, useMantineTheme } from "@mantine/core/";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  updateUser } from '../../actions/userAction';

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { user } = useSelector((state) => state.authReducer.authData);

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other)
  const [imageProfile, setImageProfile] = useState("");
  const [imageCover, setImageCover] = useState("");
  const dispatch = useDispatch();
  const params = useParams();


  const handleChange = (e) => {
    e.preventDefault();

    setFormData({...formData, [e.target.name]: e.target.value});

  }

  const handleImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageProfile(reader.result);
        setImageCover(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);

  //   if(e.target.files && e.target.files[0]) {
  //     let img = e.target.files[0];
  //     e.target.name === "profileImage"? setImageProfile(img) : setImageCover(img);
  // }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
   
  
    dispatch(updateUser(params.id, UserData));
    setModalOpened(false); 
  }

  return (
    <Modal
      overlayColor={theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form action="" className="infoForm" onSubmit={handleSubmit}>
        <h3>Your Profile</h3>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="infoInput"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="infoInput"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            name="worksAt"
            placeholder="Works at"
            className="infoInput"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            name="livesIn"
            placeholder="Lives in"
            className="infoInput"
            value={formData.livesIn}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="infoInput"
            onChange={handleChange}
            value={formData.country}
          />
        </div>

        <div>
          <input
            type="text"
            name="relationship"
            placeholder="Relationship Status"
            className="infoInput"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>
        <div>
          Profile Image
          <input
            type="file"
            accept='image/*'
            className="profileImg"
            onChange={handleImageChange}
          />
          Cover Image
          <input
            type="file"
            accept='image/*'
            className="coverImg"
            onChange={handleImageChange}
          />
        </div>
        <button className="button" type="submit">Update</button>
      </form>

    </Modal>
  )
}
export default ProfileModal