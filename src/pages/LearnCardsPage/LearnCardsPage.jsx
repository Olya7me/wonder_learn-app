import "./LearnCardsPage.scss";
import MemorizedWordsManager from "../../components/MemorizedWordsManager/MemorizedWordsManager";
import BackButton from "../../components/BackButton/BackButton";

const LearnCardsPage = () => {
    return (
        <div className="learn-cards-page">
            <BackButton />
            <MemorizedWordsManager />
        </div>
    );
};

export default LearnCardsPage;
