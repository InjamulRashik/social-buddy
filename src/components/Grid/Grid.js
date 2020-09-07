import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import { Card } from "@material-ui/core";
import Card from "../Card/Card.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={3}>
          {posts.map((post) => (
            <Card post={post}></Card>
          ))}
          <br />
        </Grid>
        <Grid item xs={6} sm={3}>
          {posts.map((post) => (
            <Card post={post}></Card>
          ))}
        </Grid>
        <br />
        <Grid item xs={6} sm={3}>
          {posts.map((post) => (
            <Card post={post}></Card>
          ))}
        </Grid>
        <br />
        <Grid item xs={6} sm={3}>
          {posts.map((post) => (
            <Card post={post}></Card>
          ))}
        </Grid>
        <br />
      </Grid>
    </div>
  );
}
