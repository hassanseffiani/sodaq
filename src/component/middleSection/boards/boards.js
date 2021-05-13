import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Card } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "90%", // 16:9
  },
}));

const Boards = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.hide !== true && <h1>Select your board!</h1>}
      <h2>NB-IoT</h2>
      <Card className={classes.root}>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/AFF N211.jpg"
            title="AFF N211"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/SFF N211.jpg"
            title="SFF N211"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/AFF R410.jpg"
            title="AFF R410"
          />
        </Link>
      </Card>
    </div>
  );
};

export default Boards;
