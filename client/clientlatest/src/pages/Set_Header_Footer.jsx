




// import React, { useEffect, useState} from 'react';
// import axios from 'axios';
// import DisplayCompanyData from './Footer';
// import Header from './Header';
// import Footer from './Footer';
// import { Link, useNavigate, useParams } from "react-router-dom";

// function Set_Header_Footer() {
//   const { id } = useParams();
  
//   const [headerImage, setHeaderImage] = useState(null);
//   const [footerImage, setFooterImage] = useState(null);
//   const navigate = useNavigate();



//   const handleHeaderImageChange = (e) => {
//     setHeaderImage(e.target.files[0]);
//   };

//   const handleFooterImageChange = (e) => {
//     setFooterImage(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
    
//       formData.append('header_img', headerImage);
//       formData.append('footer_img', footerImage);

//       const response = await axios.post('http://localhost:9000/api/upload-header-footer', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 201) {
//         console.log('Company data and images uploaded successfully');
//         window.location.reload();
//         navigate(`/final-quotation/${id}`); // Replace with your actual route

//       } else {
//         console.error('Error uploading company data and images:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error uploading company data and images:', error.message);
//     }
//   };

  
  

//   return (
//     <>
//      <div className='container-fluid'>
//       <h1>Image Upload and Company Data</h1>
//       <Link to={`/final-quotation/${id}`} className="btn btn-success mx-3 float-end">
//       <i className="bi bi-arrow-return-left mx-1"></i>   Final Quotation
//             </Link>
    
//       <label className="form-check-label" >
//         Header Image:
//         <input type="file" className="form-control  mb-2"  accept="image/*" onChange={handleHeaderImageChange} />
//       </label>
//       <br />
//       <label className="form-check-label">
//         Footer Image:
//         <input type="file" className="form-control mb-2"  accept="image/*" onChange={handleFooterImageChange} />
//       </label>
//       <br />
//       <button className='btn btn-success' onClick={handleUpload}>Upload</button>

      
//     </div>
// <div className="" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>

//     <Header/>
// </div>

// <div className="" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
// <Footer/>

// </div>
  
    
//     </>
   
    
//   );
// }

// export default Set_Header_Footer;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import HeaderFooterImages from './HeaderFooterImages';


// function Set_Header_Footer() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [headerImage, setHeaderImage] = useState(null);
//   const [footerImage, setFooterImage] = useState(null);
//   const [companyName, setCompanyName] = useState('');

//   const handleHeaderImageChange = (e) => {
//     setHeaderImage(e.target.files[0]);
//   };

//   const handleFooterImageChange = (e) => {
//     setFooterImage(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('header_img', headerImage);
//       formData.append('footer_img', footerImage);
//       formData.append('company_name', companyName); // Add company name to form data

//       const response = await axios.post('http://localhost:9000/api/upload-header-footer', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 201) {
//         console.log('Company data and images uploaded successfully');
//         window.location.reload();
//         navigate(`/final-quotation/${id}`);
//       } else {
//         console.error('Error uploading company data and images:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error uploading company data and images:', error.message);
//     }
//   };

//   return (
//     <div className='container-fluid'>
//       <h1>Image Upload and Company Data</h1>
//       <Link to={`/final-quotation/${id}`} className='btn btn-success mx-3 float-end'>
//         <i className='bi bi-arrow-return-left mx-1'></i> Final Quotation
//       </Link>
//       <br />
//       <label className='form-check-label'>
//         Header Image:
//         <input type='file' className='form-control mb-2' accept='image/*' onChange={handleHeaderImageChange} />
//       </label>
//       <br />
//       <label className='form-check-label'>
//         Footer Image:
//         <input type='file' className='form-control mb-2' accept='image/*' onChange={handleFooterImageChange} />
//       </label>
//       <br />
//       <label className='form-check-label'>
//         Company Name:
//         <input
//           type='text'
//           className='form-control mb-2'
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//         />
//       </label>
//       <br />
//       <button className='btn btn-success' onClick={handleUpload}>
//         Upload
//       </button>

//       <HeaderFooterImages/>
//     </div>
    
//   );
  
// }

// export default Set_Header_Footer;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Set_Header_Footer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [headerImage, setHeaderImage] = useState(null);
  const [footerImage, setFooterImage] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [companyNames, setCompanyNames] = useState([]);

  useEffect(() => {
    // Fetch company names from the backend
    const fetchCompanyNames = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/header-footer-images/company-names');
        
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

  const handleHeaderImageChange = (e) => {
    setHeaderImage(e.target.files[0]);
  };

  const handleFooterImageChange = (e) => {
    setFooterImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('header_img', headerImage);
      formData.append('footer_img', footerImage);
      formData.append('company_name', companyName);

      const response = await axios.post('http://localhost:9000/api/upload-header-footer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('Company data and images uploaded successfully');
        window.location.reload();
        window.alert("Successfully Uploaded Header and Footer")
        navigate(`/`);
      } else {
        console.error('Error uploading company data and images:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading company data and images:', error.message);
    }
  };

  const handleCompanyNameChange = (e) => {
    // setCompanyName(e.target.value);
    setSelectedCompany(e.target.value);
  };

  // const fetchHeaderFooterImages = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:9000/api/header-footer/${selectedCompany}`);
  //     if (response.status === 200) {
  //       const { header_img, footer_img } = response.data;
  //       setHeaderImage(header_img);
  //       setFooterImage(footer_img);
  //     } else {
  //       console.error('Failed to fetch header and footer images');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching header and footer images:', error);
  //   }
  // };

  useEffect(() => {
    if (selectedCompany) {
      // fetchHeaderFooterImages();
    }
  }, [selectedCompany]);

  return (
    <div className='container-fluid'>
      <h1>Image Upload and Company Data</h1>
    
      <br />
      <label className='form-check-label'>
        Header Image:
        <input type='file' className='form-control mb-2' accept='image/*' onChange={handleHeaderImageChange} />
      </label>
      <br />
      <label className='form-check-label'>
        Footer Image:
        <input type='file' className='form-control mb-2' accept='image/*' onChange={handleFooterImageChange} />
      </label>
      <br />
      <label className='form-check-label'>
        Company Name:
        <input
          type='text'
          className='form-control mb-2'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <br />
      <button className='btn btn-success' onClick={handleUpload}>
        Upload
      </button>
      <Link to={`/`} className='btn btn-success mx-3 '>
        <i className='bi bi-arrow-return-left mx-1'></i> Home
      </Link>

      <div>
        {/* <h1>Select Company and View Header/Footer Images</h1>
        <select value={selectedCompany} onChange={handleCompanyNameChange}>
          <option value="">Select Company</option>
          {companyNames.map((company, index) => (
            <option key={index} value={company}>{company}</option>
          ))}
        </select> */}
        <br />
        {/* <Header companyName={selectedCompany} /> */}
        {/* {headerImage && (
          <div>
            <Header/>
            <h2>Header Image</h2>
            <img src={headerImage} alt="Header" />
          </div>
        )} */}
        {/* {footerImage && (
          <div>
            <h2>Footer Image</h2>
            <img src={footerImage} alt="Footer" />
          </div>
        )} */}
        {/* <Footer companyName={selectedCompany}/> */}
      </div>
    </div>
  );
}

export default Set_Header_Footer;

