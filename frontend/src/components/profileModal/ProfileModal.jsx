import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core/";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

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
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            className="infoInput" 
          />
        </div>

        <div>
          <input
            type="text"
            name="WorksAt"
            placeholder="Works at"
            className="infoInput" 
          />
        </div>

        <div>
          <input
            type="text"
            name="livesIn"
            placeholder="Lives in"
            className="infoInput" 
          />
          <input
            type="text"
            name="country"
            placeholder="Country" 
            className="infoInput" 
          />
        </div>

        <div>
          <input
            type="text"
            name="relationship"
            placeholder="Relationship Status"
            className="infoInput" 
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" className="profileImg" />
          Cover Image
          <input type="file" name="coverImg" className="coverImg" />
        </div>
        <button className="button">Update</button>
      </form>

    </Modal>
  )
}
export default ProfileModal