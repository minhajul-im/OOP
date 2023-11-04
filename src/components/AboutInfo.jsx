import React from "react";

const AboutInfo = () => {
  return (
    <section className="pt-20 pb-20 lg:pb-12 container">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-6 relative w-full  px-4 ">
          <div>
            <img className="" src="images/metis-dashboard-square.png" alt="" />
          </div>
        </div>
        <div className="col-span-6 ">
          <div className="  pt-8 lg:pt-0 max-w-2xl lg:max-w-lg">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
              <span>Make your</span>
              <span className="text-blue-600">life easier</span>
              <span>for marketing sales and customer support</span>
            </h2>
            <p className="text-blueGray-400 leading-loose mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
            <a
              className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
