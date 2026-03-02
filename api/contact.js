import nodemailer from "nodemailer";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing fields" });
    }

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: "himanashish446@gmail.com",
            replyTo: email,
            subject: "New Contact Form Message",
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `
        });

        res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Email failed" });
    }
}