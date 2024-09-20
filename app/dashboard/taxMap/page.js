'use client';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/SelectedDataContext';

const TaxMapPage = () => {
  const { selectedFile, filePreview, docType } = useContext(AppContext);

  const [localFileData, setLocalFileData] = useState(null);
  const [localPreview, setLocalPreview] = useState(null);
  const [localDocType, setLocalDocType] = useState(null); 

  useEffect(() => {
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

  const renderW2Fields = () => (
    <>
      <label>Employee’s Name</label>
      <input type="text" className="input" placeholder="Enter Employee's Name" />

      <label>Social Security Number</label>
      <input type="text" className="input" placeholder="Enter SSN" />

      <label>Employer Identification Number (EIN)</label>
      <input type="text" className="input" placeholder="Enter EIN" />

      <label>Wages, Tips, Other Compensation</label>
      <input type="number" className="input" placeholder="Enter Wages, Tips" />

      <label>Federal Income Tax Withheld</label>
      <input type="number" className="input" placeholder="Enter Federal Income Tax" />

      <label>State Income Tax</label>
      <input type="number" className="input" placeholder="Enter State Income Tax" />
    </>
  );

  const render1049Fields = () => (
    <>
      <label>Taxpayer’s Name</label>
      <input type="text" className="input" placeholder="Enter Taxpayer's Name" />

      <label>Social Security Number</label>
      <input type="text" className="input" placeholder="Enter SSN" />

      <label>Filing Status</label>
      <select className="input">
        <option value="single">Single</option>
        <option value="married_joint">Married Filing Jointly</option>
        <option value="married_separate">Married Filing Separately</option>
        <option value="head_of_household">Head of Household</option>
      </select>

      <label>Total Income</label>
      <input type="number" className="input" placeholder="Enter Total Income" />

      <label>Adjusted Gross Income (AGI)</label>
      <input type="number" className="input" placeholder="Enter AGI" />

      <label>Total Tax</label>
      <input type="number" className="input" placeholder="Enter Total Tax" />

      <label>Federal Income Tax Withheld</label>
      <input type="number" className="input" placeholder="Enter Federal Income Tax Withheld" />
    </>
  );

  return (
    <div>
      <h1 className='text-black bg-white pl-20 pt-4 font-bold text-2xl'>{docType || localDocType} - Form Type</h1>
      <div className="min-h-full p-10 bg-gray-100 flex">

        {(selectedFile || localFileData) ? (
          <div className="flex w-full h-[85vh]">
            <div className="w-1/2 p-5 flex justify-center items-center bg-white shadow-lg">
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

            <div className="w-1/2 p-8 bg-white shadow-lg flex flex-col space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                {(docType || localDocType) === 'w2' ? 'W2 Form Fields' : '1049 Form Fields'}
              </h2>

              {/* Render form fields based on docType */}
              {(docType || localDocType) === 'w2' ? renderW2Fields() : render1049Fields()}
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
