import React from "react";
import Hero from "../Components/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* Mini About Section */}

      <div className='py-30 wrapper w-full'>
        <h4 className='text-4xl poppins text-[#1F7D53] font-semibold text-center '>
          About Our AI-Powered Smart Farming Solution{" "}
        </h4>
        <div className="pt-10 max-w-[1000px] text-center m-auto">
          <p className="poppins leading-8 text-gray-700">
            In today's world, precision agriculture is becoming essential due to
            climate change, soil degradation, and unpredictable weather
            patterns. Traditional farming methods often lack real-time insights,
            leading to inefficient farming decisions and lower yields. To solve
            this, we have developed a smart, AI-driven crop recommendation
            system that leverages IoT sensors, cloud computing, and machine
            learning to help farmers make data-driven decisions about their
            crops.
          </p>
          <button className="py-3 cursor-pointer px-5 bg-[#1F7D53] my-10 poppins text-white ">Detailed Overview</button>
        </div>
      </div>
    </div>
  );
}
