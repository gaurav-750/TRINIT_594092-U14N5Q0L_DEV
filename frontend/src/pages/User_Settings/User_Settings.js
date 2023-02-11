import "./User_Settings.css";
import { useState } from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import { Button, FormGroup, FormControl, ControlLabel,Form} from "react-bootstrap";
function User_Settings(props) {
  
  return (
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="col-lg-8 col-sm-10">
          <h1 className="font-48 text-head mt-4">Your Profile!</h1>
          <h6 className="mt-4">Your Email : </h6>
          <h6>yashp9145@gmail.com</h6>

          <Form>
            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Label>New Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Change-email
            </Button>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New-Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
              <Form.Label>Re-enter New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default User_Settings;
