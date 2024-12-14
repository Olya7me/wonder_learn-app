import PropTypes from "prop-types";
import "./ErrorMessage.scss";

function ErrorMessage({ code, message }) {
    return (
        <div className="error-message-wrapper">
            <div className="error-message-content">
                <h2 className="error-code">{code}</h2>
                <p className="error-text">
                    Кажется что-то пошло не так: {message}
                </p>
                <img
                    src="../../src/images/HomePage/alice.gif"
                    alt="Error Animation"
                    className="error-image"
                />
            </div>
        </div>
    );
}

ErrorMessage.propTypes = {
    code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;
