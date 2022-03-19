import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Breadcrumb } from "react-bootstrap";

import "./homepage.scss";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h2>Landing page</h2> <br /> <br />
      <Button onClick={() => navigate("/login")}>Login</Button> &nbsp;
      <Button onClick={() => navigate("/signup")}>Signup</Button>
    </div>
  );
}

export default HomePage;
