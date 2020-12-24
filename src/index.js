import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Domains from "./Domains.jsx";

import { GlobalStyles } from "twin.macro";
import IndexCss from "./IndexCss.js";
import "tailwindcss/dist/base.min.css";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles />
      <IndexCss />
      <Router>
        <Domains />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
