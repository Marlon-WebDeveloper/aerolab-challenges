import React from "react";

import Arrow from "../assets/icons/Icons.svg";

const Heading = () => {
  return (
    <section className=" flex flex-col md:min-h-[60vh] min-h-[100vh] justify-start">
      <div>
        <p className="text-gray-600 font-semibold md:text-2xl uppercase">Explore the</p>
        <h1 className="uppercase text-8xl md:text-[166px] md:text-8xl font-extrabold text-wrap">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3971ED] to-[#E58CFD]">
            Tech{" "}
          </span>
          Zone{" "}
        </h1>
        <p className="text-gray-600 px-4 mt-2 font-bold text-sm md:text-2xl text-balance">
          Here you&apos;ll be able to reedem all your hard-earned Aeropoints and exchange them for
          cool tech{" "}
        </p>
        <button className="flex mt-8 relative z-30 md:text-2xl mx-auto bg-gradient-to-r hover:opacity-85 from-[#3971ED] transition hover:from-[#3971ed] hover:to-[#3971ed] to-[#E58CFD]  justify-center items-center rounded-md cursor-pointer p-3">
          <a className="text-white font-bold capitalize tracking-wide" href="#tech">
            View all Products
          </a>
          <img alt="" src={Arrow} />
        </button>
      </div>
    </section>
  );
};

export default Heading;
