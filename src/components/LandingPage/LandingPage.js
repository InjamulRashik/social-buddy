import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, makeStyles } from "@material-ui/core";
import logo from "../../image/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    height: "50%",
    borderRadius: "50%",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Container fixed>
        <h1>Welcome, Mr. Test!</h1>
        <img className={classes.root} src={logo} alt="" />
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
