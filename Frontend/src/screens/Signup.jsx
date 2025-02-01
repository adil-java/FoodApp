import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function SignUp() {
  const [propPassword, setProp] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    role: "", 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      if (!userInfo.role) {
        alert("Please select a role (Buyer or Seller).");
        return;
      }

      const response = await axios.post("http://localhost:8000/api/createuser", {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
        location: userInfo.location,
        role: userInfo.role, 
      });

      const data = response.data;
      console.log(data);

      if (data.success) {
        localStorage.setItem("authToken", data.authToken);
        alert("User created successfully!");
      } else {
        alert(data.message || "Please use a different email or username. Please try again.");
      }
    } catch (error) {
      console.log("Error during user creation:", error);
    // Log the detailed error response
      alert("An error occurred while creating the user.",error);
    
    }
  };

  const onChanges = (e) => {
    // Update user info for text input fields
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };


  return (
    <>
      <section className="vh-100">
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
                        Sign up
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
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <input
                              value={userInfo.email}
                              name="email"
                              type="email"
                              onChange={onChanges}
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
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

                        <div>
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <label>
                            <input
                              type="radio"
                              name="role"
                              value="buyer"
                              // checked={userInfo.role === "buyer"}
                              onChange={onChanges}
                            />{" "}
                            Buyer
                          </label>
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <label>
                            <input
                              type="radio"
                              name="role"
                              value="seller"
                              // checked={userInfo.role === "seller"}
                              onChange={onChanges}
                            />{" "}
                            Seller
                          </label>
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
                              Register
                          </button>

                          <button>
                            <Link to="/login" className=" btn btn-danger">
                              Already a User
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
