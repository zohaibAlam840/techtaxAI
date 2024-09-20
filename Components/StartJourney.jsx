import React from "react";
import wavy2 from "../app/assets/wavy2.jpg";

export default function StartJourney() {
  return (
    <section
      className=" md:px-10 px-5 relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center my-20"
      style={{ backgroundImage: `url(${wavy2.src})` }}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{ backgroundColor: "#0A284B" }}
      ></div>{" "}
      {/* Overlay for background dimming */}
      <div className="relative z-10 text-white">
        <h2 className="text-lg tracking-wide uppercase mb-4 font-bold">
          Start Your Journey
        </h2>
        <div className="flex items-center justify-center">
          <hr className="w-[80%] my-6 border-blue-600 border-t-[2px]" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Elevate Your Taxes Today
        </h1>
        <p className="max-w-2xl mx-auto text-sm  mb-8">
          Experience stress-free tax filing with “once a year AI,” where our
          AI-powered platform simplifies the process, saving you time and
          effort. With top-notch security and expert guidance, you can file
          confidently and accurately—all in one convenient place.
        </p>
        <div className="flex items-center justify-center">
          <hr className="w-[40%] my-6 border-blue-600 border-t-[2px]" />
        </div>

        <div className="mt-6">
          <button className="bg-blue-600 text-white font-bold py-3 px-12 rounded-full hover:bg-blue-700 transition">
            Signup
          </button>
        </div>
      </div>
    </section>
  );
}
