import React, { Component } from "react";
import RegisterForm from "../Components/registerform/index";
class RegisterPage extends Component {
  render() {
    return (
      <div className="register-page form-page">
        <div className="content-wrapper">
          <div className="branding">
            <h2 className="brand-title">DARECHAN</h2>
            <small>A Place Where Discussion is the norm</small>
          </div>
          <div className="form-wrapper">
            <RegisterForm />
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
