import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./Store";

ReactDOM.render(
  <React.StrictMode>
    {/*  provides the photos fetched to all components */}
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
