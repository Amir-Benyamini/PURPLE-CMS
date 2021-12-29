import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "mobx-react";
import { userStore } from "./stores/UserStore";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <BrowserRouter>
        {/* <Provider {...userStore}> */}
        <App store={userStore} />
        {/* </Provider> */}
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
