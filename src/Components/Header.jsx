import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo3.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const routes = {
    Home: "/",
    Academics: "/academics",
    Admission: "/admission",
    Faculty: "/faculty",
    Students: "/students",
    Gallery: "/gallery",
  };

  const handleNavigation = (route) => {
    navigate(route);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white  bg-opacity-50  shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <img src={logo} alt="Logo" className="h-12 w-auto sm:h-14" />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {Object.entries(routes).map(([name, path]) => (
              <button
                key={name}
                className={`text-base font-medium ${
                  location.pathname === path
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                onClick={() => handleNavigation(path)}
              >
                {name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="Logo" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {Object.entries(routes).map(([name, path]) => (
                    <button
                      key={name}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      onClick={() => handleNavigation(path)}
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {name}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
