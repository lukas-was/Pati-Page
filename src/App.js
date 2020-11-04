import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/App.css";

import Header from "./layout/Header";
import Home from "./layout/pages/Home";
import About from "./layout/pages/About";
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
              <Home />
            </Route>
            <Route path="/about">
              <About />
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
