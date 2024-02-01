const { db } = require('../db');
const path = require('path');





// const header_footer_img = async (req, res) => {
// try {
//   // Check if req.files exists and has properties header_img and footer_img
//   if (!req.files || !req.files.header_img || !req.files.footer_img) {
//     return res.status(400).json({ error: 'Both header_img and footer_img are required' });
//   }

//   const { header_img, footer_img } = req.files;


//   const headerImagePath = 'http://localhost:9000/uploads/' + header_img[0].filename;
//   const footerImagePath = 'http://localhost:9000/uploads/' + footer_img[0].filename;


 

//   // Insert header and footer images with the associated company_id
//   const insertHeaderFooterImages = await new Promise((resolve, reject) => {
//     const sqlImages = 'INSERT INTO quotation_header_footer ( header_img, footer_img) VALUES ( ?, ?)';
//     const values = [ headerImagePath, footerImagePath];

//     db.query(sqlImages, values, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });

//   res.status(201).json({ success: true, message: ' Header and Footer images uploaded successfully' });
// } catch (error) {
//   console.error('Error uploading company data and header/footer images:', error);
//   res.status(500).json({ error: 'Internal Server Error' });
// }
// };


// const get_header_footer = async(req,res)=>{


//   try {
//     // Fetch header and footer images
//     const result = await new Promise((resolve, reject) => {
//       const sql = 'SELECT * FROM quotation_header_footer';
//       db.query(sql, (err, result) => {
//         if (err) {
//           console.error('Error fetching header and footer images:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });

//     if (result.length === 0) {
//       return res.status(404).json({ error: 'Header and footer images not found' });
//     }

//     const images = result[0];
//     res.status(200).json(images);

//   } catch (error) {
//     console.error('Error fetching header and footer images:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

const header_footer_img = async (req, res) => {
  try {
    // Check if req.files exists and has properties header_img and footer_img
    if (!req.files || !req.files.header_img || !req.files.footer_img) {
      return res.status(400).json({ error: 'Both header_img and footer_img are required' });
    }

    const { header_img, footer_img} = req.files;
    const { company_name } = req.body;

    const headerImagePath = 'http://localhost:9000/uploads/' + header_img[0].filename;
    const footerImagePath = 'http://localhost:9000/uploads/' + footer_img[0].filename;

    // Insert header and footer images with the associated company_name
    const insertHeaderFooterImages = await new Promise((resolve, reject) => {
      const sqlImages = 'INSERT INTO quotation_header_footer (header_img, footer_img, company_name) VALUES (?, ?, ?)';
      const values = [headerImagePath, footerImagePath, company_name];

      db.query(sqlImages, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.status(201).json({ success: true, message: 'Header and Footer images uploaded successfully' });
  } catch (error) {
    console.error('Error uploading company data and header/footer images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};





const company_name_header_footer = async (req, res) => {
  try {
    // Fetch header and footer images in descending order by id

    const CompanyName = req.params.CompanyName;
    const result = await new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM quotation_header_footer WHERE company_name = ?';
      db.query(sql, [CompanyName], (err, result) => {
        if (err) {
          console.error('Error fetching header and footer images:', err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (result.length === 0) {
      return res.status(404).json({ error: 'Header and footer images not found' });
    }

    const images = result[0];
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching header and footer images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const get_header_footer = async (req, res) => {
  // try {
  //   const companyName = req.params.companyName;

  //   // Construct the SQL query to select header and footer images based on company name
  //   const sqlQuery = 'SELECT header_img, footer_img FROM quotation_header_footer WHERE company_name = ?';

  //   // Execute the query with the provided company name
  //   db.query(sqlQuery, [companyName], (err, results) => {
  //     if (err) {
  //       console.error('Error fetching header and footer images:', err);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     } else {
  //       // Return the header and footer images to the client
  //       res.status(200).json(results);
  //     }
  //   });
  // } catch (error) {
  //   console.error('Error handling GET request for header and footer images:', error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
  try {
    const selectedCompany = req.params.selectedCompany;

    // Query to retrieve header and footer images based on the selected company
    const query = 'SELECT header_img, footer_img FROM quotation_header_footer WHERE company_name = ?';
    
    db.query(query, [selectedCompany], (err, results) => {
      if (err) {
        console.error('Error fetching header and footer images:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length > 0) {
          const { header_img, footer_img } = results[0];
          res.status(200).json({ header_img, footer_img });
        } else {
          res.status(404).json({ error: 'Header and footer images not found for the selected company' });
        }
      }
    });
  } catch (error) {
    console.error('Error fetching header and footer images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const fetchcompanyname = async(req,res) =>{
  try {
    const query = 'SELECT DISTINCT company_name FROM quotation_header_footer'; // Query to retrieve unique company names
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching company names:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const companyNames = results.map(row => row.company_name); // Extract company names from the query results
        res.status(200).json(companyNames); // Send company names as JSON response
      }
    });
  } catch (error) {
    console.error('Error fetching company names:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}








module.exports = { header_footer_img, get_header_footer,fetchcompanyname,company_name_header_footer}
