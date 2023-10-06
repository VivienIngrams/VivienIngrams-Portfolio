
import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests to /api

export async function POST(request) {
  const username = process.env.username;
  const password = process.env.password;
  const myEmail = process.env.email;
  
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    console.log(name, email, message, phone, subject);

    // Perform email sending logic here
    
    // Construct the transporter and send email

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      secure: true,
      auth: {
        user: username,
        pass: password,
      },
    });

    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Form submission: ${subject}`,
      html: `
        <p>Name: ${name} </p>
        <p>Phone number: ${phone} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
      `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
