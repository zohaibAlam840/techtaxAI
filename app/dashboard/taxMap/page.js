'use client';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/SelectedDataContext';

const TaxMapPage = () => {
  // Access data from AppContext (fallback if available)
  const { selectedFile, filePreview, docType } = useContext(AppContext);

  // States for storing locally retrieved data
  const [localFileData, setLocalFileData] = useState(null);
  const [localPreview, setLocalPreview] = useState(null);
  const [localDocType, setLocalDocType] = useState(null); 

  useEffect(() => {
    // Try retrieving file data from localStorage if it's not available in context
    if (!selectedFile || !filePreview || !docType) {
      const storedFile = localStorage.getItem('uploadedFile');
      const storedDocType = localStorage.getItem('docType');
      
      if (storedFile) {
        const parsedFile = JSON.parse(storedFile);
        setLocalFileData(parsedFile);
        setLocalPreview(parsedFile.preview);
      }

      if (storedDocType) {
        setLocalDocType(storedDocType);
      }
    }
  }, [selectedFile, filePreview, docType]);

  return (
    <div>
      <h1 className='text-black bg-white'>{docType || localDocType} - File Type</h1>
      <div className="min-h-screen p-10 bg-gray-100 flex">

        {/* Show content if file exists either in context or local storage */}
        {(selectedFile || localFileData) ? (
          <div className="flex w-full h-full">
            {/* Left side: File Preview */}
            <div className="w-1/2 p-5 flex justify-center items-center bg-white shadow-lg">
              {/* Use context preview or fallback to local preview */}
              {(filePreview || localPreview) && (
                <div className="group relative overflow-hidden">
                  <img
                    src={filePreview || localPreview}
                    alt="File Preview"
                    className="object-contain w-full h-auto max-h-[80vh] transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                  />
                </div>
              )}
            </div>

            {/* Right side: Form fields based on docType */}
            <div className="w-1/2 p-8 bg-white shadow-lg flex flex-col space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                {(docType || localDocType) === 'w2' ? 'W2 Form Fields' : '1049 Form Fields'}
              </h2>

              {/* Render form fields here */}
              {/* Add your form code here like before */}
            </div>
          </div>
        ) : (
          <p className="text-center w-full">No file data available. Please go back and upload a file.</p>
        )}
      </div>
    </div>
  );
};

export default TaxMapPage;
