import "./Home.css";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import home_t_1 from "../../img/home_t_1.webp";
import home_t_2 from "../../img/home_t_2.jpg";
import home_t_3 from "../../img/home_t_3.jpeg";
import home_t_4 from "../../img/home_t_4.jpg";
import FieldsofChange from "../../components/FieldsofChange/FieldsofChange";
import Currentstats from "../../components/Currentstats/Currentstats";
import Footerf from "../../components/Footer/Footer";
function Home(props) {
  return (
    <div className="home">
      {/* <h1 className="font-head">Hello</h1> */}
      <Navbar  bg="light" expand="sm" className=" nav-home">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-sm"} />
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-sm"}
              aria-labelledby={"offcanvasNavbarLabel-expand-sm"}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"offcanvasNavbarLabel-expand-sm"}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={"offcanvasNavbarDropdown-expand-sm"}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
      <Carousel>
      {/* search and fund for a cause */}
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 c-img"
          src={home_t_2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className="font-64 font-head text-start font-shadow color-g "><b>Searching and Filtering NGO's</b></h1>
          <h1 className="font-64 font-head text-start font-shadow "><b>made easier.</b></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 c-img"
          src={home_t_3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className="font-64 font-head text-start font-shadow color-g "><b>Interact with your favourite NGO's</b></h1>
          <h1 className="font-64 font-head text-start font-shadow "><b>Know about their Latest News & Events</b></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 c-img"
          src={home_t_4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className="font-64 font-head text-start font-shadow color-g "><b>Real time updates on use of funds</b></h1>
          <h1 className="font-64 font-head text-start font-shadow "><b>& impact of donations.</b></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 c-img" 
          src={home_t_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="font-64 font-head text-start font-shadow color-g "><b>Bringing smiles through</b></h1>
          <h1 className="font-64 font-head text-start font-shadow"><b>Education and Empowerment</b></h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <FieldsofChange />
    <Currentstats />
    <Footerf />
    </div>
  );
}

export default Home;
