import { sendEmail } from './mailer.service.js'

export const newMailer = async (req, res) => {
    try {
        const { fromEmail, fromName, content } = req.body

        if (!fromName || !fromEmail || !content) {
            return res.status(400).json({ 
                message: 'Bad Request: Missing required fields (fromName, fromEmail, or content)' 
            });
        }
        await sendEmail(req, res)
    } catch (error) {
        res
            .status(500)
            .send(
                error.message || 'An error occurred while sending response.'
            )
    }
}