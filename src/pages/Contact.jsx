import "../styles/contact.css";

const Contact = () => {
    return (
        <section className="contact">

            <h1 className="contact-title">
                Let's Work Together 🚀
            </h1>

            <p className="contact-sub">
                Have a project in mind? Feel free to reach out!
            </p>

            <form className="contact-form">

                <input
                    type="text"
                    placeholder="Your Name"
                    required
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    required
                />

                <textarea
                    placeholder="Your Message"
                    rows="6"
                    required
                />

                <button type="submit">
                    Send Message
                </button>

            </form>

        </section>
    );
};

export default Contact;
