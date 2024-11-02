import { useState } from "react";
import PropTypes from "prop-types";
import wordsData from "../../data/words";
import "./WordCard.scss";

function WordCard({ onMemorize }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const nextWord = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsData.length);
    };

    const previousWord = () => {
        setIsFlipped(false);
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + wordsData.length) % wordsData.length
        );
    };

    const { english, transcription, russian } = wordsData[currentIndex];

    const handleCardClick = () => {
        setIsFlipped((prev) => !prev);
    };

    const handleMemorizeClick = (e) => {
        e.stopPropagation();
        onMemorize(wordsData[currentIndex]);
    };

    return (
        <section className="word-cards">
            <div
                className={`word-card ${isFlipped ? "flipped" : ""}`}
                onClick={handleCardClick}
            >
                <div className="card-content">
                    <h2 className="word">{english}</h2>
                    <p className="transcription">{transcription}</p>
                    {isFlipped && <div className="card-back">{russian}</div>}
                </div>
                <div className="card-buttons">
                    <button
                        className="btn back"
                        onClick={(e) => {
                            e.stopPropagation();
                            previousWord();
                        }}
                    >
                        Назад
                    </button>
                    <button
                        className="btn remember"
                        onClick={handleMemorizeClick}
                    >
                        Запомнить
                    </button>
                    <button
                        className="btn next"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextWord();
                        }}
                    >
                        Далее
                    </button>
                </div>
            </div>
        </section>
    );
}

WordCard.propTypes = {
    onMemorize: PropTypes.func.isRequired,
};

export default WordCard;
