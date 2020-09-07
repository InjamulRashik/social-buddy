import React, { useEffect, useState } from "react";
import logo from "../../image/logo.png";
import AddShoppingCartIcon from "@material-ui/icons/Comment";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
import { commentData } from "../../fakeData/commentData";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    width: "50%",
    height: "50%",
    borderRadius: "50%",
  },
}));

const Detail = () => {
  const first5Comment = commentData.slice(0, 5);
  const { postid } = useParams();
  const classes = useStyles();
  const [detail, setDetail] = useState({});
  const [comments, setComment] = useState(first5Comment);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, []);
  return (
    <div>
      <React.Fragment>
        <Card>
          <CardContent>
            <CardMedia>
              <img className={classes.root} src={logo} alt="" />
            </CardMedia>
            <Typography gutterBottom variant="h5" component="h2">
              <h2>
                <b>Title : {detail.title}</b>
              </h2>
            </Typography>
            <Typography variant="body2" color="" component="p">
              <h4>{detail.body}</h4>
            </Typography>
            <Typography variant="body2" component="p"></Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <h4>
                <b>Comments</b> <br />
              </h4>
              <p>
                {" "}
                {comments.map((cm) => (
                  <Comment comment={cm}></Comment>
                ))}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    </div>
  );
};

export default Detail;
