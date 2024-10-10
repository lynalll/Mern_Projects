import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Check for required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        // Create the message
        await Message.create({ name, email, subject, message });
        return res.status(200).json({
            success: true,
            message: "Message sent successfully!"
        });
    } catch (error) {
        // Check for validation errors
        if (error.name === "ValidationError") {
            let errorMessage = "";

            // Use error.errors instead of error.erros
            if (error.errors.name) {
                errorMessage += error.errors.name.message + " ";
            }
            if (error.errors.email) {
                errorMessage += error.errors.email.message + " ";
            }
            if (error.errors.subject) {
                errorMessage += error.errors.subject.message + " ";
            }
            if (error.errors.message) {
                errorMessage += error.errors.message.message + " ";
            }

            return res.status(400).json({ // Return a 400 status for validation errors
                success: false,
                message: errorMessage.trim(), // Use trim() to remove any trailing spaces
            });
        }

        // Handle any other errors
        return res.status(500).json({
            success: false,
            message: "Unknown Error"
        });
    }
};
