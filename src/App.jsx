import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import LearnCardsPage from "./pages/LearnCardsPage/LearnCardsPage";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="main-container container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/vocabulary" element={<VocabularyPage />} />
                    <Route path="/learn-cards" element={<LearnCardsPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
