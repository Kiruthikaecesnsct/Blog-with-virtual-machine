

import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const isAuth = localStorage.getItem("isAuth");
    const location = useLocation();
    
    return (
        isAuth ? children : (<>{alert("not authorized...")};<Navigate to="/login" replace={location}/></>)
    );
}

export default RequireAuth;