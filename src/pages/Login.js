import { useState,useRef } from 'react';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../Contexts/AuthContext';


const Login = () => {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const {Login} = useAuth();
  const [loading, setLoading] = useState(false);
  async function submitListener(e) {
    e.preventDefault();
    try {
      await Login(emailRef.current.value, passwordRef.current.value);
      navigate('/blogs');
      setLoading(true);
    }
    catch (error) {
      alert("unable to login")
    }
    navigate('/');
    setLoading(false);
  }



      return (
        <form onSubmit={submitListener}>
        <div>
    
          <h1 classname="name">Login Page</h1>
          <br></br>
          <br>
          </br>
          <div classname="input">
            <input type="text" placeholder="email" required value={name}
          onChange={(e) => setName(e.target.value)}
          ref={emailRef} />
          </div>
          <br></br>
          <div className="second-input">
            <input type="password" placeholder="password" required
            value={mail}
            onChange={(e) => setEmail(e.target.value)} ref={passwordRef}/>
          </div>
          <div>
        <button type="submit" disabled={loading}>Login</button><br></br>
        </div>
          <div className="login-button">
            
          </div>
          <div>
            
          </div>
    
    
    
    
        </div>
    
        </form>
      );
    
    
  };
  
  export default Login;