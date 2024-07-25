import artclass from "../assets/images/artclass.jpeg";
import sports from "../assets/images/sports.jpeg";
import computer from "../assets/images/computerlab.jpeg";
import classroom from "../assets/images/class.jpeg";
import library from "../assets/images/library.jpeg";
import music from "../assets/images/musicclass.jpeg";

const Infra = () => {
  const facilities = [
    {
      img: classroom,
      text: "Our classrooms are bright and spacious, equipped with modern technology and comfortable seating. They create an engaging and conducive learning environment where students can focus, collaborate, and excel in their studies.",
    },
    {
      img: artclass,
      text: "Our art classroom, with state-of-the-art supplies, natural light, and spacious workstations, inspires creativity. Students explore various mediums, from painting to digital arts. The vibrant space, adorned with student artworks, nurtures every student's artistic talents.",
    },
    {
      img: sports,
      text: "Our school boasts exceptional sports facilities, including a playground, gymnasium, and swimming pool. These amenities provide students with ample opportunities for physical activity, promoting fitness, teamwork, and overall well-being in a dynamic and supportive environment.",
    },
    {
      img: computer,
      text: "Our state-of-the-art computer lab features modern equipment and high-speed internet. It provides students with hands-on experience in coding, research, and digital skills, fostering innovation and preparing them for future technological advancements in a supportive learning environment.",
    },
    {
      img: library,
      text: "Our library is a haven of knowledge, offering a vast collection of books, digital resources, and comfortable reading areas. It provides a quiet and inviting space for students to study, research, and foster a love for reading.",
    },
    {
      img: music,
      text: "Our music class is a dynamic space equipped with a variety of instruments and modern audio technology. It offers students the opportunity to explore their musical talents, learn new skills, and express themselves creatively in an encouraging environment.",
    },
  ];

  return (
    <div className="bg-gray-100 bg-opacity-50 m-3 rounded-lg p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-800">
        Infrastructure And Facilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={item.img} className="w-full h-48 object-cover" alt="" />
            <div className="p-4 text-gray-700 text-justify">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infra;
