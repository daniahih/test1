import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={emojiApi}> */}
      <App />
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>
);
