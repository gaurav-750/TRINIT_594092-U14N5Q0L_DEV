import React, { useEffect, useState } from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import { useParams } from "react-router-dom";
import trop from "../../img/trophy-svgrepo-com.svg";
import fund from "../../img/funding.svg";
import miss from "../../img/mission.svg";
import goal from "../../img/goal-svgrepo-com.svg";
import hist from "../../img/history-svgrepo-com.svg";
import("./NGO_Profile.css");
const NGO_Profile = () => {
  const [Pageno, setCurrPage] = useState(1);
  const [data, setdata] = useState({
    id: 1,
    name: "Sarthak Ngo",
    impact:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    end_goal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    mission:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    history:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    funding_needed: 100000.0,
    type: "1",
    user: 1,
    city: "Pune",
  });
  const params = useParams();
  useEffect(() => {
    let pg_no = params.pg_no;
    setCurrPage(pg_no);
    // call pgNo data

    //received from pgno data
  }, []);
  return (
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="col-lg-8 col-sm-10">
          <h1 className="font-48-ngo font-head">{data.name}</h1>
          <div className="d-flex flex-column justify-content-center align-items center">
            <div className="data-fields d-flex flex-row c1 m-3">
              <img
                className="d-block img-l m-2"
                src={trop}
                alt="Second slide"
              />
              <div className="w-100 d-flex flex-column marr-l-5">
                <h1 className="font-32-ngo">Impact</h1>
                <h4>{data.impact}</h4>
              </div>
            </div>
            <div className="data-fields d-flex flex-row c2 m-3">
              <img
                className="d-block img-l m-2"
                src={goal}
                alt="Second slide"
              />
              <div className="w-100 d-flex flex-column marr-l-5">
                <h1 className="font-32-ngo">End Goal</h1>
                <h4>{data.end_goal}</h4>
              </div>
            </div>
            <div className="data-fields d-flex flex-row c3 m-3">
              <img
                className="d-block img-l m-2"
                src={miss}
                alt="Second slide"
              />
              <div className="w-100 d-flex flex-column marr-l-5">
                <h1 className="font-32-ngo">Mission</h1>
                <h4>{data.mission}</h4>
              </div>
            </div>
            <div className="data-fields d-flex flex-row c4 m-3">
              <img
                className="d-block img-l m-2"
                src={hist}
                alt="Second slide"
              />
              <div className="w-100 d-flex flex-column marr-l-5">
                <h1 className="font-32-ngo">History</h1>
                <h4>{data.history}</h4>
              </div>
            </div>
            <div className="data-fields d-flex flex-row c2 m-3">
              <img
                className="d-block img-l m-2"
                src={fund}
                alt="Second slide"
              />
              <div className="w-100 d-flex flex-column marr-l-5">
                <h1 className="font-32-ngo">Funding needed</h1>
                <h4>{data.funding_needed} Inr</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGO_Profile;
