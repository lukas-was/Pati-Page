import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/App.css";

import Header from "./layout/Header";
import Page from "./layout/pages/Page";
import Navigation from "./layout/Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <header>
            <Header />
          </header>
          <main>
            <Route exact path="/">
              <Page />
            </Route>
          </main>
          <nav>
            <Navigation />
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
