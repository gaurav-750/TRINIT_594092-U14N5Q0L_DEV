import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyNavbar from '../../components/MyNavbar/MyNavbar';

const RegisterNews = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const navigate = useNavigate();

    const uchange = (e) => {
        setUsername(e.target.value);
    }
    const pchange = (e) => {
        setPassword(e.target.value);
    }

    const pchange2 = (e) => {
        setPassword2(e.target.value);
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        // var requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         // "Access-Control-Allow-Credentials": true,
        //         "Authorization": `JWT ${localStorage.getItem('token')}`
        //     },
        //     body: {
        //         username,
        //         password,
        //     },
        //     redirect: 'follow'
        // };

        // const data = await fetch("http://localhost:8000/auth/jwt/create/", requestOptions);

        const data = await axios.post('http://localhost:8000/api/blog/', {
                title: username, 
                description: password,
                image: password2,
            },
            {
                headers: {
                    // Authorization: 'Bearer ' + varToken
                    "Authorization": `JWT ${localStorage.getItem('token')}`
                    // 'Access-Control-Allow-Credentials': true
                }
            }
        )

        // console.log("data", data);
        
        if (data.status == 200) {
            // redirect
            navigate("/ngo/1");
        }

    }



  return (
    <div>
        <MyNavbar />

        <div className="my-2 d-flex justify-content-center border ">

            <div className="tab-pane fade show active col-lg-6 col-md-8 col-sm-10 col-sx-10 col-10 border mx-2 my-2 px-2 py-2" id="pills-login" role="tabpanel" aria-labelledby="tab-login">

                    <h1 className="text-center text-large my-2 mb-4"><b><u>Post News</u></b></h1>
                    
                        <div className="form-outline mb-4">
                            <input value={username} onChange={(e) => uchange(e)} type="text" id="loginName" className="form-control" />
                            <label className="form-label" htmlFor="loginName">Title</label>
                        </div>

                        <div className="form-outline mb-4">
                            <textarea value={password} onChange={(e) => pchange(e)} type="text" id="loginPass24word" className="form-control" />
                            <label className="form-label" for="loginPass24word">Description</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input value={password2} onChange={(e) => pchange2(e)} type="text" id="loginPasswor325rtd" className="form-control" />
                            <label className="form-label" for="loginPasswor325rtd">Image Link</label>
                        </div>

                    <button onClick={submitLogin} type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            </div>

        </div>
</div>
  )
}

export default RegisterNews