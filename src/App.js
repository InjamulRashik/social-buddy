import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
//import Card from "./components/Card/Card";
import { makeStyles, Container } from "@material-ui/core";
import Home from "./components/Home/Home";
//import Grid from "@material-ui/core/Grid";
import Detail from "./components/Detail/Detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

const useStyles = makeStyles({});
export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/home">
            <Container fixed>
              <Home></Home>
            </Container>
          </Route>
          <Route path="/detail/:postid">
            <Container fixed>
              <Detail></Detail>
            </Container>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
