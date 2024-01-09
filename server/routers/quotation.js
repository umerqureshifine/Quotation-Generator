const express = require("express");

const router = express.Router();

// const {Register,Allregister, Login,} = require('../controllers/UserController');
const {Quotation, GetQuotation, Quotationviaid, GetServices,  deleteQuotation, updateServices, Notes, getNotes, deleteNote, AddServices, addServices, deleteService, getnotes_text} = require('../controllers/UserController');






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

module.exports = router;