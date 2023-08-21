import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import {store} from './App/store.js'
import { BrowserRouter } from "react-router-dom";
import './my.css'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<BrowserRouter>
  <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);