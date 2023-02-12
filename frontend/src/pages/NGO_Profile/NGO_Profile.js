import React, { useEffect, useState } from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import { useParams } from "react-router-dom";
import trop from "../../img/trophy-svgrepo-com.svg";
import fund from "../../img/funding.svg";
import miss from "../../img/mission.svg";
import goal from "../../img/goal-svgrepo-com.svg";
import hist from "../../img/history-svgrepo-com.svg";
import axios from "axios";
import("./NGO_Profile.css");
const NGO_Profile = () => {
  const [Pageno, setCurrPage] = useState(1);
  const [ngoData, setNgoData] = useState({
    "id": 1,
    "name": "",
    "impact": "",
    "end_goal": "",
    "mission": "",
    "history": "",
    "funding_needed": 0,
    "type": "",
    // "user": 1,
    "city": ""
})


  const params = useParams();
  useEffect(() => {

      let pg_no = params.pg_no;
      setCurrPage(pg_no);

      async function getData(){
        const data = await axios.get(`http://localhost:8000/api/ngo/${params.pg_no}`);
        console.log("data ", data.data);
        setNgoData(data.data);

      }
      getData();
    // call pgNo data

    //received from pgno data
  }, []);
  return (
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="col-lg-8 col-sm-10">
          <h1 className="font-48-ngo font-head">{ngoData.name}</h1>
          <div className="d-flex flex-column justify-content-center align-items center">
            <div className="data-fields d-flex flex-row c1 m-3">
              <img
                className="d-block img-l m-2"
                src={trop}
                alt="Second slide"
              />
              <div className="w-100 d-flex flex-column marr-l-5">
                <h1 className="font-32-ngo">Impact</h1>
                <h4>{ngoData.impact}</h4>
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
                <h4>{ngoData.end_goal}</h4>
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
                <h4>{ngoData.mission}</h4>
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
                <h4>{ngoData.history}</h4>
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
                <h4>{ngoData.funding_needed} INR</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGO_Profile;
