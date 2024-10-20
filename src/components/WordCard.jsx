function WordCard() {
    return (
        <div className="word-card">
            <div className="word-card__content">
                <div className="word-card__word">Слово</div>
                <div className="word-card__translation">Перевод</div>
            </div>
            <button className="word-card__button">Показать перевод</button>
        </div>
    );
}

export default WordCard;
