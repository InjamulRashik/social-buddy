import React from "react";
import { Avatar, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",
  },
  display: {
    display: "flex",
  },
}));

const Comment = (props) => {
  const classes = useStyles();
  const { name, body, image } = props.comment;
  return (
    <div>
      <div className={classes.display}>
        {" "}
        <img className={classes.root} src={image} alt="" /> <br />
        <p>
          <b>{name} : </b>
          {body}
        </p>{" "}
        <br />
      </div>
    </div>
  );
};

export default Comment;
