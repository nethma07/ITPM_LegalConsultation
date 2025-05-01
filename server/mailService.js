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
const sendZoomEmail = async (toEmail, clientName, date, time, lawyerName) => {
    const zoomID = generateFakeZoomID();
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: 'Your Legal Consultation Zoom Meeting',
    text: `Hi ${clientName},
    
Your legal consultation meeting has been scheduled successfully.

📅 Date: ${date}
⏰ Time: ${time}
👨‍⚖️ Lawyer: ${lawyerName}
🔗 Zoom Meeting ID: ${zoomID}

Please join the Zoom meeting at the scheduled time.

Thank you,
Smart Legal`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to', toEmail);
  } catch (err) {
    console.error('❌ Error sending email:', err);
  }
}
export { sendZoomEmail };

