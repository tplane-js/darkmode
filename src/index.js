import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/AppContainer";
import App from "./components/App";
import { ThemeProvider } from "./context/ThemeContext.js";
import "./sass/_main.scss";

ReactDOM.render(
  <ThemeProvider>
    <AppContainer>
      <App />
    </AppContainer>
  </ThemeProvider>,
  document.getElementById("root")
);
