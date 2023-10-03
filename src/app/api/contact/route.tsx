import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    const user = process.env.user;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user,
        pass: process.env.pass,
      },
    });

    const mailOption = {
      to: user,
      from: process.env.email,
      replyTo: email,
      subject: `Form submission: ${subject}`,
      html: `
              <p>Name: ${name}</p>
              <p>Email: ${email}
              <p>Phone number: ${phone}
              <p>Message: ${message}`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
