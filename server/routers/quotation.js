const express = require("express");

const router = express.Router();

// const {Register,Allregister, Login,} = require('../controllers/UserController');
const {Quotation, GetQuotation, Quotationviaid, GetServices,  deleteQuotation, updateServices} = require('../controllers/UserController');





// router.post("/register",registerUser );
// // router.get("/register",Allregister );
// router.post("/login",loginUser );
// router.post("/forgot-password",forgotPassword );
router.put("/quotation/:quotationId",updateServices);
router.post("/quotation",Quotation);
router.delete("/quotation/:id",deleteQuotation);

router.get("/quotation/:id",Quotationviaid);
router.get("/quotation",GetQuotation);
router.get("/services",GetServices);

module.exports = router;