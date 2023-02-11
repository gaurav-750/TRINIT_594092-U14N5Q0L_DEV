import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-600 bg-opacity-20 p-2">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/*           
          <a
            href="#search"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </a> */}
          {/* <a
            href="#sherlock"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 font-fancy"
          >
            Sherlock Holmes
          </a> */}
        </div>
        <div></div>
      </div>
      <a
        href="/profile"
        className="inline-block text-sm px-3 mr-4 py-2 leading-none rounded text-white border-white  hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
      // className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 hover:shadow-2xl hover:shadow-white"
      >
        <svg  
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
        </svg>
      </a>
      <div>
        <button
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
