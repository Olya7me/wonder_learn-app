import Header from "./components/Header";
import WordCard from "./components/WordCard";
import Footer from "./components/Footer";

function CreateHeader() {
    return <Header />;
}

function CreateWordCard() {
    return <WordCard />;
}
function CreateFooter() {
    return <Footer />;
}

export { CreateHeader, CreateWordCard, CreateFooter };
