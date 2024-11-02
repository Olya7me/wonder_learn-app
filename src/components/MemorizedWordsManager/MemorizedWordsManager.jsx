import { useState, useEffect } from "react";
import Vocabulary from "../Vocabulary/Vocabulary";
import WordCard from "../WordCard/WordCard";

function MemorizedWordsManager() {
    const [memorizedWords, setMemorizedWords] = useState(() => {
        const savedWords = localStorage.getItem("memorizedWords");
        return savedWords ? JSON.parse(savedWords) : [];
    });

    useEffect(() => {
        localStorage.setItem("memorizedWords", JSON.stringify(memorizedWords));
    }, [memorizedWords]);

    const handleMemorizeWord = (word) => {
        setMemorizedWords((prevWords) => {
            if (prevWords.some((item) => item.id === word.id)) {
                return prevWords;
            }
            return [...prevWords, word];
        });
    };

    const handleDeleteWord = (wordId) => {
        setMemorizedWords((prevWords) => {
            const updatedWords = prevWords.filter((word) => word.id !== wordId);
            return updatedWords;
        });
    };

    return (
        <div>
            <WordCard onMemorize={handleMemorizeWord} />
            <Vocabulary
                memorizedWords={memorizedWords}
                onDeleteWord={handleDeleteWord}
            />
        </div>
    );
}

export default MemorizedWordsManager;
