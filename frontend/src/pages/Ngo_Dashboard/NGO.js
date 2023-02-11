import React, { useEffect, useState } from 'react'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import { useParams } from 'react-router-dom';
const axios = require('axios');
import("./NGO.css");
const ngo_ex_img = require('../../img/home_t_3.jpeg');

const NGO = () => {

    const [currPage, setCurrPage] = useState(1);
    const [city, setCity] = useState("");
    const [data, setData] = useState([
        {
            "id": 1,
            "name": "Sarthak Ngo",
            "impact": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "end_goal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "mission": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "history": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "funding_needed": 100000.0,
            "type": "Charitable",
            "user": 1
        },
        {
            "id": 3,
            "name": "Sneha Ngo",
            "impact": "sed do eiusmod tempor incididunt ut labore et dolore",
            "end_goal": "sed do eiusmod tempor incididunt ut labore et dolore",
            "mission": "sed do eiusmod tempor incididunt ut labore et dolore",
            "history": "sed do eiusmod tempor incididunt ut labore et dolore",
            "funding_needed": 200000.0,
            "type": "Service",
            "user": 2
        }
    ]);

    const onCityChange = (e) => {
        setCity(e.target.value);
        console.log(city, "city");
    }

    const types = [
        {
            "id": 1,
            "title": "Charitable"
        },
        {
            "id": 2,
            "title": "Service"
        },
        {
            "id": 3,
            "title": "CBO"
        },
        {
            "id": 4,
            "title": "National Level"
        }
    ]

    let ngo_dummy_eg = [
        {
            "id": 1,
            "name": "Sarthak Ngo",
            "impact": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "end_goal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "mission": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "history": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "funding_needed": 100000.0,
            "type": "Charitable",
            "user": 1
        },
        {
            "id": 3,
            "name": "Sneha Ngo",
            "impact": "sed do eiusmod tempor incididunt ut labore et dolore",
            "end_goal": "sed do eiusmod tempor incididunt ut labore et dolore",
            "mission": "sed do eiusmod tempor incididunt ut labore et dolore",
            "history": "sed do eiusmod tempor incididunt ut labore et dolore",
            "funding_needed": 200000.0,
            "type": "Service",
            "user": 2
        }
    ]

    var requestOptions = {
        method: 'GET',
        headers: {"Content-Type": "application/json",
        // "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MjEyMTY0LCJqdGkiOiJjZGE0NDg2YjQ1ZTE0MDY0OWExNzRjZGIxYmJjNDM5NiIsInVzZXJfaWQiOjR9.s0cV5T4iHVuFlWIYvc-WEFxMcVXh9YS6CTzMdSDNnq4"
    },
        // body: raw,
        // redirect: 'follow'
        };

    const search = async (e) => {
        // const data = await fetch(`http://localhost:8000/api/ngo/search=${e}`, requestOptions);
        // console.log((data));
    }

    
    const params = useParams();
    useEffect(async () => {
      let pg_no = params.pg_no;
        setCurrPage(pg_no);
        // call pgNo data
        const data2 = await fetch(`http://localhost:8000/api/ngo/?search=`, requestOptions);
        // console.log((data));
        setData(data2);
    }, [])
    

    return (
        <div className="home">
            <MyNavbar />

            <h3 className="text-center my-2">Search NGOs</h3>

            <div className="row my-2 mx-3">

                <div className="input-group mb-3">
                    <input value={city} onChange={onCityChange} type="text" className="form-control" placeholder="Seach by NGO name, City"  aria-describedby="basic-addon2" />
                    <div className="input-group-append  mx-2">
                        <button className="btn btn-primary btn-outline-secondary text-white" type="button" onClick={search(city)}>Search</button>
                    </div>
                </div>

            </div>

            <div className="row mx-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01">Seach By Type</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        {
                            types.map((type)=>{
                                return (<option value={type.title}>{type.title}</option>)
                            })
                        }
                    </select>
                    <div className="input-group-append  mx-2">
                        <button className="btn btn-primary btn-outline-secondary text-white" type="button">Search</button>
                    </div>

                </div>
            </div>

            <h3 className="text-center my-2">See All NGOs</h3>
            
            {/* cards */}
            <div className="row mx-3">

                {data.map((ngo) => {
                    return(
                        <div className="card my-2" style={{width: "100%"}}>
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-sx-4 ">

                                    <img className="card-img" src={ngo_ex_img} alt="Suresh Dasari Card" />  
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-sx-8 ">
                                    <div className="card-body">
                                        <h5 className="card-title"> <b>Name: </b> {ngo.name} </h5>
                                        <p className="card-text"> <b>Funding Needed: </b> {ngo.funding_needed}</p>
                                        <p className="card-text"> <b>Type: </b> {ngo.type}</p>
                                        {/* <p className="card-text"> <b>Mission: </b> {ngo.mission}</p> */}
                                        {/* <p className="card-text"> <b>History: </b> {ngo.history}</p> */}
                                        <a href={`/ngo/profile/${ngo.id}`} className="btn btn-primary">View NGO Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

            {/* pagination */}
            <div className="d-flex flex-row justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only"></span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/ngo/1">1</a></li>
                        <li className="page-item"><a className="page-link" href="/ngo/2">2</a></li>
                        <li className="page-item"><a className="page-link" href="/ngo/3">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only"></span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NGO;