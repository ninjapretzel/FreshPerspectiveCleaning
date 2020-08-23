import React from 'react';
import Navbar from "./components/navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import 'materialize-css/dist/css/materialize.min.css'
import './css/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container app-content">
        <h1>Place holder testing</h1>
      </div>
      {/* <Footer /> */ }
    </Router>

  );
}

export default App;
