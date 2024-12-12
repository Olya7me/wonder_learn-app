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
    const [viewedWordsCount, setViewedWordsCount] = useState(0);

    const incrementViewedWordsCount = () => {
        setViewedWordsCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <WordCard
                onMemorize={handleMemorizeWord}
                onViewWord={incrementViewedWordsCount}
                viewedWordsCount={viewedWordsCount}
            />
        </div>
    );
}

export default MemorizedWordsManager;
