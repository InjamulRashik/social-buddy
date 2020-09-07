import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { title, body, id } = props.post;
  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            <b>{title}</b>
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/detail/${id}`}>
            <Button size="small" color="primary">
              Show more
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
