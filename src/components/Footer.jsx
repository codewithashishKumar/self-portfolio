import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                © {new Date().getFullYear()} Ashish_Kumar. All rights reserved.
            </p>

            <div className="footer-links">
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
