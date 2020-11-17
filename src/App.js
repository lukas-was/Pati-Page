import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/App.css";

import Header from "./layout/Header";
import Home from "./layout/pages/Home";
import About from "./layout/pages/About";
import Navigation from "./layout/Navigation";
import Projects from "./layout/pages/Projects";
import Offer from "./layout/pages/Offer";
import Contact from "./layout/pages/Contact";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
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
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="/offer">
              <Offer />
            </Route>
            <Route path="/contact">
              <Contact />
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
