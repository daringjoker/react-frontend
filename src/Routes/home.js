import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/loginform/index";
import "./home.css";

class HomePage extends Component {
  render() {
    return (
      <div className="login-page form-page">
        <div className="fullbody">
          <div className="left-side">
            <div className="left-content">
              <h1 className="brand-title">DARECHAN</h1>
              <small>A Place Where Discussion is the Norm</small>
            </div>
          </div>
          <div className="right-side">
            <div className="content-wrapper">
              <div className="title">
                <h2 className="title-text">LOG IN</h2>
              </div>
              <div className="form-wrapper">
                <LoginForm />
                <Link className="btn btn-sec signup" to="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
