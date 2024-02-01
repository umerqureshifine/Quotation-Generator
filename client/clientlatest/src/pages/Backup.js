// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { styled } from "styled-components";
// import moment from "moment";
// import Header from "./Header";
// import Footer from "./Footer";
// import Frontendpage from "./Frontendpage";
// import Services from './Services';
// import OurClient from './OurClient';
// import Lastpage from './Lastpage';
// import EditablePaymentTable from "./EditablePaymentWebTable";
// import EditableSeoPayment from "./EditableSeoPayment";
// import header1 from "../images/6.png"


// function Print_Page() {

//   const { id } = useParams();
//   const [quotations, setQuotations] = useState([]);
//   const [quotationDate, setQuotationDate] = useState(""); // New state to store quotation name
//   const [quotationName, setQuotationName] = useState(""); 
//   const [companyNames, setCompanyNames] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState('');

 
 
//   const [notes, setNotes] = useState([]); 
//   const [footerImagePath, setFooterImagePath] = useState("");

  
//   const [headerImagePath, setHeaderImagePath] = useState("");

//   const fetchQuotations = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:9000/api/quotation/${id}`
//       );

//       if (response.status === 200) {
//         setQuotationDate(response.data[0].created_date); // Set the quotation name
//         setQuotationName(response.data[0].quotation_name);
//         setQuotations(response.data);
//          console.log(response);

     
       
//       }
//     } catch (error) {
//       console.error("Error fetching quotations:", error);
//     }
//   };
//   const fetchNotes = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:9000/api/notes/${id}`
//       );

//       if (response.status === 200) {
//         setNotes(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching notes:", error);
//     }
//   };
//   const fetchHeaderImage = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:9000/api/${id}/header`
//       );

//       if (response.status === 200) {
//         // Assuming your response.data structure contains the image URL
//         setHeaderImagePath(response.data[0]?.file_path);
//         console.log("Footer Image URL:", headerImagePath);
//       }
//     } catch (error) {
//       console.error("Error fetching footer image:", error);
//     }
//   };





//   const handlePrintPage = () => {
//     // Change the title of the webpage to suggest a file name
//     document.title = `Quotation of ${quotationName}`;

//     // Trigger the browser's print dialog
//     window.print();

//     // Reset the title after printing is done (optional)
//     document.title = "Your Website Title";
// };



//   const renderServiceTables = (subscriptionFrequency,serviceTypeTitle) => {
//     const actualPriceTotal = quotations.reduce(
//       (total, q) =>
//         q.subscription_frequency === subscriptionFrequency &&
//         q.service_type === serviceTypeTitle
//           ? total + q.actual_price
//           : total,
//       0
//     );

//     const offerPriceTotal = quotations.reduce(
//       (total, q) =>
//         q.subscription_frequency === subscriptionFrequency &&
//         q.service_type === serviceTypeTitle
//           ? total + q.offer_price
//           : total,
//       0
//     );

//     const services = quotations.filter(
//       (q) =>
//         q.subscription_frequency === subscriptionFrequency &&
//         q.service_type === serviceTypeTitle
//     );

//     return (
//       actualPriceTotal > 0 && (
//         <div className="mt-1">
//           <h5 className="fw-bold">{`${serviceTypeTitle} Services - ${subscriptionFrequency}`}</h5>
//           <div className="" style={{ maxHeight: "700px", overflowY: "auto" }}>
//           <table className="table table-bordered mt-3">
//             <thead>
//               <tr>
//                 <th>Sr.No</th>
//                 <th>Service Name</th>
//                 <th>Service Description</th>
//                 <th>Actual Price(INR)</th>
//                 <th>Offer Price(INR)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {services.map((q, index) => (
//                 <tr key={q.id}>
//                   <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>
//                     {index + 1}
//                   </td>
//                   <td style={{ fontSize: "1rem", fontWeight: "bold" }}>{q.service_name}</td>
//                   <td>{q.service_description}</td>
//                   <td className="th">{q.actual_price}</td>
//                   <td className="th">{q.offer_price}</td>
//                 </tr>
//               ))}
//               <tr>
//                 <td colSpan="3" className="th">
//                   Total {`${serviceTypeTitle} Amount`}
//                 </td>
//                 <td className="th">{actualPriceTotal}</td>
//                 <td className="th">{offerPriceTotal}</td>
//               </tr>
//             </tbody>
//           </table>
//           </div>
//         </div>
//       )
//     );
//   };
//   useEffect(() => {
//     // Fetch company names from the backend
//     const fetchCompanyNames = async () => {
//       try {
//         const response = await axios.get('http://localhost:9000/api/header-footer-images/company-names');
//         if (response.status === 200) {
//           setCompanyNames(response.data); // Assuming response.data is an array of company names
//         } else {
//           console.error('Failed to fetch company names');
//         }
//       } catch (error) {
//         console.error('Error fetching company names:', error);
//       }
//     };

//     fetchCompanyNames();
//   }, []);
//   const handleCompanyNameChange = (e) => {
//     // setCompanyName(e.target.value);
//     setSelectedCompany(e.target.value);
//   };
  

//   const renderPaidServices = () => {
//     return (
//       <>
//         {renderServiceTables("Monthly", "Paid")}
//         {renderServiceTables("Yearly", "Paid")}
//         {renderServiceTables("One Time", "Paid")}
//         {renderServiceTables("Quarterly", "Paid")}
//         {/* Add similar calls for other subscription frequencies for Paid services */}
//       </>
//     );
//   };

//   const renderComplimentaryServices = () => {
//     return (
//       <>
//         {renderServiceTables("Monthly", "Complimentary")}
//         {renderServiceTables("Yearly", "Complimentary")}
//         {renderServiceTables("One Time", "Complimentary")}
//         {renderServiceTables("Quarterly", "Complimentary")}
//         {/* Add similar calls for other subscription frequencies for Complimentary services */}
//       </>
//     );
//   };



  
//   useEffect(() => {
//     fetchQuotations();
//     fetchNotes();
    
   
//   }, []); 

//   const filterServicesByType = (type) => {
//     return quotations.filter((q) => q.service_type === type);
//   };
//   const renderWebsiteDevelopmentPaymentConditions = () => {
//     // Find the service with the name "Website Design & Development"
//     const websiteDevelopmentService = quotations.find(
//       (service) => service.service_name === "Website Design & Development"
//     );
  
//     // Check if the service exists
//     if (websiteDevelopmentService) {
//       return (
//         <div className=" mt-2">
//           <h4 className="mt-4">Payment Conditions for Website Development</h4>
//           {/* <table className="table table-bordered mt-3">
//             <thead>
//               <tr>
//                 <th colSpan="4" className="th ">
//                   Payment Installment
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>60%</td>
//                 <td>On placement of order</td>
//               </tr>
//               <tr>
//                 <td>40%</td>
//                 <td>Before Go live</td>
//               </tr>
            
//             </tbody>
//           </table> */}
//           <EditablePaymentTable/>
//         </div>
//       );
//     } else {
//       return null; // Return null if the service is not found
//     }
//   };

  
//   const renderSEOPaymentConditions = () => {
//     // Find the service with the name "SEO, SMO, and SMM"
//     const seoService = quotations.find(
//       (service) => service.service_name === "Search Engine Optimization (SEO)",
      
//     );
//     const smmService = quotations.find(
//       (service) => service.service_name === "Social Media Marketing (SMM)",
      
//     );
//     const smoService = quotations.find(
//       (service) => service.service_name === "Social Media Optimization (SMO)",
      
//     );
  
//     // Check if the service exists
//     if (seoService || smmService || smoService) {
//       return (
//         <div className=" mt-2">
//           <h4 className="mt-4">Payment Conditions for SEO, SMO, and SMM</h4>
//           {/* <table className="table table-bordered mt-3">
//             <thead>
//               <tr>
//                 <th colSpan="4" className="th">
//                   Payment Installment
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>100%</td>
//                 <td>On placement of order</td>
//               </tr>
           
//             </tbody>
//           </table> */}
//           <EditableSeoPayment/>
    
//         </div>
//       );
//     } else {
//       return null; // Return null if the service is not found
//     }
//   };
  



//   return (
//     <>


//       <Wrapper>
//         <div className="container"><button className="btn btn-success mb-3  mt-2  w-100 p-3   btn-print" onClick={handlePrintPage}>
//             Print_Page
//           </button></div>
//           <div>
//         <h1 className="btn-print">Select Company and View Header/Footer Images</h1>
//         <select  className="form-select btn-print" value={selectedCompany} onChange={handleCompanyNameChange}>
//           <option value="">Select Company</option>
//           {companyNames.map((company, index) => (
//             <option key={index} value={company}>{company}</option>
//           ))}
//         </select>
//         <br />
//         <Header companyName={selectedCompany}  quotationName={quotationName}/>
    
//       </div>
     

// <div className="disnon">
// {/* <Frontendpage quotationName={quotationName} /> */}
// <Services />
//       <OurClient />
//    </div>
//       <Link to={`/final-quotation/${id}`} className="btn btn-success mx-1 mt-3 mb-2 btn-print ">
// <i className="bi bi-arrow-return-left mx-1"></i>   Final Quotation
//             </Link>
         

       
       

// <div className="size mt-5"  >

    
//   {/* <td style={{ fontSize: "1rem", fontWeight: "bold" }}>Date: { moment(quotationDate).format('DD/MM/YYYY')}</td> */}
//   {/* <img src={header1} className="mb-3" alt="Header" style={{width:"-webkit-fill-available"}} /> */}


// {renderPaidServices()}
//         {renderComplimentaryServices()}

// <div className="note mt-3">
//           <h5 className=" fw-bold">Notes:-</h5>

//               <ul>
//                 {notes.map((note) => (
//                   <li key={note.id}>
//                     {note.note_text}
//                     <p>{note.additional_info}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//         <div className=" mt-2">
//           {/* <h4>Payment Conditions for website Development</h4>
//           <table className="table table-bordered mt-3">
//             <thead>
//               <tr>

//                 <th colSpan="4" className="th ">
//                 Payment Installment
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>60%</td>
//                 <td>On placement of order</td>
               
//               </tr>
//               <tr>
//                 <td>40%</td>
//                 <td>Before Go live</td>
                
//               </tr>
             
//             </tbody>
//           </table> */}
//             {renderWebsiteDevelopmentPaymentConditions()}
//         </div>
//         <div className=" mt-2 mb-3">
//           {/* <h4>Payment Conditions for SEO, SMO and SMM</h4>
//           <table className="table table-bordered mt-3">
//             <thead>
//               <tr>

//                 <th colSpan="4" className="th ">
//                 Payment Installment
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>100%</td>
//                 <td>On placement of order</td>
               
//               </tr>
            
              
//             </tbody>
//           </table> */}
//             {renderSEOPaymentConditions()}
//         </div>

    

//         <div className=" mb-3">
//         <div className="" style={{ maxHeight: "700px", overflowY: "auto" }}>
//           {/* <table className="table table-bordered mt-1">
//             <thead>
//               <tr>
//                 <th>Sr.No</th>
//                 <th colSpan="3" className="th text-center">
//                   Payment Details
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>For Payment (with GST18%) : DOAGuru InfoSystems</td>
//                 <td>SBIN0004677</td>
//                 <td>38666325192</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>For TDS Payment : DOAGuru IT Solutions </td>
//                 <td>HDFC0000224 </td>
//                 <td>50200074931981</td>
//               </tr>

//               <tr></tr>
//             </tbody>
//           </table> */}
         

//           </div>
//         </div>
     

//         <div className="container"><button className="btn btn-success mb-3  mt-2  w-100 p-3   btn-print" onClick={handlePrintPage}>
//             Print_Page
//           </button></div>
//       </div>  
  
//            {/* <div className=" footimage">
//       <Footer /></div>  */}
//      <div className="disnon">
//        {/* <Lastpage/> */}
//       </div>
//       </Wrapper>
//       <Footer companyName={selectedCompany}/>


      
     
             
//     </>
//   );
// }

// export default Print_Page;
// const Wrapper = styled.div`

//   th {
//     font-weight: bold;
//     font-size: 1.2rem;
//   }
//   .table {
//     border: black;
//   }
//   .th {
//     font-weight: bold;
//     font-size: 1.2rem;
//   }
//   li{
//     font-weight:bold;
//     font-size: 1rem;

//   }

//   .disnon{
//     display: none;
//     @media print{
//       display: block;
//     }
//   }

//   .btn-print{
   
//     @media print{
//       display: none;
//     }
//   } 
//   .no-print {
//     display: none;

//     @media print {
//       display: block;
//     }
//   }

//   .footimage {

//     @media print{
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     right: 0;
    
//     }
//   }



// `;




//   {/* <table className="table table-bordered mt-3">
//             <thead>
//               <tr>
//               <th>Sr.No</th>
//                 <th>Service Type</th>
//                 <th>Service Description</th>
//                 <th>Actual Price</th>
//                 <th>Offer Price</th>
//                 <th>Subscription</th>
//               </tr>
//             </thead>
//             <tbody>
//               {quotations.map((q, index) => (
//                 <tr key={q.id}>
//                   <td className="text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>{index + 1}</td>
//                   <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
//                     {q.service_type}
//                   </td>
//                   <td>{q.service_description}</td>
//                   <td className="th">{q.actual_price}/-</td>
//                   <td className="th">{q.offer_price}/-</td>
//                   <td  className="th"> {q.subscription_frequency}</td>
                 

//                 </tr>
//               ))}
//               <tr>
//                 <td colSpan="3" className="th">
//                   Total Amount
//                 </td>
//                 <td className="th">{totalActualPrice}/-</td>
//                 <td className="th">{totalOfferPrice}/-</td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table> */}



