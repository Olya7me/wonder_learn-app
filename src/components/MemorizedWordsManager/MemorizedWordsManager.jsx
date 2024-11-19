import { useState, useEffect } from "react";
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
        if (!memorizedWords.some((item) => item.id === word.id)) {
            setMemorizedWords([...memorizedWords, word]);
        }
    };

    return <WordCard onMemorize={handleMemorizeWord} />;
}

export default MemorizedWordsManager;
