import nodemailer from "nodemailer";

export default async (req, res) => {
  console.log("🚀 ~ file: sendmail.js:4 ~ req:", req.body)
  const { name, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: 'softsgens@gmail.com',
      pass: 'gcfokklkzusxugdi',
    }
  });

  try {
    await transporter.sendMail({
      from: 'mufaqar@gmail.com',
      to: "mufaqar@gmail.com",
      subject: `Contact form submission from ${name} `,
      html: `<p>Contact Us Query from Mufaqar.com</p>
        <p><strong>Name: </strong> ${name} </p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Phone Number: </strong> ${phone}</p>
        <p><strong>Message: </strong> ${message}</p>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};