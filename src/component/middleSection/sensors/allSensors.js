import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Card, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "90%", // 16:9
    backgroundColor: "transparent"
  },
}));

const AllSensors = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.hide !== true && <Typography className="titleGrey" variant="h4" gutterBottom>Select your sensor</Typography>}
      <Grid container>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/sensors/TPH.jpg"
              title="TPH"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph_v2">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/sensors/TPH v2.jpg"
              title="TPH v2"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/grove-fet">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/sensors/GROVE FET.jpg"
              title="GROVE FET"
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllSensors;
