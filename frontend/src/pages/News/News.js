import "./News.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyNavbar from "../../components/MyNavbar/MyNavbar";

const News = () => {
  const [allnews, updateallnews] = useState([
    {
      id: 2,
      author: {
        id: 4,
        first_name: "Gaurav",
        last_name: "Somani",
        email: "gauravsomani52750@gmail.com",
      },
      title: "First Post",
      description: "Hello World!\r\nThis is my first post.",
      image:
        // "https://drive.google.com/file/d/133864fR2HY66Je_LC_UJKjjga7wK1Z6-/view?usp=sharing",
        "https://i.pinimg.com/736x/2a/8c/ae/2a8cae6fbcb5b4acced6564c737ba41c.jpg",
    },
  ]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function setmydata() {
      const data1 = await axios.get("http://localhost:8000/api/blog", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      console.log(data1.data);
      updateallnews(data1.data);
      // console.log(lastname, firstname, youremail);
      // const data = await axios.get('http://localhost:8000/auth/users/me/');
    }
    setmydata();
  }, []);

  return (
    <div>
      <MyNavbar />
      <div className="d-flex justify-content-center align-items-center text-center flex-column">
        <div className="col-lg-10 col-md-10 col-sm-11 col-sx-11 col-11 d-flex flex-row">
          {allnews.map((news) => {
            return (
              <div className="news m-3 bg-grey p-2 d-flex flex-column br-20">
                <img
                  className="d-block img-news my-3 br-20"
                  src={news.image}
                  alt="Second slide"
                />
                <h1 className="h-366 font-head p-20">
                  <b>{news.title}</b>
                </h1>
                <h4 className="h-366 font-head p-20">
                  <b>
                    --{news.author.first_name} {news.author.last_name}
                  </b>
                </h4>
                <h5 className="h-366 font-head p-20 mt-2">
                  <b>--{news.description}</b>
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
