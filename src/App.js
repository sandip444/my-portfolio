import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
