import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyNavbar from '../../components/MyNavbar/MyNavbar'

const RegisterNgo = () => {
    const [formValue, setFormValue] = useState({
        "name": "",
        "impact": "",
        "end_goal": "",
        "mission": "",
        "history": "",
        "funding_needed": null,
        "type": 1,
        "city": ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };

    const submitform = async (e) => {
        // e.preventDefault();
        console.log("formValue", formValue);
        const data = await axios.post('http://localhost:8000/api/ngo/', formValue,)

        console.log(data);
        if (data.status == 200) {
            navigate("/ngo/1");
        }

    }

  return (
    <div className="">
          <MyNavbar />
          <h1 className="text-center ">
                Register Your NGO
          </h1>
        
            <div className="form-group mx-3 border px-3 py-3">
                <label for="email">Name:</label>
                <input name="name" value={formValue.name} onChange={(e)=>{handleChange(e)}} type="text" className="form-control mx-2 my-2" id="email" />
                <label for="pwd">Impact:</label>
                <input name="impact" value={formValue.impact} onChange={(e)=>{handleChange(e)}} type="text" className="form-control mx-2 my-2" id="pwd" />
                <label for="email">Endgoal:</label>
                <input name="end_goal" value={formValue.end_goal} onChange={(e)=>{handleChange(e)}} type="text" className="form-control mx-2 my-2" id="email1" />
                <label for="pwd">Mission:</label>
                <input name="mission" value={formValue.mission} onChange={(e)=>{handleChange(e)}} type="text" className="form-control mx-2 my-2" id="pwd1" />
                <label for="email">History:</label>
                <input name="history" value={formValue.history} onChange={(e)=>{handleChange(e)}} type="text" className="form-control mx-2 my-2" id="email11" />
                <label for="pwd">Funding needed:</label>
                <input name="funding_needed" value={formValue.funding_needed} onChange={(e)=>{handleChange(e)}} type="number" className="form-control mx-2 my-2" id="11" />
                <label for="email">Type:</label>
                <input name="type" value={formValue.type} onChange={(e)=>{handleChange(e)}} type="number" className="form-control mx-2 my-2" id="ema11il" />
                <label for="pwd">City:</label>
                <input name="city" value={formValue.city} onChange={(e)=>{handleChange(e)}} type="text" className="form-control mx-2 my-2" id="pwd" />
                <button type="submit" className="btn btn-primary" onClick={() => submitform()} >Submit</button>
            </div>


    </div>
  )
}

export default RegisterNgo