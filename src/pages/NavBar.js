import React, { useState } from "react";
//import "../styles/NavBar.css";
import { Link } from "react-router-dom";
//import { useAuth } from "../contexts/AuthProvider";

const NavBar = () => {
  const [error, setError] = useState("");
  //const { currentUser } = useAuth();

  const logoutHandler = () => {
    //
  }

  return (
    <div className="nav">
      <ul className="nav__ul">
        <li id="nav__li">Blog home</li>
        <li id="nav__li">Your posts</li>
        <li id="nav__li"><Link to="/editor" id="link">Add Blog</Link></li>
        <li id="logout" onClick={logoutHandler}>Logout</li>
      </ul>
    </div>
  );
};

export default NavBar;