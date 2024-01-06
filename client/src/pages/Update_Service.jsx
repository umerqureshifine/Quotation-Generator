// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";

// const Update_Service = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [quotationName, setQuotationName] = useState("");
//   const [servicesList, setServicesList] = useState([]);
//   const [services, setServices] = useState([
//     {
//       id: "", // Assuming each service has an ID
//       service_type: "",
//       service_description: "",
//       actual_price: 0,
//       offer_price: 0,
//     },
//   ]);

//   const handleServiceChange = (index, field, value) => {
//     const newServices = [...services];
//     newServices[index][field] = value;
//     setServices(newServices);
//   };

//   const addService = () => {
//     setServices([
//       ...services,
//       {
//         id: "", // Assuming each service has an ID
//         service_type: "",
//         service_description: "",
//         actual_price: 0,
//         offer_price: 0,
//       },
//     ]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`http://localhost:9000/api/quotation/${id}`, {
//         quotation_name: quotationName,
//         services: services.map((service) => ({
//           id: service.id,
//           service_type: service.service_type,
//           service_description: service.service_description,
//           actual_price: service.actual_price,
//           offer_price: service.offer_price,
//         })),
//       });

//       console.log("Quotation updated successfully");
//       navigate(`/print/${id}`);
//     } catch (error) {
//       console.error("Error updating quotation:", error.response?.data || error.message);
//     }
//   };

//   const getServicesList = async () => {
//     try {
//       const res = await axios.get("http://localhost:9000/api/services");
//       console.log(res.data.services);
//       setServicesList(res.data.services);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     getServicesList();
//   }, []);

//   const handleChange = (e, index) => {
//     const newServices = [...services];
//     newServices[index]["service_type"] = e.target.value;
//     setServices(newServices);
//   };

//   useEffect(() => {
//     const fetchQuotationData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:9000/api/quotation/${id}`);
//         const { quotation_name, services } = response.data;
//         setQuotationName(quotation_name);
//         setServices(services);
//       } catch (error) {
//         console.error("Error fetching quotation data:", error.response?.data || error.message);
//       }
//     };

//     fetchQuotationData();
//   }, [id]);

//   return (
//     <Wrapper>
//       <div className="container mt-3">
//         <div className="row">
//         <form className="form-control" onSubmit={handleSubmit}>
//             <h5 className="mb-4 text-center">Quotation Generator Management System:</h5>
//             <div className="col-12 mb-3">
//               <input
//                 type="text"
//                 className="form-control text-center"
//                 id="quotationName"
//                 name="quotation_name"
//                 placeholder="Quotation Name"
//                 value={quotationName}
//                 onChange={(e) => setQuotationName(e.target.value)}
//                 required
//               />
//             </div>

//             {services.map((service, index) => (
//               <div key={index}>
//                 <div className="row">
//                   <h6>Service {index + 1}</h6>
//                   <div className="col-lg-3">
//                     <label className="form-check-label">
//                       Services:
//                       <select
//                         className="form-select"
//                         id={`serviceType${index}`}
//                         name="service_type"
//                         onChange={(e) => handleChange(e, index)}
//                         value={service.service_type}
//                         required
//                       >
//                         <option selected disabled value="">
//                           Select Service Type
//                         </option>
//                         {servicesList.map((item, key) => (
//                           <option key={key} value={item.service_name}>
//                             {item.service_name}
//                           </option>
//                         ))}
//                       </select>
//                     </label>
//                   </div>
//                   <div className="col-lg-5">
//                     <label className="form-check-label">
//                       Service Description:
//                       <textarea
//                         rows="3"
//                         cols="90"
//                         value={service.service_description}
//                         className="form-control"
//                         onChange={(e) =>
//                           handleServiceChange(index, "service_description", e.target.value)
//                         }
//                       />
//                     </label>
//                   </div>
//                   <div className="col-lg-2">
//                     <label className="form-check-label">
//                       Actual Price:
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={service.actual_price}
//                         onChange={(e) =>
//                           handleServiceChange(index, "actual_price", parseFloat(e.target.value))
//                         }
//                       />
//                     </label>
//                   </div>
//                   <div className="col-lg-2">
//                     <label className="form-check-label">
//                       Offer Price:
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={service.offer_price}
//                         onChange={(e) =>
//                           handleServiceChange(index, "offer_price", parseFloat(e.target.value))
//                         }
//                       />
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <button type="button" className="btn btn-success" onClick={addService}>
//               Add Service
//             </button>

//             <button type="submit" className="btn btn-success mx-3">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Update_Service;

// const Wrapper = styled.div`
//   /* Add your styles here */
// `;

// Update_Service.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";

// const Update_Service = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [quotationName, setQuotationName] = useState("");
//   const [servicesList, setServicesList] = useState([]);
//   const [services, setServices] = useState([]); // Initialize as an empty array

//   const handleServiceChange = (index, field, value) => {
//     const newServices = [...services];
//     newServices[index][field] = value;
//     setServices(newServices);
//   };

//   const addService = () => {
//     setServices([
//       ...services,
//       {
//         id: "", // Assuming each service has an ID
//         service_type: "",
//         service_description: "",
//         actual_price: 0,
//         offer_price: 0,
//       },
//     ]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`http://localhost:9000/api/quotation/${id}`, {
//         quotation_name: quotationName,
//         services: services.map((service) => ({
//           id: service.id,
//           service_type: service.service_type,
//           service_description: service.service_description,
//           actual_price: service.actual_price,
//           offer_price: service.offer_price,
//         })),
//       });

//       console.log("Quotation updated successfully");
//       navigate(`/print/${id}`);
//     } catch (error) {
//       console.error("Error updating quotation:", error.response?.data || error.message);
//     }
//   };

//   const getServicesList = async () => {
//     try {
//       const res = await axios.get("http://localhost:9000/api/services");
//       console.log(res.data.services);
//       setServicesList(res.data.services);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     getServicesList();
//   }, []);

//   const handleChange = (e, index) => {
//     const newServices = [...services];
//     newServices[index]["service_type"] = e.target.value;
//     setServices(newServices);
//   };

//   useEffect(() => {
//     const fetchQuotationData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:9000/api/quotation/${id}`);
//         const { quotation_name, services } = response.data;
//         setQuotationName(quotation_name);
//         setServices(services);
//       } catch (error) {
//         console.error("Error fetching quotation data:", error.response?.data || error.message);
//       }
//     };

//     fetchQuotationData();
//   }, [id]);

//   return (
//     <Wrapper>
//       <div className="container mt-3">
//         <div className="row">
//           <form className="form-control" onSubmit={handleSubmit}>
//             <h5 className="mb-4 text-center">Quotation Generator Management System:</h5>
//             <div className="col-12 mb-3">
//               <input
//                 type="text"
//                 className="form-control text-center"
//                 id="quotationName"
//                 name="quotation_name"
//                 placeholder="Quotation Name"
//                 value={quotationName}
//                 onChange={(e) => setQuotationName(e.target.value)}
//                 required
//               />
//             </div>

//             {services.map((service, index) => (
//               <div key={index}>
//                 <div className="row">
//                   <h6>Service {index + 1}</h6>
//                   <div className="col-lg-3">
//                     <label className="form-check-label">
//                       Services:
//                       <select
//                         className="form-select"
//                         id={`serviceType${index}`}
//                         name="service_type"
//                         onChange={(e) => handleChange(e, index)}
//                         value={service.service_type}
//                         required
//                       >
//                         <option selected disabled value="">
//                           Select Service Type
//                         </option>
//                         {servicesList.map((item, key) => (
//                           <option key={key} value={item.service_name}>
//                             {item.service_name}
//                           </option>
//                         ))}
//                       </select>
//                     </label>
//                   </div>
//                   <div className="col-lg-5">
//                     <label className="form-check-label">
//                       Service Description:
//                       <textarea
//                         rows="3"
//                         cols="90"
//                         value={service.service_description}
//                         className="form-control"
//                         onChange={(e) =>
//                           handleServiceChange(index, "service_description", e.target.value)
//                         }
//                       />
//                     </label>
//                   </div>
//                   <div className="col-lg-2">
//                     <label className="form-check-label">
//                       Actual Price:
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={service.actual_price}
//                         onChange={(e) =>
//                           handleServiceChange(index, "actual_price", parseFloat(e.target.value))
//                         }
//                       />
//                     </label>
//                   </div>
//                   <div className="col-lg-2">
//                     <label className="form-check-label">
//                       Offer Price:
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={service.offer_price}
//                         onChange={(e) =>
//                           handleServiceChange(index, "offer_price", parseFloat(e.target.value))
//                         }
//                       />
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <button type="button" className="btn btn-success" onClick={addService}>
//               Add Service
//             </button>

//             <button type="submit" className="btn btn-success mx-3">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Update_Service;

// const Wrapper = styled.div`
//   /* Add your styles here */
// `;

// old
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";

// const Update_Service = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [quotationName, setQuotationName] = useState("");
//   const [servicesList, setServicesList] = useState([]);
//   const [services, setServices] = useState([]); // Initialize as an empty array

//   const handleServiceChange = (index, field, value) => {
//     const newServices = [...services];
//     newServices[index][field] = value;
//     setServices(newServices);
//   };

//   const addService = () => {
//     setServices([
//       ...services,
//       {
//         // id: "", // Assuming each service has an ID
//         id: Date.now(),
//         service_type: "",
//         service_description: "",
//         actual_price: 0,
//         offer_price: 0,
//       },
//     ]);
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const response = await axios.put(`http://localhost:9000/api/quotation/${id}`, {
//   //       quotation_name: quotationName,
//   //       services: services.map((service) => ({
//   //         id: service.id,
//   //         service_type: service.service_type,
//   //         service_description: service.service_description,
//   //         actual_price: service.actual_price,
//   //         offer_price: service.offer_price,
//   //       })),
//   //     });

//   //     console.log("Quotation updated successfully");
//   //     navigate(`/print/${id}`);
//   //   } catch (error) {
//   //     console.error("Error updating quotation:", error.response?.data || error.message);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.put(`http://localhost:9000/api/quotation/${id}`, {
//         quotation_name: quotationName,
//         services: services.map((service) => ({
//           id: service.id,
//           service_type: service.service_type,
//           service_description: service.service_description,
//           actual_price: service.actual_price,
//           offer_price: service.offer_price,
//         })),
//       });

//       console.log("Quotation updated successfully");
//       navigate(`/print/${id}`);
//     } catch (error) {
//       console.error("Error updating quotation:", error.response?.data || error.message);
//     }
//   };

//   const getServicesList = async () => {
//     try {
//       const res = await axios.get("http://localhost:9000/api/services");
//       console.log(res.data.services);
//       setServicesList(res.data.services);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     getServicesList();
//   }, []);

//   const handleChange = (e, index) => {
//     const newServices = [...services];
//     newServices[index]["service_type"] = e.target.value;
//     setServices(newServices);
//   };

//   return (
//     <Wrapper>
//       <div className="container mt-3">
//         <div className="row">
//           <form className="form-control" onSubmit={handleSubmit}>
//             <h5 className="mb-4 text-center">Quotation Generator Management System:</h5>
//             <div className="col-12 mb-3">
//               <input
//                 type="text"
//                 className="form-control text-center"
//                 id="quotationName"
//                 name="quotation_name"
//                 placeholder="Quotation Name"
//                 value={quotationName}
//                 onChange={(e) => setQuotationName(e.target.value)}

//               />
//             </div>

//             {services.map((service, index) => (
//               <div key={index}>
//                 <div className="row">
//                   <h6>Service {index + 1}</h6>
//                   <div className="col-lg-3">
//                     <label className="form-check-label">
//                       Services:
//                       <select
//                         className="form-select"
//                         id={`serviceType${index}`}
//                         name="service_type"
//                         onChange={(e) => handleChange(e, index)}
//                         value={service.service_type}
//                         required
//                       >
//                         <option selected disabled value="">
//                           Select Service Type
//                         </option>
//                         {servicesList.map((item, key) => (
//                           <option key={key} value={item.service_name}>
//                             {item.service_name}
//                           </option>
//                         ))}
//                       </select>
//                     </label>
//                   </div>
//                   <div className="col-lg-5">
//                     <label className="form-check-label">
//                       Service Description:
//                       <textarea
//                         rows="3"
//                         cols="90"
//                         value={service.service_description}
//                         className="form-control"
//                         onChange={(e) =>
//                           handleServiceChange(index, "service_description", e.target.value)
//                         }
//                       />
//                     </label>
//                   </div>
//                   <div className="col-lg-2">
//                     <label className="form-check-label">
//                       Actual Price:
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={service.actual_price}
//                         onChange={(e) =>
//                           handleServiceChange(index, "actual_price", parseFloat(e.target.value))
//                         }
//                       />
//                     </label>
//                   </div>
//                   <div className="col-lg-2">
//                     <label className="form-check-label">
//                       Offer Price:
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={service.offer_price}
//                         onChange={(e) =>
//                           handleServiceChange(index, "offer_price", parseFloat(e.target.value))
//                         }
//                       />
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <button type="button" className="btn btn-success" onClick={addService}>
//               Add Service
//             </button>

//             <button type="submit" className="btn btn-success mx-3">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Update_Service;

// const Wrapper = styled.div`
//   /* Add your styles here */
// `;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Update_Service = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [servicesList, setServicesList] = useState([]);
  const [services, setServices] = useState([]);

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  // const addService = () => {
  //   setServices([
  //     ...services,
  //     {
  //       id: "", // Assuming each service has an ID
  //       service_type: "",
  //       service_description: "",
  //       actual_price: 0,
  //       offer_price: 0,
  //     },
  //   ]);
  // };

  const addService = () => {
    setServices([
      ...services,
      {
        id: "", // Assuming each service has an ID
        service_type: "",
        service_description: "",
        actual_price: 0,
        offer_price: 0,
      },
    ]);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:9000/api/quotation/${id}`, {
        services: services.map((service) => ({
          id: service.id,
          service_type: service.service_type,
          service_description: service.service_description,
          actual_price: service.actual_price,
          offer_price: service.offer_price,
        })),
      });

      console.log("Services updated successfully");
      navigate(`/print/${id}`);
    } catch (error) {
      console.error(
        "Error updating services:",
        error.response?.data || error.message
      );
    }
  };

  const getServicesList = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/services");
      console.log(res.data.services);
      setServicesList(res.data.services);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getServicesList();
  }, []);

  const handleChange = (e, index) => {
    const newServices = [...services];
    newServices[index]["service_type"] = e.target.value;
    setServices(newServices);
  };

  // useEffect(() => {
  //   const fetchQuotationData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:9000/api/quotation/${id}`
  //       );
  //       const { services } = response.data;
  //       setServices(services);
  //     } catch (error) {
  //       console.error(
  //         "Error fetching quotation data:",
  //         error.response?.data || error.message
  //       );
  //     }
  //   };

  //   fetchQuotationData();
  // }, [id]);

  useEffect(() => {
    const fetchQuotationData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/quotation/${id}`);
        const { services } = response.data;
  
        // Ensure services is an array before updating the state
        if (Array.isArray(services)) {
          setServices(services);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error("Error fetching quotation data:", error.response?.data || error.message);
      }
    };
  
    fetchQuotationData();
  }, [id]);
  

  return (
    <Wrapper>
      <div className="container mt-3">
        <div className="row">
          <form className="form-control" onSubmit={handleSubmit}>
            <h5 className="mb-4 text-center">
              Quotation Generator Management System:
            </h5>

            {services &&
            services.map((service, index) => (
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
                        {servicesList.map((item, key) => (
                          <option key={key} value={item.service_name}>
                            {item.service_name}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="col-lg-5">
                    <label className="form-check-label">
                      Service Description:
                      <textarea
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
                      />
                    </label>
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

export default Update_Service;

const Wrapper = styled.div`
  /* Add your styles here */
`;
