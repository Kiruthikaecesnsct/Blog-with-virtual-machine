

import { Outlet, Link } from "react-router-dom";
import {useAuth} from "../Contexts/AuthContext";
import '../layout.css';
const Layout = () => {
  const {SignOut}=useAuth()
  const clickHandler=()=>{console.log("hello");
  SignOut()}
  
  return (

    <>
      <nav>
        <ul className="nav__ul">
          <li id="nav__li">
            <Link id ="link" to="/">Home</Link>
          </li>
          
          <li id="nav__li">
            <Link id ="link" to="/signup">Signup</Link>
          </li>
          <li id="nav__li">
            <Link id ="link" to="/blogs">Add blog</Link>
          </li>
          <li id="nav__li">
            <Link id ="link" to="/login">Login</Link>
          </li>
          <li id="logout" onClick={clickHandler}>
            logout
           
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;