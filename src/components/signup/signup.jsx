import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import request from "../../utils/request";

import "./signup.scss";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const httpOption = {
      url: "/api/register",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      payload: {
        name: email,
        phone: "12345",
        user_type: "user",
        fire_id: "2323",
        email: email,
        password: password,
      },
    };
    try {
      const resp = await request(httpOption);
      if (resp.code === 400) throw new Error(resp.message);
      alert("Signup success");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup">
      <div className="heading">
        <h1>Signup</h1>
        <small className="text-primary" onClick={() => navigate("/")}>
          Home
        </small>
        &nbsp;
        <small className="text-primary" onClick={() => navigate("/login")}>
          Login
        </small>
      </div>
      <br />
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <br />
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Signup
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
