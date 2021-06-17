import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/navBar";
import "./home.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar active="home" />
        <h1>This is the home page</h1>
      </div>
    );
  }
}

export default HomePage;
