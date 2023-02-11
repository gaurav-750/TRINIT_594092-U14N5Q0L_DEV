import "./LoginSignUp.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../../components/MyNavbar/MyNavbar";

const LoginSignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const uchange = (e) => {
    setUsername(e.target.value);
  };
  const pchange = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        // "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MjEyMTY0LCJqdGkiOiJjZGE0NDg2YjQ1ZTE0MDY0OWExNzRjZGIxYmJjNDM5NiIsInVzZXJfaWQiOjR9.s0cV5T4iHVuFlWIYvc-WEFxMcVXh9YS6CTzMdSDNnq4"
      },
      body: {
        username,
        password,
      },
      redirect: "follow",
    };

    // const data = await fetch("http://localhost:8000/auth/jwt/create/", requestOptions);
    console.log("sefsf", {
      username,
      password,
    });
    // const data = await axios({
    //     method: 'post',
    //     url: "http://localhost:8000/auth/jwt/create/",
    //     body: {
    //         username,
    //         password,
    //     },
    //     withCredentials: true,
    // });
    const data = await axios.post(
      "http://localhost:8000/auth/jwt/create/",
      {
        username,
        password,
      },
      {
        headers: {
          // Authorization: 'Bearer ' + varToken
          // 'Access-Control-Allow-Credentials': true
        },
      }
    );

    // console.log("data", data);
    // let data2 = JSON.stringify(data);
    if (data.status == 200) {
      localStorage.setItem("token", data.access);
      // localStorage.setItem("token", data.access_key);

      const data = await axios.post("http://localhost:8000/auth/users/me/", {
        username,
        password,
      });

      // let data2 = JSON.stringify(data);
      console.log(data);

      // redirect
      navigate("/ngo/1");
    }
  };
  return(
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center text-center flex-column">
        
        <div className="col-lg-6 col-md-8 col-sm-10 col-sx-10 col-10">
          <h1 className="font-48 text-head m-4 text-center">Login !</h1>

            <div className="form-outline m-3">
            <div className="form-outline m-3">
              <input
                value={username}
                name="email"
                onChange={(e) => setUsername(e)}
                type="email"
                id="loginName"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="form-outline m-3">
              <input
                value={password}
                name="password"
                onChange={(e) => setPassword(e)}
                type="password"
                id="loginPassword"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="row m-3">
               <div className="d-flex ">
                 <a href="/forgot">Forgot password ?</a>
              </div>
              <div className="d-flex ">
                 Not a member ?<a href="/signUp">Register</a>
              </div>
            </div>

            <button
               onClick={submitLogin}
               type="submit"
               className="btn btn-primary btn-block mb-4"
              >Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
