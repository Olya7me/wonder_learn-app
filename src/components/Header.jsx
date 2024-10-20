function Header() {
    return (
        <nav className="header__navigation">
            <div className="header-container container">
                <div className="header__navigation-row">
                    <div className="header__navigation-logo">
                        <img
                            src="./src/images/navigation/logo.png"
                            alt="logo"
                        />
                        <span>Обучалка</span>
                    </div>
                    <div className="header__navigation-list">
                        <ul className="header__navigation-links">
                            <li className="header__navigation-link">
                                <a href="#">
                                    <img
                                        src="./src/images/navigation/search.png"
                                        alt="поиск"
                                    />
                                </a>
                            </li>
                            <li className="header__navigation-link">
                                <a href="#">Войти</a>
                            </li>
                            <li className="header__navigation-link">
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
