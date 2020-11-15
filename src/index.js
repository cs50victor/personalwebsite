import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.scss';
import Domains from './Domains.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Domains/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);