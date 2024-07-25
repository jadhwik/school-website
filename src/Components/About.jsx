import React from "react";
import kids from "../assets/images/kids.jpeg";
import Princi from "../assets/images/principal.png";

const About = () => {
  return (
    <div className="bg-gray-200 m-3 bg-opacity-75 rounded-md p-6">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <img
          src={kids}
          className="w-full lg:w-1/2 rounded-lg shadow-lg mb-6 lg:mb-0"
          alt="Kids"
        />
        <div>
          <p className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold mb-4">
            About Guardian
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-6">
            Founded in 1985, Guardian Public School has been dedicated to
            providing quality education and holistic development to students.
            Empowers students educational vision along with extra curricular
            activities.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold mb-4">
            Vision
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-6">
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold mb-4">
            Mission
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-800">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-12">
        <img
          src={Princi}
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-6 md:mb-0 md:mr-6 lg:mr-12 rounded-full shadow-lg"
          alt="Principal"
        />
        <div className="bg-white p-6 rounded-t-lg rounded-br-lg shadow-lg w-full md:w-auto">
          <p className="text-gray-800 text-lg md:text-xl mb-4">
            "At Guardian, we believe in nurturing the potential of every student
            and guiding them towards a successful future".
          </p>
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold">Principal</p>
            <p className="text-lg">Guardian Public School</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
