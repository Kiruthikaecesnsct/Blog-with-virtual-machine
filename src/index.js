import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthContext from "./Contexts/AuthContext";
import Secure from "./pages/Secure"

export default function App() {
  return (
    <BrowserRouter>
     <AuthContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Secure><Home /></Secure>} />
          <Route path="/blogs" element={<Secure><Editor/></Secure>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      </AuthContext>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);