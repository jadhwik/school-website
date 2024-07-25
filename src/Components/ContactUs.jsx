import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Icons from "./icons";
import logo2 from "../assets/images/logo2.png";

const ContactUs = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div>
            <img
              src={logo2}
              className="w-40 mb-4"
              alt="Guardian Public School Logo"
            />
            <p className="text-sm">
              Guardian Public School is committed to providing quality education
              and nurturing future leaders.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <p>123 Education Lane, Cityville, Delhi, 110001</p>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <p>+91 (11) 2345-6789</p>
              </li>
              <li className="flex items-center">
                <SiGmail className="mr-2" />
                <p>info@guardianps.edu.in</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; 2024 Guardian Public School. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Cookies Policy
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center">
          <Icons />
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
