import React from "react";

import Home from "@iconscout/react-unicons/icons/uil-home";
import Setting from "@iconscout/react-unicons/icons/uil-setting";
import Comment from "@iconscout/react-unicons/icons/uil-comment-alt-dots";
import Bell from "@iconscout/react-unicons/icons/uil-bell";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
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
  );
};

export default NavIcons;
