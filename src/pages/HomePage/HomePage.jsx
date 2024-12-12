import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>
                Добро пожаловать в<span>WonderLearn! 🐇</span>
            </h1>
            <div className="home-page-wrapper">
                <ul className="items">
                    <li className="item">
                        <Link to="/learn-cards">
                            Уроки Безумного Шляпника 🎩
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/vocabulary">
                            Любопытные слова 🪞
                            <span className="quote">
                                &ldquo;Все чудесатее и чудесатее!&rdquo;
                            </span>
                        </Link>
                    </li>
                    <li className="item">
                        <span className="quote">
                            &ldquo;Позже здесь будет режим тренировки&rdquo;
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
