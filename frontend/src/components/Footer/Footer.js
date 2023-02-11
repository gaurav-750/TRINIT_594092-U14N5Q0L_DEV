import "./Footer.css";
import tw from "../../img/tw.png";
import insta from "../../img/insta.png";
import lin from "../../img/lin.png";
import fb from "../../img/fb.png";
function Footerf(props) {
  return (
    <div className="footerf pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">
        <div className=" col-xl-8 col-sm-11 ">
            <div className="pb-5">
                <h1 className="font-48 mb-4">Connect with Us</h1>
                <div className="d-flex flex-row justify-content-center">
                    <div className="logo-f-img-d m-2">
                    <img
                    className="d-block w-100 logo-f-img" 
                    src={tw}
                    />
                    </div>
                    <div className="logo-f-img-d m-2">
                    <img
                    className="d-block w-100 logo-f-img" 
                    src={fb}
                    />
                    </div>
                    <div className="logo-f-img-d m-2">
                    <img
                    className="d-block w-100 logo-f-img" 
                    src={insta}
                    />
                    </div>
                    <div className="logo-f-img-d m-2">
                    <img
                    className="d-block w-100 logo-f-img" 
                    src={lin}
                    />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row last-f">
                <div className="div-f-l">
                    <h5 className="c-w">
                        Address:
                    </h5>
                    <h6>
                    SCTR'S Pune Institute of Computer Technology
                    </h6>
                    <h6>
                    Survey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043
                    </h6>
                </div>
                <div className="div-f-r">
                <h5 className="c-w">
                    Contact-Us:
                    </h5>
                    <h6>
                    Survey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043
                    </h6>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Footerf;
