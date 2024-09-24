import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { GameContextProvider } from "./store/gameStoreProvider.jsx";

createRoot(document.getElementById("root")).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
