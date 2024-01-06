import React from "react";
import { Route, Routes } from "react-router-dom";
import Print_Page from "./pages/Print_Page";
import QuotationForm1 from './pages/QuotationForm1';
import Update_Service from "./pages/Update_Service";
import Final_quotation from "./pages/Final_quotation";
import UpdateQuotation from "./pages/UpdateServicesForm";
import UpdateServicesForm from "./pages/UpdateServicesForm";


 
function App() {
  
  return (
    <>
    {/* <Header/> */}

<Routes>
       
<Route path="/" element={<QuotationForm1 />} />
        <Route path="/final-quotation/:id" element={<Final_quotation />} />
        <Route path="/update/:id" element={<UpdateServicesForm />} />
        <Route path="/print/:id" element={<Print_Page />} />
        {/* <Route path="/" element={<Frontendpage />} /> */}



      </Routes>
 

{/*     
    <Fotter/> */}
     
    </>
  );
}

export default App;
