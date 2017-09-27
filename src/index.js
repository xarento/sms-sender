import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Row, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Router>
    <div>
      <Navbar staticTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Site</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Grid>
        <Row>
          <Jumbotron>
            <Hello name="Tester" />
            <p>Start editing to see some magic happen {"\u2728"}</p>
          </Jumbotron>

          
        </Row>
      </Grid>
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
