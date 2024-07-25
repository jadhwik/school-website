import React from "react";
import Header from "./Header";
import kid from "../assets/images/kid2.png";
import About from "./About";
import Infra from "./Infrastructure";
import ContactUs from "./ContactUs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admission");
  };
  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="overflow-y-scroll h-full">
        <div className="home min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="flex flex-col h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-between flex-grow p-6 lg:p-12 bg-yellow-400 bg-opacity-50">
              <img
                src={kid}
                alt="Kid"
                className="xl:w-full xl:mt-36 md:w-2/3 lg:w-1/2 max-w-2xl mb-6 lg:mb-0 rounded-lg shadow-lg"
              />
              <div className="text-center lg:text-left lg:ml-8 max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  <span className="block">Your Kids</span>
                  <span className="block">Deserve Better</span>
                  <span className="block text-white">Education</span>
                </h1>
                <p className="text-lg md:text-xl mb-6 text-black">
                  Better Learning Environment | Quality Teaching
                </p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg inline-flex items-center transition duration-300"
                  onClick={handleClick}
                >
                  Admission Now
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 ml-2"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Infra />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
