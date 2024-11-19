import "./ErrorPage.scss";

const HomePage = () => {
    return (
        <div className="error-page">
            <div className="error-page-wrapper">
                <h1>Такая страница не найдена</h1>
                <div className="error-page-image">
                    <img
                        src="/src/images/ErrorPage/error.jpg"
                        alt="Error"
                        className="error"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
