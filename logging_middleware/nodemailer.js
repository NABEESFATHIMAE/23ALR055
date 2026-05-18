// nodemailer.js
// Example Node.js mailer setup for your backend

const nodemailer = require('nodemailer');

// Create a transporter using your email service credentials
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'yahoo', etc.
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password' // Use App Password if 2FA is enabled
    }
});

// Function to send email
function sendMail(to, subject, text) {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text
    };
    return transporter.sendMail(mailOptions);
}

module.exports = sendMail;
