import nodemailer from "nodemailer";

const data = [];
export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { name, email, mmessage } = req.body;
      const transport = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_MAIL_HOST,
        port: process.env.NEXT_PUBLIC_MAIL_PORT,
        auth: {
          user: process.env.NEXT_PUBLIC_MAIL_USER,
          pass: process.env.NEXT_PUBLIC_MAIL_PASS,
        },
      });

      let resp = await transport.sendMail({
        from: email,
        to: "hosMarey@gmail.com",
        subject: name + " | New message from hossmamarey . com",
        html: `<div>
        <strong> New Message From : ${name}</strong>
        <h4>Message</h4>
        <hr />
        <p> ${message} </p>
        </div>`,
      });

      res.status(200).json({ message: "done" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
