import React, { useEffect, useState } from "react";
import Header from "./Header";
import Fotter from "./Fotter";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Frontendpage from "./Frontendpage";
import Services from "./Services";
import Lastpage from "./Lastpage";
import OurClient from "./OurClient";

function Print_Page() {

  const { id } = useParams();
  const [quotations, setQuotations] = useState([]);
  const [quotationName, setQuotationName] = useState(""); // New state to store quotation name
  const [totalActualPrice, setTotalActualPrice] = useState(0);
  const [totalOfferPrice, setTotalOfferPrice] = useState(0);
  const [shouldPrint, setShouldPrint] = useState(false);  // State to control printing
  const [notes, setNotes] = useState([]); 

  const fetchQuotations = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/quotation/${id}`
      );

      if (response.status === 200) {
        setQuotationName(response.data[0].quotation_name); // Set the quotation name
        setQuotations(response.data);

        // Calculate totals
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

        setShouldPrint(true);
      }
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };
  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/notes/${id}`
      );

      if (response.status === 200) {
        setNotes(response.data);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

 
  useEffect(() => {
    fetchQuotations();
    fetchNotes();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    // Trigger print when shouldPrint is true
    if (shouldPrint) {
      window.print();
    } 
  }, [shouldPrint]); // Effect will run whenever shouldPrint changes

  return (
    <>
      <Frontendpage quotationName={quotationName} />
      <Services />
      <OurClient />
      <img src="" alt="" />

      <Header />

      <Wrapper>
    
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
         
          
          <div className="note mt-3">
          <h5 className=" fw-bold">Notes:-</h5>

              <ul>
                {notes.map((note) => (
                  <li key={note.id}>
                    {note.note_text}
                    <p>{note.additional_info}</p>
                  </li>
                ))}
              </ul>
            </div>
        </div>
        <div className="container-fluid mt-2">
          <h4>Payment Conditions for website Development</h4>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>

                <th colSpan="4" className="th ">
                Payment Installment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>60%</td>
                <td>On placement of order</td>
               
              </tr>
              <tr>
                <td>40%</td>
                <td>Before Go live</td>
                
              </tr>
              {/* Other payment details */}
            </tbody>
          </table>
        </div>
        <div className="container-fluid mt-2">
          <h4>Payment Conditions for SEO, SMO and SMM</h4>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>

                <th colSpan="4" className="th ">
                Payment Installment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100%</td>
                <td>On placement of order</td>
               
              </tr>
            
              {/* Other payment details */}
            </tbody>
          </table>
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
                <td>For TDS Payment : DOAGuru IT Solutions </td>
                <td>HDFC0000224 </td>
                <td>50200074931981</td>
              </tr>

              <tr></tr>
            </tbody>
          </table>
        </div>
      </Wrapper>

      {/* <Fotter /> */}
      <Lastpage />
    </>
  );
}

export default Print_Page;
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
  li{
    font-weight:bold;
    font-size: 1rem;

  }
`;
