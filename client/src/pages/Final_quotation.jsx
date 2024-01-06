// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Fotter from "./Fotter";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { styled } from "styled-components";


// function Final_quotation() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [quotations, setQuotations] = useState([]);
//   const [quotationName, setQuotationName] = useState(""); // New state to store quotation name
//   const [totalActualPrice, setTotalActualPrice] = useState(0);
//   const [totalOfferPrice, setTotalOfferPrice] = useState(0);

//   const [isUpdateMode, setIsUpdateMode] = useState(false);

//   const handleUpdateClick = () => {
//     setIsUpdateMode(true);
//   };
  
 

//   const fetchQuotations = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:9000/api/quotation/${id}`
//       );

//       if (response.status === 200) {
//         setQuotationName(response.data[0].quotation_name); // Set the quotation name
//         setQuotations(response.data);

//         // Calculate totals
//         const actualPriceTotal = response.data.reduce(
//           (total, q) => total + q.actual_price,
//           0
//         );
//         const offerPriceTotal = response.data.reduce(
//           (total, q) => total + q.offer_price,
//           0
//         );

//         setTotalActualPrice(actualPriceTotal);
//         setTotalOfferPrice(offerPriceTotal);
//       }
//     } catch (error) {
//       console.error("Error fetching quotations:", error);
//     }
//   };


//   // Other state variables and logic

 
  

  
 
//   const handlePrintPage = () => {
   
//     navigate(`/print/${id}`);
//   };
//   const handleDelete = async () => {
//     try {
//       // Send a DELETE request to your server to delete the quotation
//       const response = await axios.delete(`http://localhost:9000/api/quotation/${id}`);
      
//       if (response.status === 200) {
//         console.log("Quotation deleted successfully");
//         // Redirect or perform any other action after successful deletion
//         navigate(`/`);
//       }
//     } catch (error) {
//       console.error("Error deleting quotation:", error);
//     }
//   };

//   useEffect(() => {
//     // Fetch quotations when the component mounts
//     fetchQuotations();
//   }, []);

//   return (
//     <>
   
//      <Header/>

     

//       <Wrapper>
//       <button >Update</button>
//         <div className="container-fluid">
//           <table className="table table-bordered mt-3">
//             <thead>
//               <tr>
//                 <th>Service Type</th>
//                 <th>Service Description</th>
//                 <th>Actual Price</th>
//                 <th>Offer Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {quotations.map((q) => (
//                 <tr key={q.id}>
//                   <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
//                     {q.service_type}
//                   </td>
//                   <td>{q.service_description}</td>
//                   <td className="th">{q.actual_price}/-</td>
//                   <td className="th">{q.offer_price}/-</td>
//                 </tr>
//               ))}
//               <tr>
//                 <td colSpan="2" className="th">
//                   Total Amount
//                 </td>
//                 <td className="th">{totalActualPrice}/-</td>
//                 <td className="th">{totalOfferPrice}/-</td>
//               </tr>
//             </tbody>
//           </table>
//           <button onClick={handleDelete}>Delete</button> 
//           <div className="note">
//             <h5 className=" fw-bold">Notes:-</h5>

//             <ul>
//               <li>
//                 SMM Ad Budget
//                 <p>
//                   Ads budget will be decided by client, suggested ad budget
//                   15000/
//                 </p>
//               </li>
//               <li>
//                 Payment will be 100% in advance and is expected till 3rd of
//                 every month
//               </li>
//               <li>
//                 Payment/plan can be stop/change by informing one month in
//                 advance if not satisfied with the services.
//               </li>
//               <li>
//                 One dedicated SPOC (single point of contact) is required from
//                 client side to approve the posts/contents/videos/website changes
//                 etc.
//               </li>
//               <li>
//                 Telephonic or short meetings required weekly and monthly meeting
//                 time (1hr) is required to review the reports and for discussing
//                 future plannings/strategies.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="container-fluid">
//           <table className="table table-bordered mt-3">
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
//           </table>
//         </div>
//         <button onClick={handlePrintPage}>Print_Page</button>
//       </Wrapper>
// <Fotter/>
      
//     </>
//   );
// }

// export default Final_quotation;
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
// `;




import React, { useState, useEffect } from "react";
import Header from "./Header";
import Fotter from "./Fotter";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import UpdateServicesForm from "./UpdateServicesForm";

function Final_quotation() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quotations, setQuotations] = useState([]);
  const [quotationName, setQuotationName] = useState("");
  const [totalActualPrice, setTotalActualPrice] = useState(0);
  const [totalOfferPrice, setTotalOfferPrice] = useState(0);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const fetchQuotations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/quotation/${id}`
      );

      if (response.status === 200) {
        setQuotationName(response.data[0].quotation_name);
        setQuotations(response.data);

        const actualPriceTotal = response.data.reduce(
          (total, q) => total + q.actual_price,
          0
        );
        const offerPriceTotal = response.data.reduce(
          (total, q) => total + q.offer_price,
          0
        );

        setTotalActualPrice(actualPriceTotal);
        setTotalOfferPrice(offerPriceTotal);
      }
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };

  const handlePrintPage = () => {
    navigate(`/print/${id}`);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/api/quotation/${id}`
      );

      if (response.status === 200) {
        console.log("Quotation deleted successfully");
        navigate(`/`);
      }
    } catch (error) {
      console.error("Error deleting quotation:", error);
    }
  };

  const handleUpdateSuccess = () => {
    console.log('Services updated successfully');
    setIsUpdateMode(false);
    window.location.reload();
  };

  const handleUpdateError = () => {
    console.error('Error updating services');
    // Handle error, e.g., show an error message or update state
  };

  useEffect(() => {
    fetchQuotations();
  }, []);

  const [newServices, setNewServices] = useState([]);


  const handleAddService = () => {
    console.log("Add Service button clicked");
    setNewServices([
      ...newServices,
      {
        service_type: "",
        service_description: "",
        actual_price: 0,
        offer_price: 0,
      },
    ]);
    console.log("New Services:", newServices);
  };


  return (
    <>
      <Header />
      <Wrapper>
        <div className="container-fluid">
        <button className='btn btn-success' onClick={() => setIsUpdateMode(true)}>Update</button>
        <button
            className="btn btn-primary ms-2"
            onClick={handleAddService}
          >
            Add Service
          </button>
        {isUpdateMode && (
          <UpdateServicesForm
            quotationId={id}
            onUpdateSuccess={handleUpdateSuccess}
            onUpdateError={handleUpdateError}
          />
        )}
        <div className="container-fluid">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Service Type</th>
                <th>Service Description</th>
                <th>Actual Price</th>
                <th>Offer Price</th>
              </tr>
            </thead>
            <tbody>
              {quotations.map((q) => (
                <tr key={q.id}>
                  <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {q.service_type}
                  </td>
                  <td>{q.service_description}</td>
                  <td className="th">{q.actual_price}/-</td>
                  <td className="th">{q.offer_price}/-</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2" className="th">
                  Total Amount
                </td>
                <td className="th">{totalActualPrice}/-</td>
                <td className="th">{totalOfferPrice}/-</td>
              </tr>
            </tbody>
          </table>
          <button className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
          <div className="note mt-3">
            <h5 className=" fw-bold">Notes:-</h5>

            <ul>
              <li>
                SMM Ad Budget
                <p>
                  Ads budget will be decided by client, suggested ad budget
                  15000/
                </p>
              </li>
              <li>
                Payment will be 100% in advance and is expected till 3rd of
                every month
              </li>
              <li>
                Payment/plan can be stop/change by informing one month in
                advance if not satisfied with the services.
              </li>
              <li>
                One dedicated SPOC (single point of contact) is required from
                client side to approve the posts/contents/videos/website changes
                etc.
              </li>
              <li>
                Telephonic or short meetings required weekly and monthly meeting
                time (1hr) is required to review the reports and for discussing
                future plannings/strategies.
              </li>
            </ul>
          </div>
        </div>

        <div className="container-fluid">
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th colSpan="3" className="th text-center">
                  Payment Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>For Payment (with GST18%) : DOAGuru InfoSystems</td>
                <td>SBIN0004677</td>
                <td>38666325192</td>
              </tr>
              <tr>
                <td>2</td>
                <td>For TDS Payment : DOAGuru IT Solutions</td>
                <td>HDFC0000224</td>
                <td>50200074931981</td>
              </tr>
              {/* Other payment details */}
            </tbody>
          </table>
        </div>
        <button className="btn btn-danger" onClick={handlePrintPage}>Print_Page</button>
        </div>
      
      </Wrapper>
      <Fotter />
    </>
  );
}

export default Final_quotation;

const Wrapper = styled.div`
  th {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .table {
    border: black;
  }
  .th {
    font-weight: bold;
    font-size: 1.2rem;
  }
  li {
    font-weight: bold;
    font-size: 1rem;
  }
`;
