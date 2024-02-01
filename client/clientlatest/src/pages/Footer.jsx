import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


function Footer({ companyName }) {
  
  const [footerImage, setFooterImage] = useState('');

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await axios.get('https://quotation.queuemanagementsystemdg.com/api/header-footer-images');

  //       if (response.status === 200) {
  //         const { footer_img } = response.data;

  //         // Update state with image URLs
        
  //         setFooterImage(footer_img);
  //       } else {
  //         console.error('Error fetching header and footer images:', response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching header and footer images:', error.message);
  //     }
  //   };

  //   // Fetch images on component mount
  //   fetchImages();
  // }, []);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://quotation.queuemanagementsystemdg.com/api/company-header-footer/${companyName}`);
  
        if (response.status === 200) {
          const { footer_img } = response.data;
  
          // Update state with image URLs
          setFooterImage(footer_img);
        } else {
          console.error('Error fetching header and footer images:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching header and footer images:', error.message);
      }
    };
  
    // Fetch images on component mount
    fetchImages();
  }, [companyName]);
  
  return (
    <Wrapper>
    
  
      <div  >

      <div >
       {footerImage && (
          <div>
             <img src={footerImage} alt="Header" style={{width:"-webkit-fill-available"}} />

          </div>
        )}
       
       
      </div>
      
       
      </div>
    </Wrapper>
  );
}

export default Footer;
const Wrapper =  styled.div`

`