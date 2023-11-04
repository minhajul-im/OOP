import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div
        className="hidden lg:block absolute inset-0 w-1/2 ml-auto  z-0"
        style={{ zIndex: -1 }}
      />
      <div className="container  mx-auto">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="py-12">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                  <span> The quick </span>
                  <span className="text-blue-600"> brown fox</span>
                  <span> jumps over the lazy dog.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                  auctor arcu vitae, luctus nisi.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <a
                  className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  href="#"
                >
                  Check Now
                </a>
                <a
                  className="block sm:inline-block py-4 px-8 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                  href="#"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3  mb-12 lg:mb-0">
            <div className="flex items-center justify-center">
              <img
                className="lg:max-w-lg"
                src="images/working-from-airport.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-semibold leading-none" href="#">
              <img
                className="h-10"
                src="metis-assets/logos/metis/metis.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  href="#"
                >
                  Features
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-6 border-t border-gray-100">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                href="#"
              >
                Sign Up
              </a>
              <a
                className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                href="#"
              >
                Log In
              </a>
            </div>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-gray-400">
              <span>Get in Touch</span>
              <a
                className="text-blue-600 hover:text-blue-600 underline"
                href="#"
              >
                info@example.com
              </a>
            </p>
            <a className="inline-block px-1" href="#">
              <img src="metis-assets/icons/facebook-blue.svg" alt="" />
            </a>
            <a className="inline-block px-1" href="#">
              <img src="metis-assets/icons/twitter-blue.svg" alt="" />
            </a>
            <a className="inline-block px-1" href="#">
              <img src="metis-assets/icons/instagram-blue.svg" alt="" />
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
