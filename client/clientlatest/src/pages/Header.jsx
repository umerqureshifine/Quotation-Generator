import React, { useEffect, useState } from 'react'
import img from '../images/5.png'
import axios from 'axios';
import Final_quotation from './Final_quotation';
import styled from 'styled-components';
function Header({ companyName, quotationName }) {
  const [headerImage, setHeaderImage] = useState('');

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:9000/api/company-header-footer/:CompanyName');

  //       if (response.status === 200) {
  //         const { header_img} = response.data;

  //         // Update state with image URLs
  //         setHeaderImage(header_img);
          
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
        const response = await axios.get(`http://localhost:9000/api/company-header-footer/${companyName}`);
  
        if (response.status === 200) {
          const { header_img } = response.data;
  
          // Update state with image URLs
          setHeaderImage(header_img);
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
    <>
  
    <Wrapper>
       {headerImage && (
          <div>
             <img src={headerImage} alt="Header" style={{width:"-webkit-fill-available"}} />
             <div className="bottomleft text-white">
                <h1>Plans & Quotation for</h1>
                <h1 className="hdd">{quotationName}</h1>
              </div>
          </div>
        )}
       
       
     
     
    </Wrapper>
  

    
    </>
  )
}

export default Header
const Wrapper = styled.div`
  .container-fluid {
    position: relative;
  }

  .bottomleft {
    position: absolute;
    bottom: 100px;
    left: 40px;
    font-size: 18px;
  }
  .hdd {
    font-size: 3rem;
  }
`;
