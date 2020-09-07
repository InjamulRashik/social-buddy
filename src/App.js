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
import NotFound from "./components/NotFound/NotFound";

const useStyles = makeStyles({});
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Container fixed>
              <Home></Home>
            </Container>
          </Route>
          <Route path="/detail/:postid">
            <Header></Header>
            <Container fixed>
              <Detail></Detail>
            </Container>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
