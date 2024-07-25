import React from "react";
import Header from "./Header";
import swim from "../assets/images/swimming.jpeg";
import olymp from "../assets/images/olymp.jpeg";
import prize from "../assets/images/prize.jpeg";
import ContactUs from "./ContactUs";

const activityImages = [
  { id: 1, src: "/images/music-club.jpg", alt: "Music Club Performance" },
  { id: 2, src: "/images/sports-event.jpg", alt: "Annual Sports Meet" },
  { id: 3, src: "/images/debate-club.jpg", alt: "Debate Club Session" },
  { id: 4, src: "/images/art-exhibition.jpg", alt: "Student Art Exhibition" },
  { id: 5, src: "/images/science-fair.jpg", alt: "Science Fair Projects" },
  { id: 6, src: "/images/coding-workshop.jpg", alt: "Coding Workshop" },
];

const studentAchievements = [
  {
    id: 1,
    name: "John Smith",
    achievement: "National Level Math Olympiad Winner",
    image: olymp,
  },
  {
    id: 2,
    name: "Sarah Lee",
    achievement: "Gold Medalist in State Swimming Championship",
    image: swim,
  },
  {
    id: 3,
    name: "Tech Innovators Club",
    achievement: "Winners of Inter-School Robotics Competition",
    image: prize,
  },
];

const Students = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold text-center mb-8">
          Student Life at Guardian
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Life at Guardian</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-2">
                Extracurricular Activities
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Music</li>
                <li>Dance</li>
                <li>Drama</li>
                <li>Art</li>
                <li>Sports</li>
                <li>Robotics</li>
                <li>Debate Club</li>
                <li>Science Club</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Clubs and Societies</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Literary Society</li>
                <li>Environmental Club</li>
                <li>Astronomy Club</li>
                <li>Coding Club</li>
              </ul>
            </div>
          </div>

          {/* Photo Gallery */}
          <h3 className="text-xl font-medium mb-4">
            Student Activities Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activityImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Student Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {studentAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={achievement.image}
                  alt={achievement.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">
                    {achievement.name}
                  </h3>
                  <p className="text-gray-600">{achievement.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Council Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="font-medium text-lg mb-2">President</h3>
                <p>Amy Parker</p>
                <p className="text-gray-600">Grade 12</p>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-lg mb-2">Vice President</h3>
                <p>Rajiv Mehta</p>
                <p className="text-gray-600">Grade 11</p>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-lg mb-2">Secretary</h3>
                <p>Lisa Wong</p>
                <p className="text-gray-600">Grade 10</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Involved!</h2>
          <p className="mb-6">
            Guardian offers numerous opportunities for students to grow, learn,
            and excel. Join a club, participate in competitions, or run for
            student council to make the most of your time here!
          </p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Explore Opportunities
          </button>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default Students;
