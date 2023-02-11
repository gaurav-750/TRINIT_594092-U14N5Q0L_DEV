import "./User_First.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

function User_First(props) {
    const [fields,ufields] = useState([{'title':'abc'},{'title':'abc'},{'title':'abc'},{'title':'abc'},{'title':'abc'},{'title':'abc'}]);

    
  return (
    <div>
        {
            fields.map((field)=>{
                return 
            })
        }
    </div>
    
  );
}

export default User_First;
