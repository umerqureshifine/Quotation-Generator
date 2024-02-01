
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateServicesForm = ({ quotationId, onUpdateSuccess, onUpdateError }) => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`https://quotation.queuemanagementsystemdg.com/api/quotation/${quotationId}`);
      setServices(response.data);

    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://quotation.queuemanagementsystemdg.com/api/quotation/${quotationId}`, {
        services,

      });
      

      if (response.data.success) {
        console.log('Services updated successfully');
        onUpdateSuccess();
      }
      
    } catch (error) {
      console.error('Error updating services:', error);
      onUpdateError();
    }
  };

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  useEffect(() => {
    fetchServices();
  }, [quotationId]);

  return (
    <div className="container">
       <div className='form-control mb-2 mt-2'>
      {/* Form components for updating services */}
      {services.map((service, index) => (
        <div key={index}>
          <div className="row mt-3 g-2">
          <h6>Service {index + 1}</h6>
          <div className="col-lg-2 ">
          <label className="form-check-label">
          Subscription:

            <input
            className='form-control'
              type="text"
              value={service.subscription_frequency}
              onChange={(e) => handleServiceChange(index, "subscription_frequency", e.target.value)}
             
            />
          </label>
          </div>
                 
            
          <div className="col-lg-2 ">
          <label className="form-check-label">
            Service Type:
            <input
            className='form-control'
              type="text"
              value={service.service_type}
              onChange={(e) => handleServiceChange(index, 'service_type', e.target.value)}
             
            />
          </label>
          </div>
          <div className="col-lg-4 ">

          <label className="form-check-label">
            Service Description:
            <textarea
             rows="3" cols="90"
              className="form-control"
              value={service.service_description}
              onChange={(e) => handleServiceChange(index, 'service_description', e.target.value)}
            />
          </label>
          </div>

          <div className="col-lg-2 ">

          <label className="form-check-label">
            Actual Price:
            <input
             className="form-control"
              type="number"
              value={service.actual_price}
              onChange={(e) => handleServiceChange(index, 'actual_price', parseFloat(e.target.value))}
            />
          </label>
          </div>


          <div className="col-lg-2 ">
          <label className="form-check-label">
            Offer Price:
            <input
              className="form-control"
              type="number"
              value={service.offer_price}
              onChange={(e) => handleServiceChange(index, 'offer_price', parseFloat(e.target.value))}
            />
          </label>
          </div>
          </div>
        </div>
      ))}
<button className='btn btn-success mt-2 mb-2' onClick={(e) => handleUpdate(e)}>Update Services</button>

    </div>
    </div>
   
  );
};

export default UpdateServicesForm;
