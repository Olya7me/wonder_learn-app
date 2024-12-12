import "./ErrorPage.scss";
import BackButton from "../../components/BackButton/BackButton";

const HomePage = () => {
    return (
        <div className="error-page">
            <BackButton />
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
