import React, { useState } from 'react'
import { Modal, useMantineTheme } from "@mantine/core/";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/UploadAction';
import { updateUser } from '../../actions/userAction';

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other)
  const [imageProfile, setImageProfile] = useState(null);
  const [imageCover, setImageCover] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({...formData, [e.target.name]: e.target.value});

  }

  const handleImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profileImage"? setImageProfile(img) : setImageCover(img);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if(imageProfile){

      const filename = Date.now() + imageProfile.name;
      data.append("name", filename);
      data.append("file", imageCover);
      UserData.imageCover = filename;
      try {
        dispatch(uploadImage(data));
      } catch(error){
        console.log(error);
      }
    }
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
      <form action="" className="infoForm">
        <h3>Your Profile</h3>
        <div>
          <input
            type="text"
            name="First Name"
            placeholder="First name"
            className="infoInput"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            className="infoInput"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            name="WorksAt"
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
            name="imageProfile"
            className="profileImg"
            onChange={handleImageChange}
          />
          Cover Image
          <input
            type="file"
            name="imageCover"
            className="coverImg"
            onChange={handleImageChange}
          />
        </div>
        <button className="button" onClick={handleSubmit}>Update</button>
      </form>

    </Modal>
  )
}
export default ProfileModal