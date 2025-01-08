import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.scss";
import Modal from "../Modal/Modal";

function Header() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 768
    ); // Отслеживание размера экрана

    // Обновление размера экрана при изменении
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function closeModal() {
        setIsOpenModal(false);
    }

    function openSignInModal() {
        setIsSignIn(true);
        setIsOpenModal(true);
    }

    function openSignUpModal() {
        setIsSignIn(false);
        setIsOpenModal(true);
    }

    function handleLogout() {
        setCurrentUser(null);
    }

    return (
        <header className="header">
            <nav className="navigation">
                <div className="navigation-container">
                    <div className="navigation-row">
                        <Link to="/">
                            <span className="navigation-logo">
                                WonderLearn 🐇
                            </span>
                        </Link>
                        <div className="navigation-list">
                            <ul className="links">
                                {isOpenModal && (
                                    <Modal
                                        closeModal={closeModal}
                                        isSignIn={isSignIn}
                                        setCurrentUser={setCurrentUser}
                                    />
                                )}
                                {isSmallScreen ? (
                                    <div className="image-buttons">
                                        <img
                                            src="../../src/images/Header/log.png"
                                            alt="Войти"
                                            onClick={openSignInModal}
                                        />
                                        <img
                                            src="../../src/images/Header/reg.png"
                                            alt="Регистрация"
                                            onClick={openSignUpModal}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <li className="link">
                                            {currentUser ? (
                                                <span className="user-greeting">
                                                    Привет, {currentUser}
                                                </span>
                                            ) : (
                                                <a
                                                    href="#"
                                                    onClick={openSignInModal}
                                                >
                                                    Войти
                                                </a>
                                            )}
                                        </li>
                                        {currentUser ? (
                                            <li className="link">
                                                <a
                                                    href="#"
                                                    onClick={handleLogout}
                                                >
                                                    Выйти
                                                </a>
                                            </li>
                                        ) : (
                                            <li className="link">
                                                <a
                                                    href="#"
                                                    onClick={openSignUpModal}
                                                >
                                                    Зарегистрироваться
                                                </a>
                                            </li>
                                        )}
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
