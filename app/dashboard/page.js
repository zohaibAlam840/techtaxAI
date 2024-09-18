// pages/index.js
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/1.png'
import user from '../assets/user.png'
import more from '../assets/more.png'


export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [userType, setUserType] = useState('Individual');
  
  useEffect(() => {
    // Trigger progress bar animation on page load
    const progressCircles = document.querySelectorAll('.progress-circle');
    progressCircles.forEach((circle) => {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
      setTimeout(() => {
        circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
        circle.style.strokeDashoffset = `${circumference * (1 - 0.7)}`; // 70% progress
      }, 500);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col p-6 text-black ">
      <div className='flex space-x-10 pl-10 mb-20 w-full'>
      <Image src={logo} className='w-10 h-10 '/>
      <div className="flex justify-between mb-8">
        <div className="flex space-x-4 ">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md p-3 text-lg">
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              {/* Add more years as needed */}
            </select>

            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="border border-gray-300 rounded-md p-3 text-lg">
              <option value="Individual">Individual</option>
              <option value="Business">Business</option>
              {/* Add more user types as needed */}
            </select>
          </div>
        </div>
        <Image src={user} className='w-10 h-10 absolute right-20'/>
      </div>
      <div className="max-w-screen w-screen bg-gray-200 ">
        
        {/* Top Section: Year & User Type */}


        {/* Table Headers (Non-clickable) */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 text-center mb-8 font-semibold p-5 bg-white text-gray-500">
          <span>Tax Documents</span>
          <span>Upload</span>
          <span>File Type</span>
          <span>Reviewer</span>
          <span>Tax Map Progress</span>
          <span>Data Audit Progress</span>
          <span>E-file Progress</span>
          <span>Options</span>
        </div>

        {/* Progress Indicators Section */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mb-12 items-center p-5 bg-white">
          
          {/* Static Icons */}
          <div className="flex flex-col items-center space-y-2">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h6"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 9 9-9"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h6"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 9 9-9"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Supports: PDF, JPEG, PNG, TIFF, Excel, CSV</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Self</span>
          </div>

          {/* Progress Bars */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="283" className="progress-circle" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="283" className="progress-circle" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="283" className="progress-circle" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
             <Image src={more} className='w-10 h-10 '/>
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="border border-dashed border-gray-300 p-8 rounded-lg text-center">
          <div className="flex flex-col items-center space-y-2">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h6"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 9 9-9"></path>
            </svg>
            <p className="text-lg">Click or drag a file to this area to upload.</p>
            <input type="file" className="hidden" />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4">Upload</button>
          </div>
          <p className="text-sm text-gray-500 mt-2">Supports: PDF, JPEG, PNG, TIFF, Excel, CSV</p>
        </div>
      </div>
    </div>
  );
}
