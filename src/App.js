import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./style/App.css";

import Header from "./layout/Header";
import Page from "./layout/pages/Page";
import Navigation from "./layout/Navigation";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <Page />
        </main>
        <nav>
          <Navigation />
        </nav>
      </div>
    </Router>
  );
}

export default App;
