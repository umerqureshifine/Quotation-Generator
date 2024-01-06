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
    const sqlServices = "INSERT INTO services_data (quotation_id, quotation_name, service_type, service_description, actual_price, offer_price) VALUES ?";

    const servicesValues = services.map((service) => [
      quotationId,
      quotationName,
      service.service_type,
      service.service_description,
      service.actual_price,
      service.offer_price,
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
      message: "Quotation and associated services deleted successfully",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};






const GetQuotation = async (req, res) => {
  try {
    const sql = "SELECT * FROM quotations_data";

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

const updateServices = async (req, res) => {
  try {
    const { quotationId } = req.params;
    const { services } = req.body;

 
    for (const service of services) {
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
    }

    res.status(200).json({ success: true, message: 'Services updated successfully' });
  } catch (error) {
    console.error('Error updating services:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { Quotation, GetQuotation, Quotationviaid, GetServices,deleteQuotation,updateServices};

