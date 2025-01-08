import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BackButton.scss";

function BackButton() {
    const [buttonText, setButtonText] = useState("← Вернуться на главную");

    useEffect(() => {
        const updateButtonText = () => {
            if (window.innerWidth <= 460) {
                setButtonText("←");
            } else {
                setButtonText("← Вернуться на главную");
            }
        };

        updateButtonText();

        window.addEventListener("resize", updateButtonText);

        return () => {
            window.removeEventListener("resize", updateButtonText);
        };
    }, []);

    return (
        <div className="wrapper-button">
            <Link to="/">
                <button className="back-button">{buttonText}</button>
            </Link>
        </div>
    );
}

export default BackButton;
