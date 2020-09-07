import React from "react";
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
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Detail = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Card>
          <CardContent>
            <CardMedia>
              <img src={logo} alt="" />
            </CardMedia>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Typography variant="body2" component="p">
              Hello this is comment
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <form noValidate autoComplete="off">
                <TextField id="outlined-basic" variant="outlined" />
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </form>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Detail;
