import React from "react";
import "normalize.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Contacts from "./components/Contacts";
import Bio from "./components/Bio";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Route exact path="/" component={Hero} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/projects" component={Projects} />
      </Wrapper>
      <Footer />
    </Router>
  );
};

export default App;
