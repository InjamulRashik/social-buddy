import React from "react";
import bg from "../../image/flat_404-.jpg";
import { makeStyles, Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <h1>404 Page Not Found!</h1>
      </Container>
    </div>
  );
};

export default NotFound;
