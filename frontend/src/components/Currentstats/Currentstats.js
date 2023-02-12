import "./Currentstats.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Currentstats(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center current-s">
        <div className="current-s mt-5 pb-5 text-center d-flex flex-column justify-content-center align-items-center col-xl-8 col-lg-11 col-sm-11">
        {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
        <div className="mt-5 mb-5">
        <h1 className="font-head font-48">
          <b>Our Impact , Our Reach</b>
        </h1>
      </div>
    {/* </AnimationOnScroll> */}

    
        <div className="cards-cs d-flex flex-row f-wrap">
            <div className="card-cs m-4">
                <h1 className="num font-head">
                    1500+
                </h1>
                <h1 className="font-48-cs">
                    Philanthropists
                </h1>
                <h5>are currently connected with us.</h5>
            </div>
            <div className="card-cs m-4">
                <h1 className="num font-head">
                    18+
                </h1>
                <h1 className="font-48-cs">
                    Lac
                </h1>
                <h5>funds raised through (our website)</h5>
            </div>
            <div className="card-cs m-4">
                <h1 className="num font-head">
                    300+
                </h1>
                <h1 className="font-48-cs">
                    NGO's
                </h1>
                <h5>registered and updated their latest events</h5>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Currentstats;
