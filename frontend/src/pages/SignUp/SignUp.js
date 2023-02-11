import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyNavbar from '../../components/MyNavbar/MyNavbar';

const SignUp = () => {
    const [formValue, setFormValue] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })

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
        const data = await axios.post('http://localhost:8000/auth/users/', { ...formValue, is_phalanthropist: dpdown == "Philanthropist" },)

        // let data2 = JSON.stringify(data);
        console.log(data);
        if (data.status == 200) {
            // localStorage.setItem("token", data.access) 
            // if(dpdown == "Philanthropist"){
            //     navigate("/user_new");
            // }else{
            //     navigate("/ngo/1");
            // }
            navigate("/login");
            // localStorage.setItem("token", data.access_key);

            // redirect
        }

    }

    return (
        <div>
            <MyNavbar />

            <div className="my-2 d-flex justify-content-center border   ">

                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>


                        <h1 className="text-center text-large my-2 mb-4"><b><u>Login</u></b></h1>

                        <div className="form-outline mb-4">
                            <input value={formValue.first_name} name="first_name" onChange={(e) => handleChange(e)} type="text" id="loginName" className="form-control" />
                            <label className="form-label" for="loginName">First Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input value={formValue.last_name} name="last_name" onChange={(e) => handleChange(e)} type="text" id="loginName" className="form-control" />
                            <label className="form-label" for="loginName">Last Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input value={formValue.username} name="username" onChange={(e) => handleChange(e)} type="text" id="loginName" className="form-control" />
                            <label className="form-label" for="loginName">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input value={formValue.email} name="email" onChange={(e) => handleChange(e)} type="email" id="loginName" className="form-control" />
                            <label className="form-label" for="loginName">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input value={formValue.password} name="password" onChange={(e) => handleChange(e)} type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" for="loginPassword">Password</label>
                        </div>

                        <select value={dpdown} onChange={(e) => { setDpdown(e.target.value) }} className="form-select" aria-label="Default select example">
                            <option selected>Type Of User</option>
                            <option value={"Philanthropist"}>Philanthropist</option>
                            <option value={"Ngo"}>NGO</option>
                        </select>


                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="/forgot">Forgot password?</a>
                            </div>
                        </div>

                        <button onClick={submitSignUp} type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>

                        <div className="text-center">
                            <p>Already a member? <a href="/login">Login</a></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SignUp;