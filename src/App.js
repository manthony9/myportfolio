import "./App.css";
import Card from "./components/card";
import Header from "./components/header";
import Section from "./components/section";
import Wave from "./components/Wave";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="Hero">
          <div className="HeroGroup">
            <h1>Hi! my name is Morris</h1>
            <p>Welcome to my Portfolio.</p>

            <div className="Logos">
              <img
                src={require("./images/logo-angular.svg").default}
                width="50"
                alt=""
              />
              <img
                src={require("./images/logo-figma.png").default}
                width="50"
                alt=""
              />
              <img
                src={require("./images/logo-python.svg").default}
                width="50"
                alt=""
              />
              <img
                src={require("./images/logo-c++.svg").default}
                width="50"
                alt=""
              />
              <img
                src={require("./images/logo-react.png").default}
                width="50"
                alt=""
              />
              <img
                src={require("./images/logo-swift.png").default}
                width="50"
                alt=""
              />
            </div>

            <Wave />
          </div>
        </div>
        <div className="Cards">
          <h2>Projects</h2>
          <div className="CardGroup">
            <Card
              title="Design Systems"
              text="10 Sections"
              image={require("./images/wallpaper.jpg").default}
            />
            <Card
              title="React for Designers"
              text="12 Sections"
              image={require("./images/wallpaper2.jpg").default}
            />
            <Card
              title="Sound Design"
              text="5 Sections"
              image={require("./images/wallpaper3.jpg").default}
            />
            <Card
              title="Arkit 2"
              text="10 Sections"
              image={require("./images/wallpaper4.jpg").default}
            />
            <Card
              title="Arkit 2"
              text="10 Sections"
              image={require("./images/wallpaper.jpg").default}
            />
            <Card
              title="Arkit 2"
              text="10 Sections"
              image={require("./images/wallpaper2.jpg").default}
            />
          </div>
        </div>
        <Section
          image={require("./images/wallpaper4.jpg").default}
          title="About Me"
          text="I'm a Computer Programming and Analysis student at Seneca College. I love problem solving. I started my career in Customer Service, taught myself SQL and worked as a Information Systems Analyst. Currently looking for Co-Op positions in Software Development."
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
