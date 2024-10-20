import React from "react";
import ReactDOM from "react-dom/client";
import { CreateHeader, CreateWordCard, CreateFooter } from "./App"; // Используем деструктурированный импорт
import "./scss/index.scss";

ReactDOM.createRoot(document.querySelector(".header")).render(
    <React.StrictMode>
        <CreateHeader />
    </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector(".word-cards")).render(
    <React.StrictMode>
        <CreateWordCard />
    </React.StrictMode>
);
ReactDOM.createRoot(document.querySelector(".footer")).render(
    <React.StrictMode>
        <CreateFooter />
    </React.StrictMode>
);
