import React from "react";
import ReactDOM from "react-dom/client";
import { CreateHeader, CreateMemorizedWordsManager, CreateFooter } from "./App";

ReactDOM.createRoot(document.querySelector(".header")).render(
    <React.StrictMode>
        <CreateHeader />
    </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector(".main-container")).render(
    <React.StrictMode>
        <CreateMemorizedWordsManager />
    </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector(".footer")).render(
    <React.StrictMode>
        <CreateFooter />
    </React.StrictMode>
);
