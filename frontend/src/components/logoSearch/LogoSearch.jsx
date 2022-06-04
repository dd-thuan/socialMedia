import React from 'react'
import "./LogoSearch.css"
import Logo from "../../img/logo.png"
import SearchIcon from "@iconscout/react-unicons/icons/uil-search";

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
      <img src={Logo} alt="logo" />
      <div className="Search">
        <input type="text" placeholder='#Explore' />
        <div className="s-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch