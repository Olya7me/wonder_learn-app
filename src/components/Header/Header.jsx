import "./Header.scss";
function Header() {
    return (
        <nav className="navigation">
            <div className="navigation-container ">
                <div className="navigation-row">
                    <div className="navigation-logo">
                        <span>FlashLearn</span>
                    </div>
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
    );
}

export default Header;
