import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./AuthenticationComponent.css";
import { Button, Col, Container } from "react-bootstrap";

class AuthenticationComponent extends Component {
  render() {
    return (
      <Container id="loginForm">
        <Form.Row>
          <Col xs="12" sm="4">
            <Form.Label>Username:</Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Enter username" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="12" sm="4">
            <Form.Label>Password:</Form.Label>
          </Col>
          <Col>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Row>
        <Button id="loginButton" variant="primary" type="submit">
          Log In
        </Button>
      </Container>
    );
  }
}

export default AuthenticationComponent;
