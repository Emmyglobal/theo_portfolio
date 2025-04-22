const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})

app.post("/send-email", async (req, res) => {
    const { name, email, message } =  req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Your Email was sent successfully!"});
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send  Email. Please try again"});
    }
});