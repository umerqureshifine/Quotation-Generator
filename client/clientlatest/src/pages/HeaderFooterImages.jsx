import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HeaderFooterImages() {
  const [companyName, setCompanyName] = useState('');
  const [headerImage, setHeaderImage] = useState('');
  const [footerImage, setFooterImage] = useState('');
  const [companyNames, setCompanyNames] = useState([]);

  useEffect(() => {
    // Fetch company names from the backend
    const fetchCompanyNames = async () => {
      try {
        const response = await axios.get('https://quotation.queuemanagementsystemdg.com/api/header-footer-images/company-names');
        if (response.status === 200) {
          setCompanyNames(response.data); // Assuming response.data is an array of company names
        } else {
          console.error('Failed to fetch company names');
        }
      } catch (error) {
        console.error('Error fetching company names:', error);
      }
    };

    fetchCompanyNames();
  }, []);


  


  // Function to fetch header and footer images based on selected company name
  const fetchHeaderFooterImages = async () => {
    try {
      const response = await axios.get(`https://quotation.queuemanagementsystemdg.com/api/header-footer/${companyName}`);
      if (response.status === 200) {
        const { header_img, footer_img } = response.data;
        setHeaderImage(header_img);
        setFooterImage(footer_img);
      } else {
        console.error('Failed to fetch header and footer images');
      }
    } catch (error) {
      console.error('Error fetching header and footer images:', error);
    }
  };

  // Handle changes in the selected company name
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  // Fetch header and footer images when the selected company name changes
  useEffect(() => {
    if (companyName) {
      fetchHeaderFooterImages();
    }
  }, [companyName]);

  return (
    <div>
      <h1>Select Company and View Header/Footer Images</h1>
      <select value={companyName} onChange={handleCompanyNameChange}>
        <option value="">Select Company</option>
        {/* Populate the options with company names from your backend */}
        <option value={companyName}>{companyName}</option>
        <option value={companyName}>{companyName}</option>
        {/* Add more options as needed */}
      </select>
      <br />
      {headerImage && (
        <div>
          <h2>Header Image</h2>
          <img src={headerImage} alt="Header" />
        </div>
      )}
      {footerImage && (
        <div>
          <h2>Footer Image</h2>
          <img src={footerImage} alt="Footer" />
        </div>
      )}
    </div>
  );
}

export default HeaderFooterImages;
