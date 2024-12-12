import "./BackButton.scss";
import { Link } from "react-router-dom";
function BackButton() {
    return (
        <div className="wrapper-button">
            <Link to="/">
                <button className="back-button">← Вернуться на главную</button>
            </Link>
        </div>
    );
}

export default BackButton;
