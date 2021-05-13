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

const AllSensors = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.hide !== true && <h1>Select your sensor</h1>}
      <Card className={classes.root}>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/sensors/TPH.jpg"
            title="TPH"
          />
        </Link>
        <Link to="/Sensors/tph_v2">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/sensors/TPH v2.jpg"
            title="TPH v2"
          />
        </Link>
        <Link to="/Sensors/grove-fet">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/sensors/GROVE FET.jpg"
            title="GROVE FET"
          />
        </Link>
      </Card>
    </div>
  );
};

export default AllSensors;
