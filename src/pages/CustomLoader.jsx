import "../styles/CustomLoader.css";

const CustomLoader = () => {
    return (
        <div className="customLoaderOverlay">
            <div className="customLoader">
                <svg width="64px" height="48px" viewBox="0 0 64 48">
                    <polyline
                        points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                        className="back"
                    ></polyline>
                    <polyline
                        points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
                        className="front"
                    ></polyline>
                </svg>
            </div>
        </div>
    );
};

export default CustomLoader;
