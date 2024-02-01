import React from "react";
import { Route, Routes } from "react-router-dom";
import Print_Page from "./pages/Print_Page";
import QuotationForm1 from './pages/QuotationForm1';
import Final_quotation from "./pages/Final_quotation";
import UpdateServicesForm from "./pages/UpdateServicesForm";
import QuotationList from "./pages/QuotationList";
import CreateNotes from "./pages/CreateNotes";
import DeleteNotes from "./pages/DeleteNotes";
import AddServices from "./pages/AddServices";
import AddImageComponent from "./pages/AddImageComponent";
import Set_Header_Footer from "./pages/Set_Header_Footer";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Reviews from "./pages/Reviews";
;


 
function App() {
  
  return (
    <>

<Routes>
       
          <Route path="/" element={<QuotationForm1 />} />


        <Route path="/final-quotation/:id" element={<Final_quotation />} />
        <Route path="/update/:id" element={<UpdateServicesForm />} />
        <Route path="/print/:id" element={<Print_Page />} />
        <Route path="/quotationlist" element={<QuotationList />} />
        <Route path="/createnotes/:id" element={<CreateNotes />} />
        <Route path="/deletenotes/:id" element={<DeleteNotes />} />
        <Route path="/addservices/:id" element={<AddServices />} />
        <Route path="/addimage/:quotationId/:imageType" element={<AddImageComponent />} />
        {/* <Route path="/set-header-footer/:id" element={<Set_Header_Footer />} /> */}
        <Route path="/set-header-footer" element={<Set_Header_Footer />} />
        <Route path="/review/:id" element={<Reviews />} />



        
        



        



      </Routes>
 


     
    </>
  );
}

export default App;
