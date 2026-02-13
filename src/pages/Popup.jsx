import "../styles/popup.css";

const Popup = ({ show, message, onClose }) => {
    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-box">

                <p>{message}</p>

                <button onClick={onClose}>
                    Close
                </button>

            </div>
        </div>
    );
};

export default Popup;
