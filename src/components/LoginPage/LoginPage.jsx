import React, { Component } from "react";
import AuthenticationComponent from "./AuthenticationComponent/AuthenticationComponent";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <div id="dashboardTitle">
          <h1>dashboard</h1>
        </div>
        <div>
          <AuthenticationComponent />
        </div>
      </div>
    );
  }
}

export default LoginPage;
