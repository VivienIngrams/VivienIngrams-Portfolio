'use server'

// https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

import nodemailer from "nodemailer";

// export async function sendEmail(prevState: any, formData: FormData {
//   try {
//     const { name, email, phone, subject, message } = await request.json();

//     const user = process.env.user;

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user,
//         pass: process.env.pass,
//       },
//       tls : { rejectUnauthorized: false }
//     });

//     const mailOption = {
//       to: user,
//       from: process.env.email,
//       replyTo: email,
//       subject: `Form submission: ${subject}`,
//       html: `
//               <p>Name: ${name}</p>
//               <p>Email: ${email}
//               <p>Phone number: ${phone}
//               <p>Message: ${message}`,
//     };

//     await transporter.sendMail(mailOption);

//     return response.json(
//       { message: "Email Sent Successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return response.json(
//       { message: "Failed to Send Email" },
//       { status: 500 }
//     );
//   }
// }
