import { useState, useEffect } from "react";
import Vocabulary from "../../components/Vocabulary/Vocabulary";

const VocabularyPage = () => {
    const [memorizedWords, setMemorizedWords] = useState([]);

    useEffect(() => {
        const savedWords = localStorage.getItem("memorizedWords");
        if (savedWords) {
            setMemorizedWords(JSON.parse(savedWords));
        }
    }, []);

    const handleDeleteWord = (wordId) => {
        const updatedWords = memorizedWords.filter(
            (word) => word.id !== wordId
        );
        setMemorizedWords(updatedWords);
        localStorage.setItem("memorizedWords", JSON.stringify(updatedWords));
    };

    return (
        <div>
            <Vocabulary
                memorizedWords={memorizedWords}
                onDeleteWord={handleDeleteWord}
            />
        </div>
    );
};

export default VocabularyPage;
