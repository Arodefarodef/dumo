import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100%] p-20">
      <div className=" w-[80%] h-[90%]">
        <div className="text-[70px] text-semibold text-start">
          All your businesses, <br /> in one place.
        </div>
        <div>
          Run your businesses without limitations; support customers, increase
          sales, and
          <br />
          do more. For growing businesses and smart creators.🌿
        </div>
        <div className="border rounded-md bg-blue-500 p-5 mt-8 w-[190px] text-white font-semibold">
          <button>Get Started Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
