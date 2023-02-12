import React, { useEffect, useState } from 'react'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import { useParams } from 'react-router-dom';
import axios, { all } from 'axios';
import("./NGO.css");
const ngo_ex_img = require('../../img/home_t_3.jpeg');

const NGO = () => {

    const [loading, setLoading] = useState(true);
    const [searchTxt, setSearchTxt] = useState('');
    const [searchType, setSearchType] = useState('');
    const [types, setTypes] = useState([]);
    const [ngo_dummy_eg, set_ngo_dummy_eg] = useState([]);
    
    const params = useParams();

    useEffect(() => {
        async function setmydata(){

            setLoading(true);
            const dpdownlist = await axios.get("http://localhost:8000/api/type/");
            setTypes(dpdownlist.data);

            const allsearchres = await axios.get(`http://localhost:8000/api/ngo/?page=${params.pg_no}`);
            // const allsearchres = await axios.get("http://localhost:8000/api/ngo/");
            console.log("allsearchres", allsearchres.data);
            set_ngo_dummy_eg(allsearchres.data.results);
            // call pgNo data
            setLoading(false);
        }
        setmydata();
    }, [])

    const search = async (e) => {
        // e.preventDefault();
        console.log(searchTxt,"searchTxt");
        const all_search_res = await axios.get(`http://localhost:8000/api/ngo/?page=1&search=${searchTxt}`);
        set_ngo_dummy_eg(all_search_res.data.results);
    }

    
    const searchonType = async (e) => {
        // e.preventDefault();
        console.log("searchType",searchType);
        const all_search_res = await axios.get(`http://localhost:8000/api/ngo/?type=${searchType}`);
        console.log("all_serach_res", all_search_res.data.results);
        set_ngo_dummy_eg(all_search_res.data.results);
    }

    if(loading){
        return <>Loading...</>
    }
    
    return (
        <div className="home">
            <MyNavbar />

            <h3 className="text-center my-2">Search NGOs</h3>

            <div className="row my-2 mx-3">

                <div className="input-group mb-3">
                    <input value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}} type="text" className="form-control" placeholder="Seach by NGO name, City"  aria-describedby="basic-addon2" />
                    <div className="input-group-append  mx-2">
                        <button className="btn btn-primary btn-outline-secondary text-white" type="button" onClick={(e)=>search()}>Search</button>
                    </div>
                </div>

            </div>

            <div className="row mx-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01">Seach By Type</label>
                    </div>
                    <select name={searchType} value={searchType} onChange={(e)=>{console.log("searchType innn", e.target.value);setSearchType(e.target.value)}}  className="custom-select" id="inputGroupSelect01">
                        {
                            types.map((type)=>{
                                return (<option key={type.id} value={type.id} onChange={(e)=>{console.log("searchType innn", e.target.value);setSearchType(e.target.value)}} >{type.title}</option>)
                            })
                        }
                    </select>
                    <div className="input-group-append  mx-2">
                        <button className="btn btn-primary btn-outline-secondary text-white" type="button" onClick={searchonType}>Search</button>
                    </div>

                </div>
            </div>

            <h3 className="text-center my-2">See All NGOs</h3>
            
            {/* cards */}
            <div className="row mx-3">

                {ngo_dummy_eg.map((ngo) => {
                    return(
                        <div className="card my-2"  style={{width: "100%"}}>
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-sx-4 ">

                                    <img className="card-img" src={ngo_ex_img} alt="Suresh Dasari Card" />  
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-sx-8 ">
                                    <div className="card-body">
                                        <h5 className="card-title"> <b>Name: </b> {ngo.name} </h5>
                                        <p className="card-text"> <b>Funding Needed: </b> {ngo.funding_needed}
                                        <br />
                                        <b>Type: </b> {ngo.type}
                                        
                                        </p>
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