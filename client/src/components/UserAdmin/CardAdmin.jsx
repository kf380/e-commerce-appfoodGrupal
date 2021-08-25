import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
    height: 80,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function CardAdmin({
  id,
  name,
  image,
  price,
  description,
  deleteCart,
}) {
  const classes = useStyles();

  return (
    <Card >
        <CardMedia
          className={classes.cover}
          image={image}
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      <div className={classes.controls}>
        <Typography variant="subtitle1" color="textSecondary">
          <span>${price}</span>
        </Typography>
      </div>
        <IconButton onClick={() => deleteCart(id)}>
          <DeleteIcon />
        </IconButton>

        <Link to={`/admProdDetail/${id}`}>Editar</Link>
    </Card>
  );
}
