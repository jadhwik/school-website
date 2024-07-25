import React from "react";
import Header from "./Header";
import Princi from "../assets/images/princi2.jpeg";
import vice from "../assets/images/vice.jpeg";
import english from "../assets/images/englisteacher.jpeg";
import science from "../assets/images/science.jpeg";
import mathematics from "../assets/images/mathematics.jpeg";
import cs from "../assets/images/cs.jpeg";
import ContactUs from "./ContactUs";

const facultyMembers = [
  {
    id: 1,
    name: "Dr. John Doe",
    position: "Principal",
    image: Princi,
    description:
      "Dr. Johnson has over 20 years of experience in education and administration. She holds a Ph.D. in Educational Leadership from Stanford University.",
  },
  {
    id: 2,
    name: "Prof. Jane Smith",
    position: "Vice Principal",
    image: vice,
    description:
      "Prof. Smith is an award-winning educator with a passion for making science accessible to all students. He has been with our school for 15 years.",
  },
  {
    id: 3,
    name: "Emily Jhonson",
    position: "English Teacher",
    image: english,
    description: "M.A. in English, 10 years of teaching experience",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Mathematics Teacher",
    image: mathematics,
    description: "M.Sc. in Mathematics, 8 years of teaching experience",
  },
  {
    id: 5,
    name: "Sophia Davis",
    position: "Science Teacher",
    image: science,
    description: "M.Sc. in Chemistry, 12 years of teaching experience",
  },
  {
    id: 6,
    name: "David Wilson",
    position: "Computer Science Teacher",
    image: cs,
    description: "B.Tech in Computer Science, 5 years of teaching experience",
  },
];

const FacultyIntroduction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow bg-white ">
        <main className="container mx-auto px-4 py-8 mt-28">
          <h1 className="text-3xl font-bold text-center mb-8">Our Faculty</h1>

          <p className="text-lg text-gray-700 text-center mb-12">
            Meet the dedicated educators who inspire and guide our students
            towards excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-64 object-contain"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{faculty.name}</h2>
                  <p className="text-blue-600 mb-4">{faculty.position}</p>
                  <p className="text-gray-600">{faculty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <section className="bg-blue-600 text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="mb-6">
              We're always looking for passionate educators to join our faculty.
              If you're interested in making a difference in students' lives,
              we'd love to hear from you.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
              View Open Positions
            </button>
          </div>
        </section>
      </div>
      <ContactUs />
    </div>
  );
};

export default FacultyIntroduction;
