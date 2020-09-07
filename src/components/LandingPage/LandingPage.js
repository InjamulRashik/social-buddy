import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import logo from "../../image/logo.png";

const LandingPage = () => {
  return (
    <div>
      <Container fixed>
        <h1>Welcome, Mr. Test!</h1>
        <img src={logo} alt="" />
        <Container>
          <Link to="/home">
            <Button variant="contained" color="primary">
              Load News
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  );
};

export default LandingPage;
