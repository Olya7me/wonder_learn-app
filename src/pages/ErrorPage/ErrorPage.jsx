import "./ErrorPage.scss";
import BackButton from "../../components/BackButton/BackButton";

const HomePage = () => {
    return (
        <div>
            <BackButton />
            <div className="error-page">
                <div className="error-page-wrapper">
                    <h1>Page not found</h1>
                    <div className="error-page-image">
                        <img
                            src="../../src/images/ErrorPage/cat.png"
                            alt="Error"
                            className="error"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
