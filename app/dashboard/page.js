// pages/index.js
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/1.png'
import user from '../assets/user.png'
import more from '../assets/more.png'
import Link from 'next/link';


export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [userType, setUserType] = useState('Individual');
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null); // Preview for images

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // If the file is an image, set the preview
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result); // Set image preview data URL
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null); // Reset preview if it's not an image
    }
  };
  
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
      <div className='flex space-x-16 pl-10 mb-20 w-full'>
      <Image src={logo} className='w-10 h-10 '/>
      <div className="flex justify-between mb-8 ">
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
      <div className="w-full bg-gray-200 ">
        
        {/* Top Section: Year & User Type */}


        {/* Table Headers (Non-clickable) */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 text-center mb-8 font-semibold p-5 bg-white text-gray-500">
          <span>Tax Documents</span>
          <span>Upload</span>
          <span>File Type</span>
          <span>Reviewer</span>
          <span className='text-blue-300 hover:text-blue-600 transition-all'><Link href="/dashboard/taxMap">Tax Map Progress</Link></span>
          <span className='text-blue-300 hover:text-blue-600 transition-all'><Link href={'/dashboard/dataAudit'}>Data Audit Progress</Link></span>
          <span className='text-blue-300 hover:text-blue-600 transition-all'><Link href={'/dashboard/eFile'}>E-file Progress</Link></span>
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
             <Image src={more} className='w-6 h-6 '/>
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mb-12 items-center">
          <div>
            <select
                // value={selectedYear}
                // onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-md p-3 text-lg">
                <option value="w2">w2</option>
                <option value="1049">1049</option>
                {/* Add more years as needed */}
              </select>
          </div>
          <div className="flex flex-col items-center space-y-2 justify-center content-center">
          <div className="flex flex-col items-center bg-white justify-center p-4 content-center">
            <svg
              className="w-10 h-10 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h6"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 9 9-9"></path>
            </svg>

            {/* Display either the file name or image preview */}
            {selectedFile ? (
              <div className="w-full flex flex-col items-center space-y-2">
                {filePreview ? (
                  <img
                    src={filePreview}
                    alt="Preview"
                    className="w-32 h-32 object-contain mb-2"
                  />
                ) : (
                  <p className="text-sm text-gray-700">{selectedFile.name}</p>
                )}
              </div>
            ) : (
              <p className="text-1xl">Click or drag a file to this area to upload.</p>
            )}

            {/* Hidden input field for file selection */}
            <input
              type="file"
              className="hidden"
              id="file-upload"
              onChange={handleFileChange}
            />
            
            {/* Triggering the hidden file input */}
            
          </div>
          <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4"
              onClick={() => document.getElementById('file-upload').click()}
            >
              Upload
            </button>
          <p className="text-sm text-gray-500 mt-2">Supports: PDF, JPEG, PNG, TIFF, Excel, CSV</p>
        </div>
          <div>
            {selectedFile ? <p className="font-semibold p-5 text-gray-500 text-center">{selectedFile.name}</p> : <p className="font-semibold p-5 text-gray-500 text-center text-2xl">...</p> }  
          </div>
          <div>
              <select
                // value={selectedYear}
                // onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-md p-3 text-lg">
                <option value="self">self</option>
                <option value="one a year">one a year</option>
                {/* Add more years as needed */}
              </select>
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
              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="283" className="progress-circle" />
              </svg>
            </div>
            </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
             <Image src={more} className='w-6 h-6 '/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
