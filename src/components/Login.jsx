// import React, { useState } from "react";
// import { Form, Button, Container, Alert } from "react-bootstrap";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loginMessage, setLoginMessage] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Simulating a login check
//     if () {
//       setLoginMessage("Login successful!");
//     } else {
//       setLoginMessage("Authentication failed. Please check your credentials.");
//     }
//   };

//   return (
//     <Container
//       className="d-flex justify-content-center align-items-center flex-column mt-5"
//       style={{ height: "500px" }}
//     >
//       <div
//         style={{
//           height: "100vh",
//           width: "400px",
//           borderRadius: "20px",
//           boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
//         }}
//         className="mt-5 p-4"
//       >
//         <center className="mt-3">
//           <h2>Login</h2>
//         </center>
//         <center>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Group controlId="formEmail">
//               <Form.Label className="mt-3" style={{ fontSize: "18px" }}>
//                 Email
//               </Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="mt-2"
//               />
//             </Form.Group>

//             <Form.Group controlId="formPassword">
//               <Form.Label className="mt-3" style={{ fontSize: "18px" }}>
//                 Password
//               </Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//                 className="mt-2"
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-4">
//               Login
//             </Button>
//           </Form>
//           {loginMessage && (
//             <Alert variant={loginMessage.includes("successful") ? "success" : "danger"} className="mt-3">
//               {loginMessage}
//             </Alert>
//           )}
//         </center>
//       </div>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
import alertMsg from '../Library/library';


const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // const [loginMessage, setLoginMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log({[name]:value})
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      ///////////
      const data = await response.json();
      console.log(data,"checkkar")
      // console.log(data.token,"tokenCheck")
      localStorage.setItem("token", data.token);

      //////////

      if (data.token) {
        // const data = await response.json();
        // setLoginMessage("Login successful!");
        alertMsg.sweetalert.toast("successfully Login.")

        
        navigate("/homebanner")
      } else {
        // setLoginMessage("Authentication failed. Double se check kar");
      }
    } catch (error) {
      // console.error("Error during login:", error);
      setLoginMessage("An error occurred during login. Please try again later.");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5"
      style={{background:"#ECE8EA", height:"80vh", borderRadius:"25px"}}
    >
      <div
        style={{
          height: "70%",
          width: "500px",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
          background:"white",
        }}
        
      >
                <h2 style={{ textAlign: "center", marginTop: "50px" }}>Login</h2>

       
          <Form onSubmit={handleFormSubmit} style={{ margin: "auto", width: "50%" }}>
            <Form.Group>
              <Form.Label  style={{ fontSize: "18px" }}>
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                
              />
            </Form.Group>

            <Form.Group>
              <Form.Label  style={{ fontSize: "18px", marginTop:"20px" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{marginTop:"20px", width:"100%"}}>
              Login
            </Button>
          </Form>
          <p
          style={{
            textAlign: "end",
            marginTop: "10px",
            marginRight: "125px",
            fontSize: "16px",
            marginBottom:"50px"
          }}
        >
          Already registered? <Link as={Link} to="/register">
                    Sign Up
                  </Link>
        </p>
          {/* {loginMessage && (
            <Alert variant={loginMessage.includes("successful") ? "success" : "danger"} className="mt-3">
              {loginMessage}
            </Alert>
          )} */}
        
      </div>
    </Container>
  );
};

export default Login;
