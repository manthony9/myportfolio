import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Switch, NavLink, Route } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import Articles from "./blog";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const ScrollTop = window.pageYOffset;

    if (ScrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <NavLink to="/">Morris Anthony</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
