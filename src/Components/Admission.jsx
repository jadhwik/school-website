import React, { useState } from "react";
import Header from "./Header";
import jsPDF from "jspdf";
import ContactUs from "./ContactUs";
const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Admission Application", 20, 20);

    doc.setFontSize(12);
    let yPosition = 40;

    Object.entries(formData).forEach(([key, value]) => {
      doc.text(
        `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`,
        20,
        yPosition
      );
      yPosition += 10;
    });

    yPosition += 20;
    doc.setFontSize(16);
    doc.text("Documents Needed:", 20, yPosition);

    doc.setFontSize(12);
    const documents = [
      "1. Birth certificate",
      "2. Aadhar card",
      "3. Physical certificate",
      "4. Bank account details",
      "5. Parents identity card",
    ];

    yPosition += 10;
    documents.forEach((docItem) => {
      doc.text(docItem, 20, yPosition);
      yPosition += 10;
    });

    doc.save("admission_form.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow container mt-28 mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Admissions</h2>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Admission Information</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium">Process</h4>
              <p>
                Admission forms are available for download. Submit the completed
                form along with required documents at the school office.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Criteria</h4>
              <p>
                Admission is based on merit and availability of seats. Entrance
                tests may be conducted for certain grades.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Important Dates</h4>
              <ul className="list-disc list-inside">
                <li>Admission Form Availability: March 1st</li>
                <li>Last Date for Submission: March 31st</li>
                <li>Entrance Test: April 15th</li>
              </ul>
            </div>
          </div>
        </section>

        <h3 className="text-2xl font-semibold mb-4">Admission Application</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="grade" className="block mb-1">
              Grade Applying For
            </label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a grade</option>
              <option value="9">9th Grade</option>
              <option value="10">10th Grade</option>
              <option value="11">11th Grade</option>
              <option value="12">12th Grade</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            >
              Download Form
            </button>
          </div>
        </form>
        <div className="m-2 bg-red-400 p-5 rounded-lg text-white">
          <p>Documents Needed:</p>
          <ol>
            <li>1. Birth certificate</li>
            <li>2. Aadhar card</li>
            <li>3. Physical certificate</li>
            <li>4. Bank account details</li>
            <li>5. Parents identity card</li>
          </ol>
        </div>
      </main>

      <ContactUs />
    </div>
  );
};

export default AdmissionPage;
