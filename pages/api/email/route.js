let nodemailer = require('nodemailer')

const EMAIL = "softsgens@gmail.com"
const GMAIL_PASSWORD = "bczjxzfatgxsebrz"

export default function handler(

     req,
     res
) {
     // step-1 
     const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
               user: EMAIL,
               pass: GMAIL_PASSWORD
          },
          secure: true,
     })

     // step-2
     const mailData = {
          from: EMAIL,
          to: `softsgens@gmail.com, ${req.body.email}`,
          subject: `Message From ${req.body.name}`,
          text: req.body.message + " | Sent from: " + req.body.email,
          html: `
               <p><strong>Name: </strong> ${req.body.name}</p>
               <p><strong>Email: </strong> ${req.body.email}</p>
               <p><strong>Phone number: </strong> ${req.body.phone}</p>
               <p><strong>Message: </strong> ${req.body.message}</p> `
     }

     // step-3

     transporter.sendMail(mailData, function (err, info) {
          if (err) {
               res.status(500).json({
                    status: false,
                    message: "Email not send"
               })
          }
          else {
               res.status(200).json({
                    status: true,
                    message: "Send Successully"
               })
          }
     })
}
