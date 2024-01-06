const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Function to generate a random reset token
const generateResetToken = () => {
  return crypto.randomBytes(20).toString('hex');
};

// Function to send the password reset email
const sendPasswordResetEmail = (email, resetToken) => {
  // Implement email sending logic here
  const sendPasswordResetEmail = (email, resetToken) => {
    // Replace these configurations with your actual email service credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        text: `Use the following token to reset your password: ${resetToken}`,
      };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending password reset email:', error);
      } else {
        console.log('Password reset email sent:', info.response);
      }
    });
  };
  
  
};

// Forgot password controller
const forgotPassword = async (req, res) => {
    app.post('/api/forgot-password', (req, res) => {
        try {
          const { email } = req.body;
      
          // Validation
          if (!email) {
            return res.status(400).json({ error: 'Email is required' });
          }
      
          // Check if the email exists in the database
          const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
          db.query(checkUserQuery, [email], (err, results) => {
            if (err) {
              console.error('Error checking user in MySQL:', err);
              return res.status(500).json({ error: 'Internal Server Error' });
            }
      
            // If the user is not found in the database
            if (results.length === 0) {
              return res.status(404).json({ error: 'Email not registered' });
            }
      
            // Generate a reset token and update the database with the token and expiration time
            const user = results[0];
            const resetToken = generateResetToken();
            const expirationTime = new Date(Date.now() + 3600000); // Token valid for 1 hour
      
            const updateTokenQuery = 'UPDATE users SET reset_token = ?, reset_token_expires_at = ? WHERE email = ?';
      
            db.query(updateTokenQuery, [resetToken, expirationTime, email], (updateErr, updateResult) => {
              if (updateErr) {
                console.error('Error updating reset token in the database:', updateErr);
                return res.status(500).json({ error: 'Internal Server Error' });
              }
      
              // Send the password reset email with the generated token
              sendPasswordResetEmail(email, resetToken);
      
              res.json({ message: 'Password reset email sent successfully' });
            });
          });
        } catch (error) {
          console.error('Error in forgot password:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
      
};

module.exports = {
  forgotPassword,
};
