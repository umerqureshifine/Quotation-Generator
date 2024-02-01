const express = require("express");
const multer = require('multer');
const router = express.Router();

// const {Register,Allregister, Login,} = require('../controllers/UserController');
const {Quotation, GetQuotation, Quotationviaid, GetServices,  deleteQuotation, updateServices, Notes, getNotes, deleteNote, AddServices, addServices, deleteService, getnotes_text} = require('../controllers/UserController');
const { header_footer_img, get_header_footer, fetchcompanyname, company_name_header_footer } = require("../controllers/Header_Footer_Controller");
const upload = require("../controllers/fileUploadController");
const { header_footer, selected_header_footer } = require("../controllers/Select_Header_Footer");







router.put("/quotation/:quotationId",updateServices);
router.post("/quotation",Quotation);
router.delete("/quotation/:id",deleteQuotation);
router.post('/services/:id', addServices);
router.delete('/services/:serviceId', deleteService);
router.get("/quotation/:id",Quotationviaid);
router.get("/quotation",GetQuotation);
router.get("/services",GetServices);


router.post("/notes",Notes);
router.get('/notes/:quotationId', getNotes);
router.delete('/notes/:noteId', deleteNote);

router.get("/notes_data",getnotes_text);

router.post('/upload-header-footer', upload.fields([{ name: 'header_img' }, { name: 'footer_img' }]),header_footer_img);
// router.get('/header-footer/:selectedCompany',get_header_footer);
router.get('/header-footer-images/company-names',fetchcompanyname);
router.get('/company-header-footer/:CompanyName',company_name_header_footer);

// router.post('/select-header-footer', upload.fields([{ name: 'header_img' }, { name: 'footer_img' }]),header_footer);
// router.get('/selected-footer-images',selected_header_footer);




module.exports = router;