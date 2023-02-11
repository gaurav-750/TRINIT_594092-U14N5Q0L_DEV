import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyNavbar from '../../components/MyNavbar/MyNavbar'

const LoginSignUp = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const uchange = (e) => {
        setUsername(e.target.value);
    }
    const pchange = (e) => {
        setPassword(e.target.value);
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                // "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MjEyMTY0LCJqdGkiOiJjZGE0NDg2YjQ1ZTE0MDY0OWExNzRjZGIxYmJjNDM5NiIsInVzZXJfaWQiOjR9.s0cV5T4iHVuFlWIYvc-WEFxMcVXh9YS6CTzMdSDNnq4"
            },
            body: {
                username,
                password,
            },
            redirect: 'follow'
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
        const data = await axios.post('http://localhost:8000/auth/jwt/create/', {
            username, 
            password,
            },
            {
            headers: {
                // Authorization: 'Bearer ' + varToken
                // 'Access-Control-Allow-Credentials': true
            }
        })

        console.log("data", data);
        // let data2 = JSON.stringify(data);
        if (data.status == 200) {
            localStorage.setItem("token", data.access) 
            // localStorage.setItem("token", data.access_key);

            // const data2 = await axios.post('http://localhost:8000/auth/users/me/', { username, password, },)

            // let data2 = JSON.stringify(data);
            // console.log(data2);

            // redirect
            navigate("/ngo/1");
        }

    }

    return (
        <div>
            <MyNavbar />

            <div className="my-2 d-flex justify-content-center border ">

                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>


                        <h1 className="text-center text-large my-2 mb-4"><b><u>Login</u></b></h1>

                        <div className="form-outline mb-4">
                            <input value={username} onChange={(e) => uchange(e)} type="text" id="loginName" className="form-control" />
                            <label className="form-label" htmlFor="loginName">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input valule={password} onChange={(e) => pchange(e)} type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" for="loginPassword">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="/forgot">Forgot password?</a>
                            </div>
                        </div>

                        <button onClick={submitLogin} type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member? <a href="/signUp">Register</a></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LoginSignUp