import React from "react";

import Image1 from "../assets/illustrations/walkthroug-1-responsive.png";
import Image2 from "../assets/illustrations/walkthroug-2-responsive.png";
import Image3 from "../assets/illustrations/walkthroug-3-responsive.png";
import Wave from "../assets/illustrations/single-wave-pattern.svg";
import w1 from "../assets/icons/walkthrough-1.svg";
import w3 from "../assets/icons/walkthrough-2.svg";
import w2 from "../assets/icons/walkthrough-3.svg";
import Hero from "../assets/illustrations/hero-responsive.png";
const Assets = () => {
  return (
    <main className="relative">
      <div className="md:relative absolute z-10 md:top-0  -top-[276px] ">
        <img alt="Hero Image" className="lg:w-[560px] w-[650px] mx-auto" src={Hero} />
      </div>
      <article className="w-screen bg-gradient-to-r relative from-[#3971ED] to-[#E58CFD]">
        <div className="p-10 pt-[106px] md:pt-10 w-full grid md:grid-cols-3 gap-10 justify-items-center grid-cols-1">
          <div className="p-2 rounded-lg w-[250px] z-40 bg-white">
            <div className="bg-gradient-to-r  rounded-t-lg from-[#3971ED] to-[#E58CFD]">
              <img className="w-85 h-[240px]" src={Image1} />
            </div>
            <div className="w-full px-4 p-2">
              <h3 className="text-xl flex items-center justify-center font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#3971ED] to-[#E58CFD]">
                <span className="mr-2 p-[6px] bg-slate-100 rounded-lg">
                  <img alt="" src={w1} />
                </span>
                1-Browse
              </h3>
              <p className="text-gray-500 text-balanced text-sm font-bold">
                Browse our tech catalog with more than 20 top tech products
              </p>
            </div>
          </div>
          <div className="p-2 rounded-lg w-[250px] bg-white">
            <div className="bg-gradient-to-r  rounded-t-lg from-[#3971ED] to-[#E58CFD]">
              <img className="w-85 h-[240px]" src={Image2} />
            </div>
            <div className="w-full px-4 p-2">
              <h3 className="text-xl flex items-center justify-center font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#3971ED] to-[#E58CFD]">
                <span className="mr-2 p-[6px] bg-slate-100 rounded-lg">
                  <img alt="" src={w2} />
                </span>
                2-Choose
              </h3>
              <p className="text-gray-500 text-sm text-balanced font-bold">
                Exchange your hard earned AeroPoints for the item you want
              </p>
            </div>
          </div>
          <div className="p-2 rounded-lg w-[250px] bg-white">
            <div className="bg-gradient-to-r rounded-t-lg from-[#3971ED] to-[#E58CFD]">
              <img className="w-85 h-[240px]" src={Image3} />
            </div>
            <div className="w-full px-4 p-2">
              <h3 className="text-xl flex items-center justify-center font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#3971ED] to-[#E58CFD]">
                <span className="mr-2 p-[6px] bg-slate-100 rounded-lg">
                  <img alt="" src={w3} />
                </span>
                3-Enjoy
              </h3>
              <p className="text-gray-500 text-sm text-balanced font-bold">
                All done, you can relax! We &apos;ll take care of deliver of your tech item!
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Assets;
