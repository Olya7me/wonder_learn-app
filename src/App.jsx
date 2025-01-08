import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WordsProvider } from "./components/WordsContext/WordsContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import LearnCardsPage from "./pages/LearnCardsPage/LearnCardsPage";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutPage from "./pages/AboutPage/AboutPage";
const App = () => {
    return (
        <WordsProvider>
            <Router>
                <Header />
                <main className="main-container container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/vocabulary"
                            element={<VocabularyPage />}
                        />
                        <Route
                            path="/learn-cards"
                            element={<LearnCardsPage />}
                        />
                        <Route path="/about-page" element={<AboutPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </WordsProvider>
    );
};

export default App;
