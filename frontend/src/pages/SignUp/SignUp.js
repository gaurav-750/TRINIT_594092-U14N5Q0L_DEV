import "./SignUp.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../../components/MyNavbar/MyNavbar";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [dpdown, setDpdown] = useState("Philantrophist");

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const submitSignUp = async (e) => {
    e.preventDefault();
    console.log(formValue);
    const data = await axios.post("http://localhost:8000/auth/users/", {
      ...formValue,
      is_phalanthropist: dpdown == "Philanthropist",
    });
    console.log(data);
    if (data.status == 200) {
      navigate("/login");
    }
  };

  return(
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center text-center flex-column">
        
        <div className="col-lg-6 col-md-8 col-sm-10 col-sx-10 col-10">
          <h1 className="font-48 text-head m-4 text-center">Sign Up!</h1>

            <div className="form-outline m-3">
            <input
                value={formValue.first_name}
                name="first_name"
                onChange={(e) => handleChange(e)}
                type="text"
                id="loginName"
                className="form-control "
                placeholder="First Name"
              />
            </div>
            <div className="form-outline m-3">
              <input
                value={formValue.last_name}
                name="last_name"
                onChange={(e) => handleChange(e)}
                type="text"
                id="loginName"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div className="form-outline m-3">
              <input
                value={formValue.username}
                name="username"
                onChange={(e) => handleChange(e)}
                type="text"
                id="loginName"
                className="form-control"
                placeholder="Userame"
              />
            </div>

            <div className="form-outline m-3">
              <input
                value={formValue.email}
                name="email"
                onChange={(e) => handleChange(e)}
                type="email"
                id="loginName"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="form-outline m-3">
              <input
                value={formValue.password}
                name="password"
                onChange={(e) => handleChange(e)}
                type="password"
                id="loginPassword"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <select
              value={dpdown}
              onChange={(e) => {
                setDpdown(e.target.value);
              }}
              className="form-select m-3"
              aria-label="Default select example"
            >
              <option selected>Type Of User</option>
              <option value={"Philanthropist "}>Philanthropist</option>
              <option value={"Ngo"}>NGO</option>
            </select>

            <div className="row m-3">
               <div className="d-flex ">
                 <a href="/forgot">Forgot password ?</a>
              </div>
              <div className="d-flex ">
                 Already a member ?<a href="/login">Login</a>
              </div>
            </div>

            <button
               onClick={submitSignUp}
               type="submit"
               className="btn btn-primary btn-block mb-4"
              >Sign Up</button>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
