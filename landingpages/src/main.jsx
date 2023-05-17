import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./router/router.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router></Router>
  </Provider>
);
