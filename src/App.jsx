import Header from "./components/Header/Header";
import MemorizedWordsManager from "./components/MemorizedWordsManager/MemorizedWordsManager";
import Footer from "./components/Footer/Footer";

function CreateHeader() {
    return <Header />;
}

function CreateMemorizedWordsManager() {
    return <MemorizedWordsManager />;
}

function CreateFooter() {
    return <Footer />;
}

export { CreateHeader, CreateMemorizedWordsManager, CreateFooter };
