// import React, { useState, useEffect } from 'react'
// import { getUser } from '../../api/UserRequest';

// const Conversation = (data, currentUserId) => {
//   const [userData, setUserData] = useState(null)

//   useEffect(() => {
//     const userId = data.members.find((id) => id !== currentUserId)
//     console.log(userId)
//     const getUserData = async () => {
//       try {
//         const { data } = await getUser(userId)
//         setUserData(data)
//         console.log(data)
//       } catch (err) {
//         console.error(err)
//       }
//     }
//     getUserData()
//   }, [currentUserId, data]);
//   return (
//     <>
//       <div className="follower_conversation">
//         <div>
//           <div className="online-dot"></div>
//           <img src="" alt="" className='followerImage' style={{ width: '50px', height: '50px' }} />
//           <div className="name" style={{ fontSize: 'o.8rem' }}>
//             <span>{userData?.firstName}</span>
//             <span>Online</span>
//           </div>
//         </div>
//       </div>
//       <hr style={{ width: '85%', border: '0.1px solid #ececec' }} />
//     </>
//   )
// }

// export default Conversation


import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/UserRequest";
const Conversation = ({ data, currentUser, online }) => {

  const [userData, setUserData] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {

    const userId = data.members.find((id) => id !== currentUser)
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId)
        setUserData(data)
        dispatch({ type: "SAVE_USER", data: data })
      }
      catch (error) {
        console.log(error)
      }
    }

    getUserData();
  }, [])
  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={userData?.imageProfile.url ? userData?.imageProfile.url : "defaultProfile.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{ fontSize: '0.8rem' }}>
            <span>{userData?.username} {userData?.firstname}</span>
            <span style={{ color: online ? "#51e200" : "" }}>{online ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;