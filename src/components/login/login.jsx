import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import request from "../../utils/request";

import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const httpOption = {
      url: "/api/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      payload: {
        email: email,
        password: password,
      },
    };
    try {
      const resp = await request(httpOption);
      if (resp.code === 400) throw new Error(resp.message);
      alert("Login success");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="Login">
      <div className="heading">
        <h1>Login</h1>
        &nbsp;
        <small className="text-primary" onClick={() => navigate("/")}>
          Home
        </small>
        &nbsp;
        <small className="text-primary" onClick={() => navigate("/signup")}>
          Signup
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
        <div className="d-grid gap-2" onClick={handleSubmit}>
          <Button variant="primary" size="lg">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}
