import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Layout from "./shared/Layout/Layout.jsx";
import Home from "./Home/Home.jsx";

export default function Domains() {
  return (
      <Layout>
          <Router>
              <Route exact path="/"  component={Home} />
          </Router>
      </Layout>
  );
}