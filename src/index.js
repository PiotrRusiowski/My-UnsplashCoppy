import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./theme/mainTheme";
import { Provider } from "react-redux";
import store from "./store";

Modal.setAppElement("#root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
