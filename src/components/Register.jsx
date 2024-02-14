import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/registerSlice";
import alertMsg from '../Library/library';

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registration data:", formData);
    dispatch(registerUser(formData));
    alertMsg.sweetalert.toast("successfully Registerd.")
  };

  return (
    // <Container>
    //   <h2 className="mt-5">Register</h2>
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group>
    //       <Form.Label>Username</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter username"
    //         name="username"
    //         value={formData.username}
    //         onChange={handleChange}
    //         required
    //       />
    //     </Form.Group>

    //     <Form.Group>
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Enter email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </Form.Group>

    //     <Form.Group>
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Enter password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleChange}
    //         required
    //       />
    //     </Form.Group>

    //     <Button variant="primary" type="submit">
    //       Register
    //     </Button>
    //   </Form>
    // </Container>
    <Container
      className="d-flex justify-content-center align-items-center flex-column mt-5" style={{background:"#ECE8EA", height:"80vh", borderRadius:"25px"}}
    >
      <div
        style={{
          height: "90%",
          width: "500px",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
          background:"white"
        }}
      >
      
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>Register</h2>
        
        <Form onSubmit={handleSubmit} style={{ margin: "auto", width: "50%" }}>
          <Form.Group>
            <Form.Label style={{ fontSize: "18px" }}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontSize: "18px", marginTop: "20px" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontSize: "18px", marginTop: "20px" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "20px", width: "100%" }}
          >
            Submit
          </Button>
        </Form>
        <p
          style={{
            textAlign: "end",
            marginTop: "10px",
            marginRight: "125px",
            fontSize: "16px",
          }}
        >
          Already registered? <a href="/signin">Sign in</a>
        </p>
      </div>
    </Container>
  );
};

export default Register;
