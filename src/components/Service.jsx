import React from "react";

const Service = ({data}) => {
  return (
    <section className="pt-20">
      <div className="container  mx-auto">
        <div className="max-w-lg mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold font-heading">
            Lorem ipsum dolor sit amet consectutar domor
          </h2>
          <p className="text-gray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-[30px] -mx-3">
          {
            data.map((item,index)=><div key={index} className=" col-span-3 rounded-xl px-[20px] py-[50px] mb-20 shadow-xl">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4"
              src={item?.imgCDN}
              alt=""
            />
            <h3 className="sm:text-2xl font-bold font-heading text-center">
             {item?.title}
            </h3>
          </div>)
          }
          
        </div>
      </div>
    </section>
  );
};

export default Service;
