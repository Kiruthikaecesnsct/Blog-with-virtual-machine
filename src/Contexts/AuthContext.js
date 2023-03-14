import {auth} from "../Firebase/Firebase";
import React,{useContext,useState,useEffect} from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
const AuthenticateContext=React.createContext();
const useAuth = () => {
    return useContext(AuthenticateContext);
  };
const AuthContext=({children})=>{
    const [currentUser,setCurrentUser]=useState()
    const[loading,setLoading]=useState(true)
    const [isAuth, setIsAuth] = useState(false);

    const Signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const Login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password).then(() => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
          });
    }

    const SignOut = () => {
        return signOut(auth).then((result) => {
          localStorage.clear();
          setIsAuth(false);
          alert("you are successfully logged out...")
          window.location.pathname = "/login";    
        });
      };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user);
            return unsubscribe;
        }
        )
        
    },[])
    
    const value = {
        currentUser,
        Signup,
        Login,
        SignOut,
        isAuth
    }
    return (<AuthenticateContext.Provider value={value}> {!loading && children} </AuthenticateContext.Provider>);
}
export {useAuth};
export default AuthContext;

