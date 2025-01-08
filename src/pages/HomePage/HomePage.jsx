import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HomePage.scss";

const HomePage = () => {
    const [isCatVisible, setIsCatVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsCatVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-page">
            <h1>
                Добро пожаловать в<span>WonderLearn! 🐇</span>
            </h1>
            <div className="home-page-wrapper">
                <ul className="items">
                    <Link to="/learn-cards">
                        <li className="item">Уроки Безумного Шляпника </li>
                    </Link>
                    <Link to="/vocabulary">
                        <li className="item">
                            Любопытные слова
                            <span className="quote">
                                &ldquo;Все чудесатее и чудесатее!&rdquo;
                            </span>
                        </li>
                    </Link>
                    <Link to="/about-page">
                        <li className="item">Немного о нас</li>
                    </Link>
                </ul>
                <div className="main-image">
                    <img src="../../src/images/HomePage/mainAlice.png" />
                </div>
                <div className={`cat-image ${isCatVisible ? "visible" : ""}`}>
                    <img
                        src="../../src/images/HomePage/cat.png"
                        alt="Cheshire Cat"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
