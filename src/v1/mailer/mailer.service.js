import { getMailOptions, transporter } from "../../utils/mailer.js"

export const sendEmail = async (req, res) => {
    const data = req.body
    const mailOptions = getMailOptions({
        subject: `A response from ${data.fromName}`,
        content: `
Name: ${data.fromName},
Email: ${data.fromEmail},
Content: ${data.content}
`,
    })
    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent: ' + info.response);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred: ' + error.message);
      }

}