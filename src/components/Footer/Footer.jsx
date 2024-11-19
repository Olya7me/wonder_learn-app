import "./Footer.scss";
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content">
                    <div className="info">
                        <span>&copy; 2024 FlashLearn. Все права защищены.</span>
                    </div>
                    <div className="navigation">
                        <ul className="links">
                            <li className="link">
                                <a href="#">О нас</a>
                            </li>
                            <li className="link">
                                <a href="#">Контакты</a>
                            </li>
                            <li className="link">
                                <a href="#">Политика конфиденциальности</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
