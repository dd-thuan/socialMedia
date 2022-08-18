import React from 'react'
import "./LogoSearch.css"
import Logo from "../../img/logo.png"
import SearchIcon from "@iconscout/react-unicons/icons/uil-search";
import {useDispatch} from "react-redux";
import { logOut } from '../../actions/AuthAction';




const LogoSearch = () => {
  const dispatch = useDispatch();
    // const isSearching = useSelector((state) => state.search.isSearching);
    // const searchResults = useSelector((state) => state.search.searchResults);

  const logout = () => {
    dispatch(logOut());


}
  return (
    <div className='logoSearch'>
      <img src={Logo} alt="logo" />
      <div className="Search">
        <input type="text" placeholder='#Explore' />
        <div className="s-icon" onClick={logout}>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch