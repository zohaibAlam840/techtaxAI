import React from "react";

export default function Footer() {
  return (
    <section>
      <div
        className="md:px-10 px-5 py-8 flex md:flex-row flex-col gap-10 items-center justify-evenly text-white md:h-[200px]"
        style={{ backgroundColor: "#0A284B" }}
      >
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="font-bold text-xl">TechTax</h1>
          <p className="text-sm">AI-Powered Tax Preparation</p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="font-bold text-3xl">Contact Us</h1>
          <p className="text-sm">Email: joshuatchild@gmail.com</p>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-row gap-4 items-center">
            <a href="#" aria-label="Facebook">
              <i className="ri-facebook-circle-fill text-2xl"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="ri-linkedin-box-fill text-2xl"></i>
            </a>
          </div>
          <a href="#" className="text-sm hover:underline">
            SignUp Now
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Use
          </a>
        </div>
      </div>

      {/* Copyrights Section */}
      <div className="flex items-center justify-center bg-blue-600 text-white text-xs py-2">
        Copyright © 2024 | TechTax LLC
      </div>
    </section>
  );
}
