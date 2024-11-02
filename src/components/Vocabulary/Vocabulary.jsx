import PropTypes from "prop-types";
import "./Vocabulary.scss";
import trashIcon from "../../images/vocabulary/trash-can.png";

function Vocabulary({ memorizedWords, onDeleteWord }) {
    return (
        <section className="vocabulary">
            <h2>Словарь запомненных слов</h2>
            <table className="vocabulary-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>English</th>
                        <th>Transcription</th>
                        <th>Russian</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {memorizedWords.map((word, index) => (
                        <tr key={word.id}>
                            <td>{index + 1}</td>
                            <td>{word.english}</td>
                            <td>{word.transcription}</td>
                            <td>{word.russian}</td>
                            <td>
                                <button
                                    className="delete-btn"
                                    onClick={() => onDeleteWord(word.id)}
                                >
                                    <img src={trashIcon} alt="Удалить" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

Vocabulary.propTypes = {
    memorizedWords: PropTypes.array.isRequired,
    onDeleteWord: PropTypes.func.isRequired,
};

export default Vocabulary;
