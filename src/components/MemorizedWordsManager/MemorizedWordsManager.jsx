import { useState, useContext } from "react";
import { WordContext } from "../../components/WordsContext/WordsContext";
import WordCard from "../WordCard/WordCard";

function MemorizedWordsManager() {
    const { memorizeWord } = useContext(WordContext);
    const [viewedWordsCount, setViewedWordsCount] = useState(0);

    const incrementViewedWordsCount = () => {
        setViewedWordsCount((prevCount) => prevCount + 1);
    };

    const handleMemorizeWord = (word) => {
        memorizeWord(word);
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
