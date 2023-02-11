import "./User_Settings.css";
import { useState } from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import { Button, FormGroup, FormControl, ControlLabel,Form} from "react-bootstrap";
function User_Settings(props) {
  const [youremail, updateemail] = useState("abc@gmail.com");
  const [newemail,updatenewemail]=useState("");
  const [newpass,updatenewpass]=useState("");
  const [newpassr,updatenewpassr]=useState("");

  function cemails(){
    if(newemail==youremail){
      alert("You've entered the same email id.");
    }
    else{
      //api call
    }
  }
  function cepass(){
    if(newpass!=newpassr){
      alert("Passwords dont Match!");
    }
    else{
      //api call
    }
  }
  return (
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="col-lg-8 col-sm-10">
          <h1 className="font-48 text-head mt-4">Your Profile!</h1>
          <h6 className="mt-4">Your Email : </h6>
          <h6>{youremail}</h6>

          <Form>
            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Label>New Email</Form.Label>
              <Form.Control type="email" value={newemail} onChange={(e)=>{updatenewemail(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" onClick={cemails}>
              Change-email
            </Button>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New-Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>{updatenewpass(e.target.value)}}/>
              <Form.Label>Re-enter New Password</Form.Label>
              <Form.Control type="password" placeholder="Re Enter Password" onChange={(e)=>{updatenewpassr(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" onClick={cepass}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default User_Settings;
