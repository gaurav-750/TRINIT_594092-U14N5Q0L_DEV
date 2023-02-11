import React from "react";
import "./apli.css";

function whyPCSBnew() {
  const arr = [
    {
      title: "Detective experience:",
      desc: " The ideal candidate should have prior experience as a detective, or a related field such as law enforcement or private investigation.",
    },
    {
      title: "Analytical skills: ",
      desc: "The ability to analyze complex information and draw conclusions is essential in this role.",
    },
    {
      title: "Problem-solving skills:",
      desc: " The candidate should be able to think creatively and come up with effective solutions to challenges.",
    },
    {
      title: "Discretion: ",
      desc: " The candidate should be able to maintain confidentiality and handle sensitive information with the utmost discretion.",
    },
    {
      title: "Collaboration: ",
      desc: "Working alongside Sherlock Holmes, the candidate should be able to collaborate effectively and contribute to the investigation.",
    },

    {
      title: "Flexibility: ",
      desc: "The candidate should be able to adapt to changing circumstances and be willing to work long hours if necessary.",
    },
    {
      title: "Passion for detective work:",
      desc: " The ideal candidate should have a genuine passion for detective work and a drive to uncover the truth. ",
    },
    {
      title: "Attention to detail:",
      desc: " A keen eye for detail is crucial for success in this role, as small details can often hold the key to solving a mystery.",
    },
  ];
  return (
    <div className="mt-60 ">
      <div className="elements">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="textcheck">
        <h1 className="shop-title" id="why-pcsb">
          <span>Who Should Apply</span>
        </h1>
      </div>
      <div className="align-center flex">
        <div className="ypcsbnew justify-evenly flex-wrap flex md:grid md:grid-cols-2 gap-12 md:mx-auto mt-12">
          {arr.map((member, i) => (
            <div
              key={`member${i}`}
              className="bg-[#04031092] text-cyan-400 w-full max-w-md flex flex-col rounded-lg  shadow-lg p-4 hover:bg-opacity-75 hover:bg-[#0e0b3792] "
            >
              {/* <div className="flex items-center justify-between"> */}
              <div className="flex items-center space-x-4">
                <div className="rounded-full w-4 h-4 border border-cyan-500"></div>
                <div className="text-2xl font-semibold text-left">
                  {member.title}
                </div>
              </div>
              <p className="mt-4 text-gray-200 font-normal text-xl  text-left">
                {member.desc}
              </p>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default whyPCSBnew;
