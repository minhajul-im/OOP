import React from "react";

const Price = () => {
  return (
    <section
      className="py-20 xl:bg-contain bg-top bg-no-repeat"
      style={{
        backgroundImage: 'url("metis-assets/backgrounds/intersect.svg")',
      }}
    >
      <div className="container  mx-auto">
        <div className="text-center mb-16">
          <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading">
            <span>Start saving time today and</span>
            <span className="text-blue-600">choose</span>
            <span>your best plan</span>
          </h2>
          <p className="max-w-sm mx-auto text-lg text-gray-400">
            Best for freelance developers who need to save their time
          </p>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
              <img
                className="h-20 mb-6 mx-auto"
                src="images/people.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">Begginer</h3>
              <span className="text-4xl text-blue-600 font-bold font-heading">
                $32.99
              </span>
              <p className="mt-2 mb-8 text-gray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-gray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>3 Emails</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>1 Datebases</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>10 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block sm:inline-block py-4 px-6 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="pt-16 pb-8 px-4 text-center text-white bg-gray-800 rounded shadow">
              <img
                className="h-20 mb-6 mx-auto"
                src="images/job-interview.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">
                Intermediate
              </h3>
              <span className="text-4xl font-bold font-heading">$55.99</span>
              <p className="mt-2 mb-8">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>6 Emails</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>4 Datebases</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>35 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-600 text-center font-semibold leading-none bg-white hover:bg-gray-50 rounded"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block sm:inline-block py-4 px-6 text-xs text-white text-center font-semibold leading-none border border border-gray-500 hover:border-gray-400 rounded"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6">
            <div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
              <img
                className="h-20 mb-6 mx-auto"
                src="images/team-management.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">
                Professional
              </h3>
              <span className="text-4xl text-blue-600 font-bold font-heading">
                $62.99
              </span>
              <p className="mt-2 mb-8 text-gray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-gray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>12 Emails</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>8 Datebases</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Unlimited Domains</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>50 GB Storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block sm:inline-block py-4 px-6 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
