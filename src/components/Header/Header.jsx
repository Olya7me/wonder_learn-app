import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <div className="navigation-container ">
                    <div className="navigation-row">
                        <Link to="/">
                            <span className="navigation-logo">
                                WonderLearn 🐇
                            </span>
                        </Link>
                        <div className="navigation-list">
                            <ul className="links">
                                <li className="link">
                                    <a href="#">Войти</a>
                                </li>
                                <li className="link">
                                    <a href="#">Зарегестрироваться</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
