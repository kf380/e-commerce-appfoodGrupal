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
    backgroundColor:'black',
    color:'white'
  },
  content: {
    flex: "1 0 auto",
    color:'white'
  },
  cover: {
    color:'white',
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

export default function CardOrders({
  // id,
  orderId, 
  status, 
  total, 
  /* price,
  amount,  
  total,
  status,
  deleteCart, */
}) {
  console.log(orderId, status, total)
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia
          className={classes.cover}
          title="Order"
        />
      </div>
      <div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            <Link to={`/orderEdit/${orderId}`}><h4>Op: {orderId} </h4></Link>  
          </Typography>
          <Typography variant="subtitle1" >
            Status: {status} 
          </Typography>
          <Typography variant="subtitle1" >
              Total: {total}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}