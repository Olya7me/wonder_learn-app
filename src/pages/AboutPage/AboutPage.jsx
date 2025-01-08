import "./AboutPage.scss";
import BackButton from "../../components/BackButton/BackButton";

const AboutPage = () => {
    return (
        <div className="about">
            <BackButton />
            <div className="about-page">
                <div className="about-page-wrapper">
                    <h1>О приложении</h1>
                    <p className="about-description">
                        Это приложение создано для детей, чтобы помочь им учить
                        английский язык легко и увлекательно. С помощью карточек
                        с английскими словами, их переводами и произношением,
                        дети могут тренировать свою память, расширять словарный
                        запас и улучшать произношение.
                    </p>
                    <p className="about-features">
                        <h2>Основные функции приложения:</h2>
                        <ul>
                            <li>
                                💙 Флешкарты с английскими словами и переводами.
                            </li>
                            <li>💙 Произношение слов на английском.</li>
                            <li>💙 Удобный интерфейс, подходящий для детей.</li>
                        </ul>
                    </p>
                    <p className="about-motivation">
                        Наше приложение делает процесс обучения веселым и
                        интерактивным, превращая изучение языка в игру. Оно
                        идеально подходит для первых шагов в изучении
                        английского!
                    </p>
                    <div className="about-page-image">
                        <img
                            src="../../src/images/AboutPage/cookie.png"
                            alt="About"
                            className="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
