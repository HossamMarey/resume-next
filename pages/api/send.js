import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const data = [];
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
      // const transport = nodemailer.createTransport({
      //   host: process.env.NEXT_PUBLIC_MAIL_HOST,
      //   port: process.env.NEXT_PUBLIC_MAIL_PORT,
      //   auth: {
      //     user: process.env.NEXT_PUBLIC_MAIL_USER,
      //     pass: process.env.NEXT_PUBLIC_MAIL_PASS,
      //   },
      // });
      const transport = nodemailer.createTransport(
        smtpTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          auth: {
            user: process.env.NEXT_PUBLIC_GMAIL_USER,
            pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
          },
        })
      );

      await transport.sendMail(
        {
          from: process.env.NEXT_PUBLIC_GMAIL_USER,
          to: "hosMarey@gmail.com",
          subject: name + " | New message from hossmamarey . com",
          html: `<div>
          <strong> New Message From : ${name}</strong>
          <h4>Message</h4>
          <hr />
          <p><strong>Email : </strong> ${email} </p>
          <p> ${message} </p>
          </div>`,
          // text: message,
        },
        (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error });
          } else {
            res.status(200).json({ message: "done" });
          }
        }
      );
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
