'use client';
import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/1.png';
import user from '../assets/user.png';
import more from '../assets/more.png';
import Link from 'next/link';
import AppContext from '../context/SelectedDataContext';
import Footer from '../../Components/Footer'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import nookies from 'nookies'; 
import { auth } from '../firebase'; 
import { useRouter } from 'next/navigation';


export default function HomePage() {
  const {
    selectedYear,
    setSelectedYear,
    userType,
    setUserType,
    selectedFile,
    setSelectedFile,
    filePreview,
    setFilePreview,
    docType,
    setDocType,
  } = useContext(AppContext);

  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter() 
  const [uploadProgress, setUploadProgress] = useState(0);  

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        nookies.set(null, 'token', user.accessToken, { path: '/' });
      } else {
        setAuthUser(null);
        nookies.destroy(null, 'token');
      }
      setLoading(false); // Set loading to false after checking auth
    });
      return () => unsubscribe();
    }, []);

    useEffect(() => {
      if (!loading && !authUser) {
        router.push('/UserLogin');  // Redirect only after checking loading state
      }
    }, [authUser, loading, router]);
    
  useEffect(() => {
    const storedFile = localStorage.getItem('uploadedFile');
    const storedDocType = localStorage.getItem('docType');
    
    if (storedFile) {
      const parsedFile = JSON.parse(storedFile);
      setSelectedFile({ name: parsedFile.name, type: parsedFile.type });
      setFilePreview(parsedFile.preview);
    }

    if (storedDocType) {
      setDocType(storedDocType);
    }
  }, [setSelectedFile, setFilePreview, setDocType]);

  useEffect(() => {
    const progressCircles = document.querySelectorAll(".progress-circle");
    progressCircles.forEach((circle) => {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
      setTimeout(() => {
        circle.style.transition = "stroke-dashoffset 2s ease-in-out";
        circle.style.strokeDashoffset = `${circumference * (1 - 0.7)}`; 
      }, 500);
    });
  }, []);

  const strokeDasharray = 283; 

  useEffect(() => {
    if (selectedFile) {
      let uploadProgressValue = 0;
      const interval = setInterval(() => {
        if (uploadProgressValue < 75) {
          uploadProgressValue += 1;
          setUploadProgress(uploadProgressValue);
        } else {
          clearInterval(interval);  
        }
      }, 20);  
    } else {
      setUploadProgress(0);  
    }
  }, [selectedFile]);

    // Show loading screen while waiting for auth state to be resolved
    if (loading) {
      return <div>Loading...</div>;
    }

    if (!authUser) {
      return <div>Redirecting to login...</div>; // Fallback content in case of no user
    }

  const uploadStrokeOffset = strokeDasharray - (uploadProgress / 100) * strokeDasharray;

  const saveToLocalStorage = (file, preview) => {
    localStorage.setItem(
      'uploadedFile',
      JSON.stringify({
        name: file.name,
        type: file.type,
        preview,
      })
    );
  };

  const saveDocTypeToLocalStorage = (docType) => {
    localStorage.setItem('docType', docType);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const fileType = file.type.split('/')[0];
      if (fileType === 'image') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result); 
          saveToLocalStorage(file, reader.result); 
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);  
        localStorage.removeItem('uploadedFile');  
      }
    }
  };


  return (
    <>
    <div className="min-h-screen bg-gray-200 flex flex-col p-6 text-black ">
      <Image src={logo} className="w-10 h-10 absolute" />
      <div className="flex space-x-16 ml-6 pl-[10%] mb-20 w-full items-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0 md:space-x-4 w-full">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md p-3 text-lg w-full md:w-auto"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>

            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="border border-gray-300 rounded-md p-3 text-lg w-full md:w-auto"
            >
              <option value="Individual">Individual</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="ml-auto pr-7">
            <Image src={user} className="w-10 h-10" alt="User" />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 ">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 text-center mb-8 font-semibold p-5 bg-white text-gray-500">
          <span>Tax Documents</span>
          <span>Upload</span>
          <span>File Type</span>
          <span>Reviewer</span>
          <span className="text-blue-300 hover:text-blue-600 transition-all">
            <Link href="/dashboard/taxMap">Tax Map Progress</Link>
          </span>
          <span className="text-blue-300 hover:text-blue-600 transition-all">
            <Link href={'/dashboard/dataAudit'}>Data Audit Progress</Link>
          </span>
          <span className="text-blue-300 hover:text-blue-600 transition-all">
            <Link href={'/dashboard/eFile'}>E-file Progress</Link>
          </span>
          <span>Options</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mb-6 items-center p-5 bg-white">
          <div className="flex flex-col items-center space-y-2">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http:www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h6"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 9 9-9"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http:www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h6"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 9 9-9"></path>
            </svg>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">
              Supports: PDF, JPEG, PNG, TIFF, Excel, CSV
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Self</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg
                className="w-12 h-12 text-blue-500"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  className="opacity-30"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  className="progress-circle"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg
                className="w-12 h-12 text-blue-500"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  className="opacity-30"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  className="progress-circle"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg
                className="w-12 h-12 text-blue-500"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  className="opacity-30"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  className="progress-circle"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <Image src={more} className="w-6 h-6 " />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-center justify-center content-center">
          <div className="flex justify-center content-center">
            <select
              value={docType}
              onChange={(e) => {
                setDocType(e.target.value);
                saveDocTypeToLocalStorage(e.target.value); 
              }}
              className="border border-gray-300 rounded-md p-3 text-lg"
            >
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
                xmlns="http:www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h6"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 9 9-9"></path>
              </svg>

              {selectedFile ? (
                <div className="w-full flex flex-col items-center space-y-2">
                  {filePreview ? (
                    <img
                      src={filePreview}
                      alt="Preview"
                      className="w-32 h-32 object-contain mb-2"
                    />
                  ) : (
                    <p className="text-sm text-gray-700">
                      {selectedFile.name}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-1xl">
                  Click or drag a file to this area to upload.
                </p>
              )}

              <input
                type="file"
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
            </div>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4"
              onClick={() => document.getElementById("file-upload").click()}
            >
              Upload
            </button>
          </div>
          <div>
            {selectedFile ? (
              <p className="font-semibold p-5 text-gray-500 text-center">
                {selectedFile.name}
              </p>
            ) : (
              <p className="font-semibold p-5 text-gray-500 text-center text-2xl">
                ...
              </p>
            )}
            
          </div>
          <div>
            <select
               value={selectedYear}
               onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md p-3 text-lg"
            >
              <option value="self">self</option>
              <option value="one a year">one a year</option>
              {/* Add more years as needed */}
            </select>
          </div>
          {selectedFile ? (
              <div className="relative flex justify-center content-center">
                <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={uploadStrokeOffset}
                    className="progress-circle transition-all duration-500"
                  />
                </svg>
              </div>
            ) : (
            <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="283" />
              </svg>
            </div>
          </div> 
          )}
                    {selectedFile ? (
              <div className="relative flex justify-center content-center">
                <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={uploadStrokeOffset}
                    className="progress-circle transition-all duration-500"
                  />
                </svg>
              </div>
            ) : (
            <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="283" />
              </svg>
            </div>
          </div> 
          )}
                    {selectedFile ? (
              <div className="relative flex justify-center content-center">
                <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={uploadStrokeOffset}
                    className="progress-circle transition-all duration-500"
                  />
                </svg>
              </div>
            ) : (
            <div className="flex flex-col items-center space-y-2">
            <div className="relative">
              <svg className="w-12 h-12 text-blue-500" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" className="opacity-30" />
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="283" />
              </svg>
            </div>
          </div> 
          )}
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
}
