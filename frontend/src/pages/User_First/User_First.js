import "./User_First.css";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
} from "react-bootstrap";
import { useState } from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import { useNavigate } from "react-router-dom";
function User_First(props) {
  const [fields, ufields] = useState([
    { id: "1", title: "Charitable" },
    { id: "2", title: "National Level" },
    { id: "3", title: "CBO" },
    { id: "4", title: "Service" },
    { id: "5", title: "XYZ" },
    { id: "6", title: "ABC" },
  ]);
  const navigate = useNavigate();

  function select(dj) {
    // call api
    console.log(dj);
    document.getElementById(`id-${dj}`).classList.add("selected");
  }

  return (
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center text-center flex-column">
        <div className="col-lg-8 col-sm-12">
          <h1 className="font-48 text-head m-4">Thankyou for Signing Up!</h1>
          <h5>Please select your NGO preferance below...</h5>
          <h6>Once selected cannot be de-selected.</h6>
          <div className="d-flex flex-row f-w">
            {fields.map((field) => {
              const z = Math.floor(Math.random() * 4 + 1);
              return (
                <div
                  className={"dabba p-5 m-3 c" + z}
                  onClick={() => {
                    select(field.id);
                  }}
                  id={"id-" + field.id}
                >
                  <h1>{field.title}</h1>
                </div>
              );
            })}
          </div>
          <Button onClick={() => navigate("/ngo/1")}>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default User_First;
