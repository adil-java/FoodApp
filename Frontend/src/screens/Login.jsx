import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [propPassword, setProp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
   
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.username.trim() === "" || userInfo.password.trim() === "") {
      alert("Username and password cannot be empty.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/login", userInfo);
      const data = response.data;

      if (data.success) {
        console.log(localStorage.setItem("authToken",data.authToken))
        localStorage.setItem("role",data.role)
        // alert("Login successful!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        alert("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);

      if (error.response) {
        alert("Invalid username or password.");
      }
      }
   
  };

  const onChanges = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="vh-100 ">
      <Navbar />
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-white"
                style={{ "border-radius": "40px;" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Log In
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" for="form3Example1c">
                              UserName
                            </label>
                            <input
                              onChange={onChanges}
                              value={userInfo.username}
                              name="username"
                              type="text"
                              className="form-control"
                              placeholder="Enter username"
                            />
                          </div>
                        </div>

                        

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              value={userInfo.password}
                              name="password"
                              onChange={onChanges}
                              type={propPassword ? "text" : "password"}
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Enter password"
                            />
                          </div>
                        </div>

                        
                       

                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            onClick={() => setProp(!propPassword)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            {propPassword ? "Hide Password" : "Show Password"}
                          </label>
                        </div>

                        <div className="d-flex gap-3 justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="Submit"className=" btn btn-primary">
                             Login
                            
                          </button>

                          <button>
                            <Link to="/createuser" className=" btn btn-danger">
                              Register
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center ">
                      <img
                        src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="img-fluid rounded-lg"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
       <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </div> */}
    </>
  );
}
