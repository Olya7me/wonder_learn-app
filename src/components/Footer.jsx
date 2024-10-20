function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__info">
                        <span>&copy; 2024 Обучалка. Все права защищены.</span>
                    </div>
                    <div className="footer__navigation">
                        <ul className="footer__links">
                            <li className="footer__link">
                                <a href="#">О нас</a>
                            </li>
                            <li className="footer__link">
                                <a href="#">Контакты</a>
                            </li>
                            <li className="footer__link">
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
