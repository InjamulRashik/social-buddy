import React from "react";
import { Avatar, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
}));

const Comment = (props) => {
  const classes = useStyles();
  const { name, body, image } = props.comment;
  return (
    <div>
      <div>
        {" "}
        <img className={classes.root} src={image} alt="" />
        <p>
          <b>{name} : </b>
          {body}
        </p>
      </div>
    </div>
  );
};

export default Comment;
