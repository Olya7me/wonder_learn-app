import { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { WordContext } from "../../components/WordsContext/WordsContext";
import "./WordCard.scss";

function WordCard({ onMemorize, initialIndex, onViewWord, viewedWordsCount }) {
    const { words } = useContext(WordContext);
    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(true);
    const [viewedIndices, setViewedIndices] = useState([]);
    const memorizeButtonRef = useRef(null);

    useEffect(() => {
        if (memorizeButtonRef.current) {
            memorizeButtonRef.current.focus();
        }
    }, [currentIndex]);

    useEffect(() => {
        setIsFlipped(false);
        setIsAnimationComplete(true);
    }, [currentIndex]);

    useEffect(() => {
        const cardElement = document.querySelector(".word-card");
        const handleTransitionEnd = () => {
            setIsAnimationComplete(true);
        };

        if (cardElement) {
            cardElement.addEventListener("transitionend", handleTransitionEnd);
        }

        return () => {
            if (cardElement) {
                cardElement.removeEventListener(
                    "transitionend",
                    handleTransitionEnd
                );
            }
        };
    }, []);

    if (!words || words.length === 0) {
        return (
            <div className="empty-words">
                Нет доступных слов для отображения.
            </div>
        );
    }

    const nextWord = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            playSoundNext();
        }
    };

    const previousWord = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            playSoundNext();
        }
    };

    const { english, transcription, russian } = words[currentIndex];

    const handleCardClick = () => {
        if (!viewedIndices.includes(currentIndex)) {
            setViewedIndices((prev) => [...prev, currentIndex]);
            onViewWord();
        }
        setIsAnimationComplete(false);
        setIsFlipped((prev) => !prev);
    };

    const handleMemorizeClick = (e) => {
        e.stopPropagation();
        onMemorize(words[currentIndex]);
        playSoundRemembered();
    };

    const handleSoundClick = (e) => {
        e.stopPropagation();
        speakWord(english);
    };

    const speakWord = (word) => {
        const speech = new SpeechSynthesisUtterance(word);
        speech.lang = "en-US";
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    };

    const playSoundRemembered = () => {
        const audioRemembered = new Audio("../../src/sounds/remember.mp3");
        audioRemembered.play();
    };

    const playSoundNext = () => {
        const audioNext = new Audio("../../src/sounds/next.mp3");
        audioNext.play();
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
                    {!isFlipped && isAnimationComplete && (
                        <button
                            className="sound-btn visible"
                            onClick={handleSoundClick}
                        >
                            <img
                                src="../../src/images/wordCard/sound-btn.png"
                                alt="Sound Button"
                            />
                        </button>
                    )}
                </div>
                <div className="card-buttons">
                    <button
                        className="btn back"
                        onClick={(e) => {
                            e.stopPropagation();
                            previousWord();
                        }}
                        disabled={currentIndex === 0}
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
                        disabled={currentIndex === words.length - 1}
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
