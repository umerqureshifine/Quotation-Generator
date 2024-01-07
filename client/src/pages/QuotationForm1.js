

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const QuotationForm1 = () => {
  const navigate = useNavigate();
  const [quotationName, setQuotationName] = useState("");
  const [serviceslist, setServiceslist] = useState([]);
  const [services, setServices] = useState([
    {
      service_type: "",
      service_description: "",
      actual_price: null,
      offer_price: null,
    },
  ]);

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const addService = () => {
    setServices([
      ...services,
      {
        service_type: "",
        service_description: "",
        actual_price: null,
        offer_price: null,
      },
    ]);
  };

  const removeService = (index) => {
    const newServices = [...services];
    newServices.splice(index, 1);
    setServices(newServices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post("http://localhost:9000/api/quotation", {
        quotation_name: quotationName,
        services: services.map((service) => ({
          service_type: service.service_type,
          service_description: service.service_description,
          actual_price: service.actual_price,
          offer_price: service.offer_price,
        })),
      });

      console.log("Quotation added successfully:", response.data);

      navigate(`/final-quotation/${response.data.quotation.id}`);

     
    } catch (error) {
      console.error(
        "Error adding quotation:",
        error.response?.data || error.message
      );

    
    }
  };

  const getServicelist = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/services`);
      console.log(res.data.services);
      setServiceslist(res.data.services);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getServicelist();
  }, []);

  const handleChange = (e, index) => {
    const newServices = [...services];
    newServices[index]["service_type"] = e.target.value;
    setServices(newServices);
  };

  return (
    <Wrapper>
      <div className="container mt-3">
        <div className="row">
          <form className="form-control" onSubmit={handleSubmit}>
            <h5 className="mb-4 text-center">
              Quotation Generator Management System:
              <button  className="btn btn-success mx-3 float-end">
              <Link to='/quotationlist' className="text-white text-decoration-none">Quotation List</Link>
            </button>
            </h5>
           
            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control text-center"
                id="quotationName"
                name="quotation_name"
                placeholder="Quotation Name"
                value={quotationName}
                onChange={(e) => setQuotationName(e.target.value)}
                required
              />
            </div>

            {services.map((service, index) => (
              <div key={index}>
                <div className="row">
                  <h6>Service {index + 1}</h6>
                  <div className="col-lg-3">
                    <label className="form-check-label">
                      Services:
                      <select
                        className="form-select"
                        id={`serviceType${index}`}
                        name="service_type"
                        onChange={(e) => handleChange(e, index)}
                        value={service.service_type}
                        required
                      >
                        <option selected disabled value="">
                          Select Service Type
                        </option>
                        {serviceslist.map((item, key) => (
                          <option key={key} value={item.service_name}>
                            {item.service_name}
                          </option>
                        ))}
                         <option  value="Other Service">
                         Other Service
                        </option>
                      </select>
                    </label>
                  </div>
                  <div className="col-lg-5">
                    <label className="form-check-label">
                      Service Description:
                      <textarea
                        required
                        rows="3"
                        cols="90"
                        value={service.service_description}
                        className="form-control"
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "service_description",
                            e.target.value
                          )
                        }
                      />
                    </label>
                  </div>
                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Actual Price:
                      <input
                        type="number"
                        className="form-control"
                        value={service.actual_price}
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "actual_price",
                            parseFloat(e.target.value)
                          )
                        }
                        required
                      />
                    </label>
                  </div>
                  <div className="col-lg-2">
                    <label className="form-check-label">
                      Offer Price:
                      <input
                        type="number"
                        className="form-control"
                        value={service.offer_price}
                        onChange={(e) =>
                          handleServiceChange(
                            index,
                            "offer_price",
                            parseFloat(e.target.value)
                          )
                        }
                        required
                      />
                    </label>
                  </div>
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-danger float-end"
                      onClick={() => removeService(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-success"
              onClick={addService}
            >
              Add Service
            </button>

            <button type="submit" className="btn btn-success mx-3">
              Submit
            </button>
           
          </form>
          
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Add your styles here */
`;

export default QuotationForm1;




