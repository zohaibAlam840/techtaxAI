import Image from "next/image";
import React from "react";
import about from "../app/assets/aboutus.jpg";

export default function AboutUs() {
  return (
    <section className="py-8 mt-20 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Image Section */}
        <div className="flex justify-end">
          <Image
            src={about}
            width={500}
            height={500}
            alt="Two people discussing tax docs"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-blue-900 leading-snug">
            About Us
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Once a Year was born in the Bay Area with a mission to take the
            hassle out of tax season. The founder, Josh Child, has several years
            of industry experience, we offer a personalized approach that
            prioritizes your needs and values clarity and precision. Our goal is
            to make every step of the tax process clear, accessible, and
            tailored to your unique situation.
          </p>
        </div>
      </div>
    </section>
  );
}
