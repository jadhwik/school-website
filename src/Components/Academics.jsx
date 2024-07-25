import React from "react";
import Header from "./Header";
import primary from "../assets/images/primary.jpeg";
import secondary from "../assets/images/secondary.jpeg";
import senior from "../assets/images/senior.jpeg";
import science from "../assets/images/sclab.jpeg";
import commerce from "../assets/images/commerce.jpeg";
import ContactUs from "./ContactUs";
import teach from "../assets/images/teaching.png";
import Resources from "./Resources";

const Academics = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3e9]">
      <Header />
      <div className="container mx-auto p-4 md:p-8 lg:p-16 mt-28">
        <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Curriculum We Provide
        </p>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <AcademicSection
            title="Primary School"
            image={primary}
            grades="1-5"
            subjects={[
              "English",
              "Mathematics",
              "Science",
              "Social Studies",
              "Arts",
              "Physical Education",
            ]}
          />
          <AcademicSection
            title="Secondary School"
            image={secondary}
            grades="6-10"
            subjects={[
              "English",
              "Mathematics",
              "Science (Physics, Chemistry, Biology)",
              "Social Studies",
              "Computer Science",
              "Arts",
              "Physical Education",
            ]}
          />
        </div>
        <div className="mt-12">
          <p className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6 text-center">
            Senior Secondary School
          </p>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <AcademicSection
              title="Science Stream"
              image={science}
              grades="11-12"
              subjects={[
                "English",
                "Mathematics",
                "Physics",
                "Chemistry",
                "Biology",
              ]}
            />
            <AcademicSection
              title="Commerce Stream"
              image={commerce}
              grades="11-12"
              subjects={[
                "Accountancy",
                "Business Studies",
                "Mathematics",
                "Economics",
                "English",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center mt-16">
          <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-semibold text-green-600">
              Methodologies Followed
            </p>
            <p className="text-lg md:text-xl text-gray-700 mt-3">
              We use a blend of traditional and modern teaching techniques to
              cater to different learning styles.
            </p>
          </div>
          <img
            src={teach}
            alt="Teaching"
            className="max-w-full md:max-w-md rounded-lg shadow-lg"
          />
        </div>
        <Resources />
      </div>
      <ContactUs />
    </div>
  );
};

const AcademicSection = ({ title, image, grades, subjects }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <p className="text-xl md:text-2xl font-semibold text-orange-500 mb-4">
      {title}
    </p>
    <div className="flex flex-col md:flex-row gap-4">
      <img
        src={image}
        alt={title}
        className="w-full md:w-72 rounded-md object-cover"
      />
      <div>
        <p className="text-lg text-gray-800 font-semibold">Grades: {grades}</p>
        <p className="text-lg text-gray-800 mt-2 font-semibold">
          Subjects Provided:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          {subjects.map((subject, index) => (
            <li key={index} className="mt-1">
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Academics;
