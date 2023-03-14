import { useState, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useAuth } from '../Contexts/AuthContext';
const Signup = () => {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const {Signup} = useAuth();
  const [loading, setLoading] = useState(false);
  async function submitListener(e) {
    e.preventDefault();
    try {
      await Signup(emailRef.current.value, passwordRef.current.value);
      setLoading(true);
    } catch (error) {
      alert("email already exists")
    }
    setLoading(false);
  }

  return (
    <form onSubmit={submitListener}>
      <div>

        <h1 classname="name">Register Page</h1>
        <br></br>
        <br>
        </br>
        <div classname="input">
          <input type="text" placeholder="email" required value={name}
            onChange={(e) => setName(e.target.value)} ref={emailRef} />
        </div>
        <br></br>
        <div className="second-input">
          <input type="password" placeholder="password" required
            value={mail}
            onChange={(e) => setEmail(e.target.value)} ref={passwordRef} />
        </div>
        <div>
          <button type="submit" disabled={loading}>Create Account</button><br></br>
        </div>
        <div>
          <input type="checkbox" che-69cked="checked" name="remember" /> Remember me
          <br></br>
        </div>


        <div>

          <h3>Already Registered?</h3>
          <button><Link to="/login">Login</Link> </button>
          <Outlet />


        </div>





      </div>

    </form>
  );


};

export default Signup
  ;