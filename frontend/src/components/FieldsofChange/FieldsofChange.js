import "./FieldsofChange.css";
import edu from "../../img/edu.webp";
import healthcare from "../../img/healthcare.webp";
import liveli from "../../img/liveli.webp";
import women from "../../img/women.webp";
function FieldsofChange(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="foc mt-5 mb-5 text-center d-flex flex-column justify-content-center align-items-center col-xl-8 col-lg-11 col-sm-11">
      <div className="mt-5 mb-5">
        <h1 className="font-head font-48">
          <b>Fields of Change</b>
        </h1>
      </div>

      <div className="fields d-flex flex-row f-wrap">
        <div className="field mt-4 mb-4">
          <img className="d-block img-pop" src={edu} alt="First slide" />
          <div className="d-flex flex-column ml-2 field-r">
            <h1 className="font-head font-36 tl color-1">
              <b><u>Education</u></b>
            </h1>
            <span className="tl">Education, nutrition and holistic development of children</span>
          </div>
        </div>
        <div className="field mt-4 mb-4">
          <img className="d-block img-pop" src={women} alt="First slide" />
          <div className="d-flex flex-column ml-2 field-r">
            <h1 className="font-head font-36 tl color-2">
              <b><u>Women Empowerment</u></b>
            </h1>
            <span className="tl">Empowering adolescent girls & women through community engagement</span>
          </div>
        </div>
        <div className="field mt-4 mb-4">
          <img className="d-block img-pop" src={healthcare} alt="First slide" />
          <div className="d-flex flex-column ml-2 field-r">
            <h1 className="font-head font-36 tl color-3">
              <b><u>Healthcare</u></b>
            </h1>
            <span className="tl">Taking healthcare services to doorsteps of hard to reach communities</span>
          </div>
        </div>
        <div className="field mt-4 mb-4">
          <img className="d-block img-pop" src={liveli} alt="First slide" />
          <div className="d-flex flex-column ml-2 field-r">
            <h1 className="font-head font-36 tl color-4">
              <b><u>Livelihood</u></b>
            </h1>
            <span className="tl">Skill training and placement support for underprivileged youth</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default FieldsofChange;
