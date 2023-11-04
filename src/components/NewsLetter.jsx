import React from "react";

const NewsLetter = () => {
  return (
    <section
      className="py-20 bg-top bg-no-repeat"
      style={{ backgroundImage: 'url("metis-assets/elements/blob.svg")' }}
    >
      <div className="container  mx-auto">
        <div className="relative py-20 px-4 lg:p-20">
          <div className="absolute top-0 left-0 -mt-8">
            <img className="h-16" src="images/dots-left.svg" alt="" />
          </div>
          <div className="max-w-lg mx-auto text-center">
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading">
              <span>Lorem ipsum</span>
              <span className="text-blue-600">dolor sit</span>
              <span>amet, consectetur adipiscing.</span>
            </h2>
            <p className="mb-8 text-gray-400">
              Integer felis tellus, rhoncus ac pulvinar vitae.
            </p>
            <div className="flex flex-wrap max-w-md mx-auto">
              <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-gray-100 rounded">
                <svg
                  className="h-6 w-6 my-auto text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <input
                  className="w-full pl-3 py-4 text-xs text-gray-400 font-semibold leading-none bg-gray-100 outline-none"
                  type="text"
                  placeholder="Type your e-mail"
                />
              </div>
              <button
                className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
            <img className="h-16" src="images/dots-right.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
