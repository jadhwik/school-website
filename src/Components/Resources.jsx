import React from "react";
import digital from "../assets/images/digitalclass.jpeg";
import online from "../assets/images/onlineeducation.jpeg";
import interactive from "../assets/images/interactive.jpeg";

const Resources = () => {
  return (
    <div className="mt-16">
      <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Resources We Have
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ResourceCard
          title="Digital Classrooms"
          image={digital}
          description="Our digital classroom equips students with advanced technology, fostering interactive learning and enhancing educational experiences through innovative digital tools."
        />
        <ResourceCard
          title="Online Education"
          image={online}
          description="Online education from our school offers flexible learning, interactive resources, and access to expert teachers, enhancing knowledge acquisition and academic success."
        />
        <ResourceCard
          title="Interactive Learning"
          image={interactive}
          description="Interactive learning engages students through dynamic activities and real-time feedback, enhancing understanding and retention by actively involving them in the learning process."
        />
      </div>
    </div>
  );
};

const ResourceCard = ({ title, image, description }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
    <p className="text-2xl font-semibold text-green-600 mb-4 text-center">
      {title}
    </p>
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

export default Resources;
