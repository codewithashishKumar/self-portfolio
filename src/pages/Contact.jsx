import "../styles/contact.css";
import Popup from "../pages/Popup";
import { useState } from "react";

const Contact = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();

        // ✅ Empty validation
        if (!name || !email || !message) {
            setPopupMessage("⚠️ Please fill in all fields.");
            setShowPopup(true);
            return;
        }

        // Optional email check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setPopupMessage("⚠️ Please enter a valid email with @.");
            setShowPopup(true);
            return;
        }

        try {

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setPopupMessage("✅ Message sent successfully!");
            setShowPopup(true);

            e.target.reset();
            return;

        } catch (error) {

            setPopupMessage("❌ Failed to send message.");
            setShowPopup(true);
            return;

        }

        setPopupMessage("✅ Message sent successfully!");
        setShowPopup(true);

        e.target.reset();
    };

    return (
        <section className="contactWrapper">
            <div className="contact">

                <h1 className="contact-title">
                    Let's Work Together 🚀
                </h1>

                <p className="contact-sub">
                    Have a project in mind? Feel free to reach out!
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>

                    {/* IMPORTANT: add name attributes */}

                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        name="email"
                        type="text"
                        placeholder="Your Email"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                    />

                    <button type="submit">
                        Send Message
                    </button>

                </form>

                <Popup
                    show={showPopup}
                    message={popupMessage}
                    onClose={() => setShowPopup(false)}
                />

            </div>
        </section>
    );
};

export default Contact;
