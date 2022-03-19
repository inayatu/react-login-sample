import { Button } from "react-bootstrap";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { FaSadCry, FaArrowLeft } from "react-icons/fa";

import HomePage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>

      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

// Not found page
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <p className="text-info"> 404 - You Landed on Mars</p>
      <Button variant="info" onClick={() => navigate("/")}>
        <FaArrowLeft /> Take me home <FaSadCry />
      </Button>
    </div>
  );
};

const getCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
const AuthPage = ({ children }) => {
  const location = useLocation();

  const user = getCookie("user_");
  if (user === "admin") {
    return children;
  } else {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
};

export default App;
