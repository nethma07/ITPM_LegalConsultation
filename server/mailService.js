import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Function to generate a fake Zoom-style meeting ID (e.g., 123-4567-8910)
function generateFakeZoomID() {
  const part1 = Math.floor(100 + Math.random() * 900);
  const part2 = Math.floor(1000 + Math.random() * 9000);
  const part3 = Math.floor(1000 + Math.random() * 9000);
  return `${part1}-${part2}-${part3}`;
}

// Function to send the Zoom ID email
export async function sendZoomEmail(toEmail, clientName) {
  const zoomID = generateFakeZoomID();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: 'Your Legal Consultation Zoom Meeting',
    text: `Hi ${clientName},\n\nYour consultation meeting is scheduled.\nHere is your Zoom meeting ID: ${zoomID}\n\nThank you,\nSmart Legal`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to', toEmail);
  } catch (err) {
    console.error('❌ Error sending email:', err);
  }
}
