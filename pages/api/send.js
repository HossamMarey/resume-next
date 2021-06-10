import nodemailer from "nodemailer";
import mailgun from "mailgun-js";

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;

      const mg = mailgun({
        apiKey: process.env.NEXT_PUBLIC_MG_KEY,
        domain: process.env.NEXT_PUBLIC_MG_DOMAIN,
      });

      const data = {
        from: "mando.mando.hm@gmail.com",
        to: "hosMarey@gmail.com",
        subject: name + " | New message from hossmamarey . com",
        text: "EMAIL : \n " + email + " \n MESSAGE : \n " + message,
      };

      let resp = await mg.messages().send(data);

      if (resp) {
        res.status(200).json({ message: "done", success: true });
      } else {
        console.log("error", resp);
        res.status(400).json({ error: "error" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};
