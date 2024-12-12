import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import wordsData from "../../data/words";
import "./WordCard.scss";

function WordCard({ onMemorize, initialIndex, onViewWord, viewedWordsCount }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [viewedIndices, setViewedIndices] = useState([]);

    const memorizeButtonRef = useRef(null);

    useEffect(() => {
        if (memorizeButtonRef.current) {
            memorizeButtonRef.current.focus();
        }
    }, [currentIndex]);

    if (!wordsData || wordsData.length === 0) {
        return <div>Нет доступных слов для отображения.</div>;
    }

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
        if (!viewedIndices.includes(currentIndex)) {
            setViewedIndices((prev) => [...prev, currentIndex]);
            onViewWord();
        }
        setIsFlipped((prev) => !prev);
    };

    const handleMemorizeClick = (e) => {
        e.stopPropagation();
        onMemorize(wordsData[currentIndex]);
    };

    return (
        <section className="word-cards">
            <p className="count-words">Изучено слов: {viewedWordsCount}</p>
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
                        ref={memorizeButtonRef}
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
    onViewWord: PropTypes.func.isRequired,
    viewedWordsCount: PropTypes.number.isRequired,
    initialIndex: PropTypes.number,
};

WordCard.defaultProps = {
    initialIndex: 0,
};

export default WordCard;
