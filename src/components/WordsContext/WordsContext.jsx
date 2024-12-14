import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export const WordContext = createContext();

function WordsProvider({ children }) {
    const [words, setWords] = useState([]);
    const [memorizedWords, setMemorizedWords] = useState(() => {
        const savedWords = localStorage.getItem("memorizedWords");
        return savedWords ? JSON.parse(savedWords) : [];
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchWords() {
        try {
            const response = await fetch(
                "http://itgirlschool.justmakeit.ru/api/words"
            );
            if (!response.ok) {
                setError({
                    code: response.status,
                    message: response.statusText || "Неизвестная ошибка",
                });
                return;
            }
            const data = await response.json();
            setWords(data);
        } catch (err) {
            setError({
                code: "Network Error",
                message: `Не удалось подключиться к серверу. Ошибка: ${err.message}`,
            });
        } finally {
            setLoading(false);
        }
    }

    function memorizeWord(word) {
        setMemorizedWords((prevWords) => {
            if (!prevWords.some((item) => item.id === word.id)) {
                const updatedWords = [...prevWords, word];
                localStorage.setItem(
                    "memorizedWords",
                    JSON.stringify(updatedWords)
                );
                return updatedWords;
            }
            return prevWords;
        });
    }

    function removeMemorizedWord(id) {
        setMemorizedWords((prevWords) => {
            const updatedWords = prevWords.filter((word) => word.id !== id);
            localStorage.setItem(
                "memorizedWords",
                JSON.stringify(updatedWords)
            );
            return updatedWords;
        });
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <WordContext.Provider
            value={{
                words,
                memorizedWords,
                loading,
                error,
                memorizeWord,
                removeMemorizedWord,
            }}
        >
            {loading && <Loader />}
            {error && !loading && (
                <ErrorMessage code={error.code} message={error.message} />
            )}
            {!loading && !error && children}
        </WordContext.Provider>
    );
}

WordsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { WordsProvider };
