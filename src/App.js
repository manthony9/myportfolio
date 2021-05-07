import "./App.css";
import Card from "./components/card";
import Header from "./components/header";
import Section from "./components/section";
import Home from "./components/home";
import Footer from "./components/footer";
import About from "./components/about";
import Projects from "./components/projects";
import Articles from "./components/blog";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Articles} />
      </Switch>
    </>
  );
}

export default App;
