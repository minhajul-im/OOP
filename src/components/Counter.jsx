import React from "react";

const Counter = () => {
  return (
    <section className="py-10 bg-blueGray-50">
      <div className="container  mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap bg-white shadow rounded">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-6 text-center border-b lg:border-b-0 md:border-r">
            <p className="text-md lg:text-base text-blueGray-400">
              <span>Total Revenue</span>
              <span className="text-xs py-1 px-2 ml-1 font-semibold text-green-600 bg-green-100 rounded-full">
                +18%
              </span>
            </p>
            <p className="my-1 text-3xl lg:text-4xl font-bold font-heading">
              $33,261
            </p>
            <span className="text-xs lg:text-base text-blueGray-500">
              432 Orders
            </span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-6 text-center border-b lg:border-b-0 md:border-r">
            <p className="text-md lg:text-base text-blueGray-400">
              <span>Subscribers</span>
              <span className="text-xs py-1 px-2 ml-1 font-semibold text-green-600 bg-green-100 rounded-full">
                +18%
              </span>
            </p>
            <p className="my-1 text-3xl lg:text-4xl font-bold font-heading">
              643,533
            </p>
            <span className="text-xs lg:text-base text-blueGray-500">
              $50 Avg. Order
            </span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-6 text-center border-b md:border-b-0 md:border-r">
            <p className="text-md lg:text-base text-blueGray-400">
              <span>Conversations</span>
              <span className="text-xs py-1 px-2 ml-1 font-semibold text-red-600 bg-red-100 rounded-full">
                -3.4%
              </span>
            </p>
            <p className="my-1 text-3xl lg:text-4xl font-bold font-heading">
              643,533
            </p>
            <span className="text-xs lg:text-base text-blueGray-500">
              5m 25s Avg. Response Time
            </span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-6 text-center">
            <p className="text-md lg:text-base text-blueGray-400">
              <span>Modal Sale Rate</span>
              <span className="text-xs py-1 px-2 ml-1 font-semibold text-green-600 bg-green-100 rounded-full">
                +18%
              </span>
            </p>
            <p className="my-1 text-3xl lg:text-4xl font-bold font-heading">
              25%
            </p>
            <span className="text-xs lg:text-base text-blueGray-500">
              5% Sales Rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
