import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";

export default function Domains() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}