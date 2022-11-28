// import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { userChats } from '../../api/ChatRequest'
// import Conversation from '../../components/conversation/Conversation'
// import LogoSearch from '../../components/logoSearch/LogoSearch'
// import './Chat.css'


// const Chat = () => {
//   const { user } = useSelector((state) => state.authReducer.authData)
//   const [chats, setChats] = useState([])

//   useEffect(() => {
//     const getChat = async() => {
//       try {
//         const { data } = await userChats(user._id)
//         setChats(data)
//         console.log(data)

//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getChat()
//   }, [user]);
//   return (
//     <div className="Chat">
//       <div className="Left-side-chat">
//         <LogoSearch />

//         <h2>Chat</h2>

//         <div className="Chat-container">
//           <div className="Chat-list">
//             {chats.map((chat) => (
//               <div>
//                 <Conversation data={chat} currentUserId={user._id} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="Right-side-chat">
//         rightSide
//       </div>
//     </div>
//   )
// }

// export default Chat



import React, { useRef, useState } from "react";
import ChatBox from "../../components/ChatBox/ChatBox.js";
import NavIcons from "../../components/NavIcons/NavIcons.js";
import "./Chat.css";
import { useEffect } from "react";
import { userChats } from "../../api/ChatRequest";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import Conversation from "../../components/conversation/Conversation";
import LogoSearch from "../../components/logoSearch/LogoSearch"

const Chat = () => {
  const dispatch = useDispatch();
  const socket = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);


  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUser={user._id}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;