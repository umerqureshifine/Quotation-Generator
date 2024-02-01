const express = require("express");
const { db } = require("../db");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const app = express();
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();






const Quotation = async (req, res) => {
  try {
    const {
      quotation_name,
      services, // an array of services
    } = req.body;

    if (!quotation_name || !services || services.length === 0) {
      return res.status(400).json({ error: "Quotation name and services are required" });
    }

    // Insert quotation
    const sqlQuotation = "INSERT INTO quotations_data (quotation_name) VALUES (?)";
    const resultQuotation = await new Promise((resolve, reject) => {
      db.query(sqlQuotation, [quotation_name], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Get quotation ID and name
    const quotationId = resultQuotation.insertId;
    const quotationName = quotation_name;

    // Insert services with the associated quotation_id and quotation_name
    const sqlServices ="INSERT INTO services_data (quotation_id, quotation_name, service_type, service_description, actual_price, offer_price, subscription_frequency) VALUES ?";
    const servicesValues = services.map((service) => [
      quotationId,
      quotationName,
      service.service_type,
      service.service_description,
      service.actual_price,
      service.offer_price,
      service.subscription_frequency, 
    ]);

    await new Promise((resolve, reject) => {
      db.query(sqlServices, [servicesValues], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.status(200).json({
      success: true,
      message: "Quotation and services added successfully",
      quotation: {
        id: quotationId,
        quotation_name: quotationName,
      },
    });

  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};








const deleteQuotation = async (req, res) => {
  try {
    const { id } = req.params;

    // Begin a transaction
    await new Promise((resolve, reject) => {
      db.beginTransaction((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    // Delete notes associated with the quotation
    const sqlDeleteNotes = "DELETE FROM notes WHERE quotation_id = ?";
    await new Promise((resolve, reject) => {
      db.query(sqlDeleteNotes, [id], (err, result) => {
        if (err) {
          // Rollback the transaction if an error occurs
          db.rollback(() => reject(err));
        } else {
          resolve(result);
        }
      });
    });

    // Delete services associated with the quotation
    const sqlDeleteServices = "DELETE FROM services_data WHERE quotation_id = ?";
    await new Promise((resolve, reject) => {
      db.query(sqlDeleteServices, [id], (err, result) => {
        if (err) {
          // Rollback the transaction if an error occurs
          db.rollback(() => reject(err));
        } else {
          resolve(result);
        }
      });
    });

    // Delete the quotation itself
    const sqlDeleteQuotation = "DELETE FROM quotations_data WHERE quotation_id = ?";
    await new Promise((resolve, reject) => {
      db.query(sqlDeleteQuotation, [id], (err, result) => {
        if (err) {
          // Rollback the transaction if an error occurs
          db.rollback(() => reject(err));
        } else {
          resolve(result);
        }
      });
    });

    // Commit the transaction
    await new Promise((resolve, reject) => {
      db.commit((err) => {
        if (err) {
          // Rollback the transaction if an error occurs during commit
          db.rollback(() => reject(err));
        } else {
          resolve();
        }
      });
    });

    res.status(200).json({
      success: true,
      message: "Quotation, associated notes, and services deleted successfully",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};





const GetQuotation = async (req, res) => {
  try {
    const sql = "SELECT * FROM quotations_data ORDER BY quotation_id DESC";

    const quotations = await new Promise((resolve, reject) => {
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    res.status(200).json(quotations);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const Quotationviaid = (req, res) => {
  try {
    const quotation_id = req.params.id;

    const getQuery = `SELECT * FROM services_data WHERE quotation_id = ?`;

    db.query(getQuery, quotation_id, (error, result) => {
      if (error) {
        console.log("Quotation not found", error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const addServices = async (req, res) => {
  try {
    const { id } = req.params;
    const { quotation_name, services } = req.body;

    if (!id || !quotation_name || !services || services.length === 0) {
      return res.status(400).json({ error: 'Quotation ID, name, and services are required' });
    }

    const servicesValues = services.map((service) => [
      id,
      quotation_name,
      service.service_type,
      service.service_description,
      service.actual_price,
      service.offer_price, 
     service.subscription_frequency, 
    ]);

    const sql = "INSERT INTO services_data (quotation_id, quotation_name, service_type, service_description, actual_price, offer_price, subscription_frequency) VALUES ?";

    await new Promise((resolve, reject) => {
      db.query(sql, [servicesValues], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.status(201).json({ success: true, message: 'Services added successfully' });
  } catch (error) {
    console.error('Error adding services:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






const deleteService = async (req, res) => {
  try {
    const { serviceId } = req.params;

    // Implement logic to delete the service with the specified ID from your database
    const result = await new Promise((resolve, reject) => {
      db.query('DELETE FROM services_data WHERE service_id = ?', [serviceId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Check if a row was affected to determine if the service was found and deleted
    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: 'Service deleted successfully' });
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};





const GetServices = (req, res) => {
  try {
    const getquery = "SELECT * FROM services";

    db.query(getquery, (error, result) => {
      if (error) {
        console.log("services not found", error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const user = result;
        res.status(200).json({
          success: true,
          message: "services added successfully",
          services: user,
        });
      }
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const updateServices = async (req, res) => {
//   try {
//     const { quotationId } = req.params;
//     const { services } = req.body;

 
//     for (const service of services) {
//       const sqlUpdateService = `
//         UPDATE services_data
//         SET
//           service_type = ?,
//           service_description = ?,
//           actual_price = ?,
//           offer_price = ?
//         WHERE
//           quotation_id = ? AND service_id = ?`;

//       const values = [
//         service.service_type,
//         service.service_description,
//         service.actual_price,
//         service.offer_price,
//         quotationId,
//         service.service_id,
//       ];

//       await db.query(sqlUpdateService, values);
//     }

//     res.status(200).json({ success: true, message: 'Services updated successfully' });
//   } catch (error) {
//     console.error('Error updating services:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

const updateServices = async (req, res) => {
  try {
    const { quotationId } = req.params;
    const { services } = req.body;

    const updateServicePromises = services.map(async (service) => {
      const sqlUpdateService = `
        UPDATE services_data
        SET
          service_type = ?,
          service_description = ?,
          actual_price = ?,
          offer_price = ?
        WHERE
          quotation_id = ? AND service_id = ?`;

      const values = [
        service.service_type,
        service.service_description,
        service.actual_price,
        service.offer_price,
        quotationId,
        service.service_id,
      ];

      await db.query(sqlUpdateService, values);
    });

    await Promise.all(updateServicePromises);

    res.status(200).json({ success: true, message: 'Services updated successfully' });
  } catch (error) {
    console.error('Error updating services:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const Notes = (req, res) => {
  const { noteTexts, quotationId } = req.body;

  // Assuming noteTexts is an array of strings
  const values = noteTexts.map((text) => [text, quotationId]);

  const sql = 'INSERT INTO notes (note_text, quotation_id) VALUES ?';

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error('Error inserting notes:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ ids: result.insertId });
    }
  });
};


const getNotes = (req, res) => {
  const { quotationId } = req.params;

  // Assuming you have a 'notes' table in your database
  const sql = 'SELECT * FROM notes WHERE quotation_id = ?';

  db.query(sql, [quotationId], (err, result) => {
    if (err) {
      console.error('Error fetching notes:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
};

const deleteNote = (req, res) => {
  const noteId = req.params.noteId;

  const sql = 'DELETE FROM notes WHERE id = ?';

  db.query(sql, [noteId], (err, result) => {
    if (err) {
      console.error('Error deleting note:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Note deleted successfully' });
    }
  });
};


const getnotes_text = (req, res) => {
  const sql = 'SELECT notes_text FROM notes_data';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching notes:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const notes = result.map((row) => row.notes_text);
      res.json(notes);
    }
  });
};





module.exports = { Quotation, GetQuotation, Quotationviaid,addServices,deleteService, GetServices,deleteQuotation,updateServices,Notes,getNotes,
  getnotes_text,
  deleteNote};

