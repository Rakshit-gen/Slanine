import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

async function sendEmail(email : any) {
  let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  let info = await transporter.sendMail({
    from: '"Slanine" <your-email@gmail.com>', // Sender address
    to: email, // Recipient email
    subject: 'Thank you for subscribing Slanine!',
    text: 'Thank you for subscribing to our platform!',
    html: '<p>Thank you for subscribing to our platform!</p>',
  });

  console.log('Message sent: %s', info.messageId);
}

export  async function POST(req : NextRequest, res : NextResponse) {
    
      const { email } = await req.json();
      try {
        await sendEmail(email); 
        return  NextResponse.json({ message: 'Thank you for subscribing!' });
      } catch (error) {
        return  NextResponse.json({ error: 'Failed to send email' });
      }
    
}
  