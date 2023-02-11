import "./User_Settings.css";
import { useState, useEffect } from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import { Button, FormGroup, FormControl, ControlLabel,Form} from "react-bootstrap";
import axios from "axios";
function User_Settings(props) {
  const [youremail, updateemail] = useState("abc@gmail.com");
  const [firstname, updatefname] = useState("Yash");
  const [lastname, updatelname] = useState("Patil");
 
  // const [newpass,updatenewpass]=useState("");
  const [token,updatetoken]=useState(localStorage.getitem('token'));

  const Update = async (data1) => {
    // e.preventDefault();
    const data = await axios.post('http://localhost:8000/auth/users/me/', data1,{"headers" : {
      'Authorization': `JWT ${token}`
    }})
  }
  function cemails(){
    const data = {
      "first_name":{firstname},
      "last_name":{lastname},
      "email":{youremail}
    }
    Update(data);
  }

  useEffect (async() => {
    // const data = await axios.get('http://localhost:8000/auth/users/me/');
     const data=axios.get('http://localhost:8000/auth/users/me/', {
      headers: {
        'Authorization': `JWT ${token}`
      }
    })
    updateemail(data.email);
    updatefname(data.first_name);
    updatelname(data.last_name);
  }, []);
  
  return (
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="col-lg-8 col-sm-10">
          <h1 className="font-48 text-head mt-4">Your Profile!</h1>
          <Form>
          <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="email" value={firstname} onChange={(e)=>{updatefname(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="email" value={lastname} onChange={(e)=>{updatelname(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={youremail} onChange={(e)=>{updateemail(e.target.value)}} />
            </Form.Group>
            
            <Button variant="primary" onClick={cemails}>
              Update Details
            </Button>
            {/* <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>{updatenewpass(e.target.value)}}/>
              <Form.Label>Re-Enter New Password</Form.Label>
              <Form.Control type="password" placeholder="Re Enter Password" onChange={(e)=>{updatenewpassr(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" onClick={cepass}>
              Submit
            </Button> */}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default User_Settings;
