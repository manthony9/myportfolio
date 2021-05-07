import React from "react";
import Header from "./header";
import Footer from "./footer";
import Wave from "./Wave";
import Card from "./card";
export const Blog = () => {
  return (
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Blogs Hub</h1>
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

export default Blog;
