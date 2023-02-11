import React, { useEffect } from 'react';
import { redirect, useNavigate } from "react-router-dom";
const r1 = require("../static/images/r1.jpg");

const Game = () => {
    // const navigation = useNavigate();

// useEffect(() => {
//     let attempts = 3;
//     while(attempts > 0){
//         let foo = prompt(`Attempts Left: ${attempts} \n Qn Here`);
//         var conf = windows.confirm('Is your name: ' + name);
//         if(conf == true){
//             if(foo == "MyAns"){

//                 // windows.replace('/hell')
//                 // window.location = "http://www.youtuube.com";
//                 // console.log(foo, bar);   
//                 return redirect("/login");
//                 // navigation('/login');

//             }else{
//                 attempts = attempts - 1;

//                 if(attempts == 0){
//                     // windows.close();
//                 }
//             }
//         }
//     }
//     if(attempts <= 0){
//         // windows.close();
//     }
// }, [])
    


  return (
    // <div className="w-full mx-auto  border border-gray-200 rounded mb-2">
    <div className='min-h-screen bg-[#340404] min-h-full justify-center align-items-center' >

        {/* <div className="hero container min-w-full mx-auto flex justify-center"> */}
        <div className="hero container min-w-screen mx-auto flex justify-center">
            <img src={r1} alt="img" />
        </div>

        <br />

        <div className="hero container min-w-screen mx-auto flex justify-center">

            <button className="bg-transparent hover:bg-red-500 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 text-red-700 font-semibold hover:text-white py-2 px-4 mx-2 my-2 border border-red-500 hover:border-transparent rounded ">
                I. Pregnant Lady
            </button>
            <button className="bg-transparent hover:bg-red-500 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 text-red-700 font-semibold hover:text-white py-2 px-4 mx-2 my-2 border border-red-500 hover:border-transparent rounded ">
                II. Small Kid
            </button>
            <br />
            <button className="bg-transparent hover:bg-red-500 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 text-red-700 font-semibold hover:text-white py-2 px-4 mx-2 my-2 border border-red-500 hover:border-transparent rounded ">
                III. Kid's Mother
            </button>
            <button className="bg-transparent hover:bg-red-500 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 text-red-700 font-semibold hover:text-white py-2 px-4 mx-2 my-2 border border-red-500 hover:border-transparent rounded ">
                IV. Standby man
            </button>

        </div>
    </div>
  )
}

export default Game