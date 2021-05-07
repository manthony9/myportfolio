import React from "react";
import Header from "./header";
import Footer from "./footer";
import Wave from "./Wave";
import Card from "./card";
export const About = () => {
  return (
    <div>
      <Header />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Projects Hub</h1>

          <div className="Logos">
            <img
              src={require("../images/logo-angular.svg").default}
              width="50"
              alt=""
            />
            <img
              src={require("../images/logo-figma.png").default}
              width="50"
              alt=""
            />
            <img
              src={require("../images/logo-python.svg").default}
              width="50"
              alt=""
            />
            <img
              src={require("../images/logo-c++.svg").default}
              width="50"
              alt=""
            />
            <img
              src={require("../images/logo-react.png").default}
              width="50"
              alt=""
            />
            <img
              src={require("../images/logo-swift.png").default}
              width="50"
              alt=""
            />
          </div>

          <Wave />
        </div>
      </div>
      <div className="CardContainer">
        <div className="Cards">
          <h2>Projects</h2>
          <div className="CardGroup">
            <Card
              title="Design Systems"
              text="Git"
              image={require("../images/wallpaper.jpg").default}
            />
            <Card
              title="React for Designers"
              text="Git"
              image={require("../images/wallpaper2.jpg").default}
            />
            <Card
              title="Sound Design"
              text="Git"
              image={require("../images/wallpaper3.jpg").default}
            />
            <Card
              title="Arkit 2"
              text="Git"
              image={require("../images/wallpaper4.jpg").default}
            />
            <Card
              title="Arkit 2"
              text="Git"
              image={require("../images/wallpaper.jpg").default}
            />
            <Card
              title="Arkit 2"
              text="Git"
              image={require("../images/wallpaper2.jpg").default}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
