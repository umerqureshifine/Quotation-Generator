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
      }
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };

 

  useEffect(() => {
    // Fetch quotations when the component mounts
    fetchQuotations();
  }, []);

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
         
          <div className="note">
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
                <td>For TDS Payment : DOAGuru IT Solutions </td>
                <td>HDFC0000224 </td>
                <td>50200074931981</td>
              </tr>

              <tr></tr>
            </tbody>
          </table>
        </div>
      </Wrapper>

      <Fotter />
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
