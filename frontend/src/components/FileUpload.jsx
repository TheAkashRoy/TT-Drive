import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [btnText, setBtnText] = useState("Upload");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setBtnText("...");
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('https://ttd-one.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        timeout: 0
      });
      setResponse(response.data);
      console.log(response.data);
      setError(null);
    } catch (error) {
      setResponse(null);
      setError(error.response.data.error);
      setBtnText("Upload");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div>
      <h2 className="text-3xl font-bold mb-4 items-center justify-center">File Upload</h2>
      <div>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button 
        onClick={handleUpload}
        className="btn text-[#FFFFFF] font-semibold text-xl mx-3 rounded-lg p-1 w-28 shadow-xl bg-[#276678]">
        {btnText}
      </button>
      </div>
      {error && <div className="text-red-500 mt-4">Error: {error}</div>}
      {response && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Upload Successful</h3>
          
          <p className="mt-2">ttDrive Code: {response.ttdCode}</p>
          <p className="mt-2">File URL: {response.url}</p>
          {/* You can display more information from the response if needed */}
        </div>
      )}
      </div>
    </div>
  );
}

export default FileUpload;
