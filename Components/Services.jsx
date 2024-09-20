import Image from "next/image";
import React from "react";
import taxImage from "../app/assets/tax.jpg";

const Services = () => {
  return (
    <>
      <section className="py-4 md:px-10 px-5">
        <div className="text-center mb-12">
          <h2 className="text-xl text-blue-600 font-semibold">SERVICES</h2>
          <h1 className="text-4xl font-bold text-darkBlue">What We Offer</h1>
          <p className="mt-4 text-lg text-gray-600">
            AI-Powered Tax Preparation
          </p>
        </div>

        {/* Grid Layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm ">
          {/* Service 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center flex flex-col">
            <i className="ri-upload-cloud-2-line text-5xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-blue-600">
              Easy Document Upload
            </h3>
            <p className="text-gray-600 mt-4 flex-grow">
              Simplifies the process of gathering and organizing tax documents
              in one secure place, making it easier for users to manage their
              tax information.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center flex flex-col">
            <i className="ri-exchange-dollar-line text-5xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-blue-600">
              Smart Tax Optimization
            </h3>
            <p className="text-gray-600 mt-4 flex-grow">
              Helps maximize refunds or minimize tax liabilities, ensuring users
              get the best possible outcome on their tax returns.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center flex flex-col">
            <i className="ri-file-list-2-line text-5xl text-blue-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-blue-600">
              Easy Review and Filing
            </h3>
            <p className="text-gray-600 mt-4 flex-grow">
              Eliminates the hassle of navigating complex tax forms and ensures
              the filing is completed accurately and promptly.
            </p>
          </div>
        </div>
      </section>
      {/* Tailored Solutions Section */}
      <section className="py-8 mt-20 md:px-10 px-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-darkBlue leading-snug">
              Tailored Solutions for Your Unique Position
            </h1>
            <p className="text-gray-600 mt-2 text-sm">
              We use AI to provide personalized tax insights, helping you
              maximize deductions and credits specific to your unique financial
              situation. Our platform adapts the filing process to your needs,
              offering flexible support options from AI guidance to live chat
              with tax professionals. Your data is securely handled with
              customized encryption, ensuring your information stays protected
              throughout the process.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition">
                Get Started Today →
              </button>
              <button className="border border-gray-400 text-gray-600 font-semibold py-3 px-8 rounded-full text-lg hover:border-gray-500 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-end">
            <Image
              src={taxImage}
              width={500}
              height={500}
              alt="Two people discussing tax docs"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
