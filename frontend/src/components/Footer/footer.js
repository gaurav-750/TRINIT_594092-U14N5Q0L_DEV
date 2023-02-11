import React from "react";
import Detective from "../../static/images/detective2.jpg";
import { Link } from "react-router-dom";
import logo from "./baker.png"
import "../preloader/Preloader.css";

function footer() {
  return (
    <div className="yfooter">
      <div className=" w-full flex justify-center text-center p-4 py-8 md:py-16 md:px-12 bg-gradient-to-br from-blue-600/20 via-blue-400/20 to-black backdrop-blur-lg">
        <div className="grid md:grid-cols-3">
          <a
            href="https://www.pictcsi.com/ "
            target="_blank"
            rel="noreferrer"
            className="w-full h-full flex justify-center items-center"
          >
            <div className="w-full h-full flex justify-center items-center">
              <img
                // lg:h-[280px] lg:w-[450px] h-[140px] w-[265px]
                className="mx-auto lg:w-[50rem] h-[350px] w-[400px] object-contain"
                src={logo}
                alt="logo"
              ></img>
            </div>
          </a>

          <div className=" col-span-2 pt-4 px-4 py-4 md:p-16 bg-black/20 text-white text-sm md:text-base">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ">
              <div className="w-full space-y-4">
                <div className="font-bold pb-2 border-b border-gray-400 text-cyan-400">
                  PICT CSI STUDENT BRANCH
                </div>
                <div className=" font-medium flex flex-col space-y-1">
                  <Link to="/about">About Us</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
              <div className="w-full space-y-4">
                <div className="font-bold pb-2 border-b border-gray-400 text-cyan-400">
                  Events
                </div>
                <div className="space-y-2">
                  <div className=" font-medium">
                    <a
                      href="https://www.pcsbxenia.com/"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="hover:text-cyan-200"
                    >
                      XENIA
                    </a>
                    {/* <Link to="https://www.pcsbxenia.com/">XENIA</Link> */}
                  </div>
                  <div className=" font-medium">
                    <a
                      href="https://www.xeniaverse.co.in/"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="hover:text-cyan-200"
                    >
                      XENIAVERSE
                    </a>
                    {/* <Link to="https://www.xeniaverse.co.in/">XENIAVERSE</Link> */}
                  </div>
                  {/* <div className=" font-medium">
                    <Link to="/profile">PSEUDOCODE</Link>
                  </div> */}
                </div>
              </div>
              {/* <div className="w-full space-y-4">
                <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                  Useful Links
                </div>
                <div className="space-y-2">
                  <div className=" font-thin">
                    <Link to="/auth">Login</Link>
                  </div>
                  <div className=" font-thin">
                    <Link to="/contact-us">Help</Link>
                  </div>
                </div>
              </div> */}
              <div className="w-full space-y-4 text-center ">
                <div className="font-bold pb-2 border-b border-gray-400 text-cyan-400 ">
                  Contact
                </div>
                <div className="space-y-2 text-center grid grid-col-1 justify-center">
                  <div className=" font-medium flex space-x-2">
                    <div>🏠</div>
                    <a
                      href="https://goo.gl/maps/XNZ8QTqTK2SXzztq7"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      Dhankawadi,Katraj,Pune
                    </a>
                  </div>
                  <div className=" font-medium space-x-2 flex">
                    <div>📭︎</div>
                    <a href="mailto:support@pictcsi.com">support@pictcsi.com</a>
                  </div>
                  <div className=" font-medium space-x-2 flex">
                    <div>📞</div>
                    <a href="tel:9579345348">+919579345348</a>
                  </div>
                </div>
              </div>
            </div>
            <p className="inline mt-8">
              &copy; {new Date().getFullYear()} PICT CSI Student Branch.
              Designed & Developed with ♥ by{" "}
              <Link
                to="/web-team"
                className="text-violet-400 hover:text-md hover:text-cyan-400"
              >
                PCSB Web Team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
