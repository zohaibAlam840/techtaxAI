'use client'
import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [userType, setUserType] = useState('Individual');
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('')
  const [docType, setDocType] = useState('w2')

  return (
    <AppContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
        userType,
        setUserType,
        selectedFile,
        setSelectedFile,
        filePreview,
        setFilePreview,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        docType,
        setDocType
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
