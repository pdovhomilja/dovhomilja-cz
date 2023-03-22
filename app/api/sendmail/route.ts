import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    //GET DATA FROM REQUEST BODY
    const res = await request.json();

    let nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail.isfgroup.cz",
      auth: {
        user: "smtp@softbase.cz",
        pass: process.env.SMTP_PASSWORD,
      },
      secure: true,
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error: any, success: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailData = {
      from: res.email,
      to: "pavel@dovhomilja.cz",
      subject: `Message From ${res.name} - ${res.phone}`,
      text: res.message + " | Sent from: " + res.email,
      html: `<div>${res.message}</div><p>Sent from: ${res.email}</p><br />`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err: any, info: any) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
