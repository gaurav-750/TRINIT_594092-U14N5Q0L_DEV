import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import home_t_1 from "../../img/home_t_1.webp";
import home_t_2 from "../../img/home_t_2.jpg";
import home_t_3 from "../../img/home_t_3.jpeg";
import home_t_4 from "../../img/home_t_4.jpg";
import FieldsofChange from "../../components/FieldsofChange/FieldsofChange";
import Currentstats from "../../components/Currentstats/Currentstats";
import Footerf from "../../components/Footer/Footer";
import MyNavbar from "../../components/MyNavbar/MyNavbar";

function Home(props) {
  return (
    <div className="home">
      {/* <h1 className="font-head">Hello</h1> */}
      <MyNavbar />

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
