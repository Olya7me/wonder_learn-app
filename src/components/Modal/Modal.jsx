import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Modal.scss";

function Modal({ closeModal, isSignIn, setCurrentUser }) {
    const [isAgree, setIsAgree] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [loginError, setLoginError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (
            !loginError &&
            !passwordError &&
            (isSignIn || (!isSignIn && !emailError && isAgree))
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [loginError, passwordError, emailError, isAgree, isSignIn]);

    const handleAgreeChange = (e) => {
        setIsAgree(e.target.checked);
    };

    const validateLogin = (value) => {
        if (!value.trim()) {
            return "Поле логин не может быть пустым";
        }
        if (value.length < 2 || value.length > 20) {
            return "Логин должен быть не менее 2 и не более 20 символов";
        }
        return "";
    };

    const validatePassword = (value) => {
        if (!value.trim()) {
            return "Поле пароль не может быть пустым";
        }
        if (value.length < 6 || value.length > 20) {
            return "Пароль должен быть не менее 6 и не более 20 символов";
        }
        return "";
    };

    const validateEmail = (value) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!value.trim()) {
            return "Поле email не может быть пустым";
        }
        if (!re.test(value)) {
            return "Неверный формат email";
        }
        return "";
    };

    const loginHandler = (e) => {
        const value = e.target.value;
        setLogin(value);
        setLoginError(validateLogin(value));
    };

    const passwordHandler = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validatePassword(value));
    };

    const emailHandler = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginErr = validateLogin(login);
        const passwordErr = validatePassword(password);
        const emailErr = isSignIn ? "" : validateEmail(email);

        setLoginError(loginErr);
        setPasswordError(passwordErr);
        setEmailError(emailErr);

        if (!loginErr && !passwordErr && !emailErr) {
            alert(
                isSignIn
                    ? "Вы успешно вошли!"
                    : "Вы успешно зарегистрировались!"
            );
            setCurrentUser(login);
            closeModal();
            return;
        }
    };

    return (
        <div onClick={closeModal} className="sign-in-modal">
            <div
                className="sign-in-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={closeModal} className="close-btn">
                    &times;
                </button>
                <h2 className="modal-title">
                    {isSignIn ? "Вход" : "Регистрация"}
                </h2>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <input
                        className={`modal-input ${
                            loginError ? "input-error" : ""
                        }`}
                        type="text"
                        name="login"
                        value={login}
                        placeholder={isSignIn ? "Логин" : "Придумайте логин"}
                        onChange={loginHandler}
                    />
                    {loginError && <p className="error">{loginError}</p>}
                    <input
                        className={`modal-input ${
                            passwordError ? "input-error" : ""
                        }`}
                        type="password"
                        name="password"
                        value={password}
                        placeholder={isSignIn ? "Пароль" : "Придумайте пароль"}
                        onChange={passwordHandler}
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                    {!isSignIn && (
                        <input
                            className={`modal-input ${
                                emailError ? "input-error" : ""
                            }`}
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Введите почту"
                            onChange={emailHandler}
                        />
                    )}
                    {!isSignIn && emailError && (
                        <p className="error">{emailError}</p>
                    )}
                    {!isSignIn && (
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                id="agree"
                                checked={isAgree}
                                onChange={handleAgreeChange}
                            />
                            <label htmlFor="agree">
                                Я согласен с условиями
                            </label>
                        </div>
                    )}
                    <button
                        className="submit-btn"
                        type="submit"
                        disabled={!isFormValid}
                    >
                        {isSignIn ? "Войти" : "Зарегистрироваться"}
                    </button>
                </form>
            </div>
        </div>
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isSignIn: PropTypes.bool.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
};

export default Modal;
