// const express = require("express");
// const { db } = require("../db");
// const mysql = require("mysql");
// const app = express();
// const path = require("path");

// const dotenv = require("dotenv");
// dotenv.config();


 
 
 
 
//  const  deleteQuotation = (req, res) => {
//     try {
//       const { id } = req.params;
  
//       // Begin a transaction
//       db.beginTransaction((beginErr) => {
//         if (beginErr) {
//           console.error("Error beginning transaction:", beginErr);
//           return res.status(500).json({ error: "Internal Server Error" });
//         }
  
//         // Delete notes associated with the quotation
//         const sqlDeleteNotes = "DELETE FROM notes WHERE quotation_id = ?";
//         db.query(sqlDeleteNotes, [id], (notesErr, notesResult) => {
//           if (notesErr) {
//             // Rollback the transaction if an error occurs
//             db.rollback(() => {
//               console.error("Error deleting notes:", notesErr);
//               return res.status(500).json({ error: "Internal Server Error" });
//             });
//           } else {
//             // Delete services associated with the quotation
//             const sqlDeleteServices = "DELETE FROM services_data WHERE quotation_id = ?";
//             db.query(sqlDeleteServices, [id], (servicesErr, servicesResult) => {
//               if (servicesErr) {
//                 // Rollback the transaction if an error occurs
//                 db.rollback(() => {
//                   console.error("Error deleting services:", servicesErr);
//                   return res.status(500).json({ error: "Internal Server Error" });
//                 });
//               } else {
//                 // Delete the quotation itself
//                 const sqlDeleteQuotation = "DELETE FROM quotations_data WHERE quotation_id = ?";
//                 db.query(sqlDeleteQuotation, [id], (quotationErr, quotationResult) => {
//                   if (quotationErr) {
//                     // Rollback the transaction if an error occurs
//                     db.rollback(() => {
//                       console.error("Error deleting quotation:", quotationErr);
//                       return res.status(500).json({ error: "Internal Server Error" });
//                     });
//                   } else {
//                     // Commit the transaction
//                     db.commit((commitErr) => {
//                       if (commitErr) {
//                         // Rollback the transaction if an error occurs during commit
//                         db.rollback(() => {
//                           console.error("Error committing transaction:", commitErr);
//                           return res.status(500).json({ error: "Internal Server Error" });
//                         });
//                       } else {
//                         res.status(200).json({
//                           success: true,
//                           message: "Quotation, associated notes, and services deleted successfully",
//                         });
//                       }
//                     });
//                   }
//                 });
//               }
//             });
//           }
//         });
//       });
//     } catch (error) {
//       console.error("Error processing request:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
  
  
  
  
//     const addServices = (req, res) => {
//     try {
//       const { id } = req.params;
//       const { quotation_name, services } = req.body;
  
//       if (!id || !quotation_name || !services || services.length === 0) {
//         return res.status(400).json({ error: 'Quotation ID, name, and services are required' });
//       }
  
//       const servicesValues = services.map((service) => [
//         id,
//         quotation_name,
//         service.service_type,
//         service.service_description,
//         service.actual_price,
//         service.offer_price,
//       ]);
  
//       const sql = 'INSERT INTO services_data (quotation_id, quotation_name, service_type, service_description, actual_price, offer_price) VALUES ?';
  
//       db.query(sql, [servicesValues], (err, result) => {
//         if (err) {
//           console.error('Error adding services:', err);
//           res.status(500).json({ error: 'Internal Server Error' });
//         } else {
//           res.status(201).json({ success: true, message: 'Services added successfully' });
//         }
//       });
//     } catch (error) {
//       console.error('Error processing request:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };
 
 
//  const Notes = (req, res) => {
//     const { noteTexts, quotationId } = req.body;
  
//     // Assuming noteTexts is an array of strings
//     const values = noteTexts.map((text) => [text, quotationId]);
  
//     const sql = 'INSERT INTO notes (note_text, quotation_id) VALUES ?';
  
//     db.query(sql, [values], (err, result) => {
//       if (err) {
//         console.error('Error inserting notes:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         res.status(201).json({ ids: result.insertId });
//       }
//     });
//   };
 
 
//   const getNotes = (req, res) => {
//     const { quotationId } = req.params;
  
//     // Assuming you have a 'notes' table in your database
//     const sql = 'SELECT * FROM notes WHERE quotation_id = ?';
  
//     db.query(sql, [quotationId], (err, result) => {
//       if (err) {
//         console.error('Error fetching notes:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         res.status(200).json(result);
//       }
//     });
//   };
 
 
//  const deleteNote = (req, res) => {
//     const noteId = req.params.noteId;
  
//     const sql = 'DELETE FROM notes WHERE id = ?';
  
//     db.query(sql, [noteId], (err, result) => {
//       if (err) {
//         console.error('Error deleting note:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         res.status(200).json({ message: 'Note deleted successfully' });
//       }
//     });
//   };
  
  
//     const getnotes_text = (req, res) => {
//     const sql = 'SELECT notes_text FROM notes_data';
  
//     db.query(sql, (err, result) => {
//       if (err) {
//         console.error('Error fetching notes:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         const notes = result.map((row) => row.notes_text);
//         res.json(notes);
//       }
//     });
//   };
 
 
 
 
 
 
 
 
 
 
// // module.exports = { deleteQuotation,Notes,getNotes,getnotes_text,deleteNote};

//  module.exports = { deleteQuotation,addServices,Notes,getNotes,deleteNote,getnotes_text};






// //  const express = require("express");

// // const router = express.Router();

// // // const {Register,Allregister, Login,} = require('../controllers/UserController');
// // // const {Quotation, GetQuotation, Quotationviaid, GetServices,  deleteQuotation, updateServices, Notes, getNotes, deleteNote, AddServices, addServices, deleteService, getnotes_text} = require('../controllers/UserController');

// // const {Quotation,GetServices,GetQuotation,Quotationviaid,updateServices,deleteService} = require('../controllers/UserController');

// // const { deleteQuotation,addServices,Notes,getNotes,deleteNote,getnotes_text} = require('../controllers/UserController2');





// // router.put("/quotation/:quotationId",updateServices);
// // router.post("/quotation",Quotation);
// // router.delete("/quotation/:id",deleteQuotation);
// // router.post('/services/:id', addServices);
// // router.delete('/services/:serviceId', deleteService);
// // router.get("/quotation/:id",Quotationviaid);
// // router.get("/quotation",GetQuotation);
// // router.get("/services",GetServices);


// // router.post("/notes",Notes);
// // router.get('/notes/:quotationId', getNotes);
// // router.delete('/notes/:noteId', deleteNote);

// // router.get("/notes_data",getnotes_text);


// // module.exports = router;