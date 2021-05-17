import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

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
      {props.hide !== true && (
        <Typography className="titleGrey" variant="h4" gutterBottom>
          Select your board!
        </Typography>
      )}
      <Element name="item-1">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          NB-IoT
        </Typography>
      </Element>
      <Grid container>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/AFF N211.jpg"
              title="AFF N211"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/SFF N211.jpg"
              title="SFF N211"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/AFF R410.jpg"
              title="AFF R410"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/SFF R410.jpg"
              title="SFF R410"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/AFF R412.jpg"
              title="AFF R412"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/SFF R412.jpg"
              title="SFF R412"
            />
          </Link>
        </Grid>
      </Grid>

      <Element name="item-2">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          LTE-M
        </Typography>
      </Element>
      <Grid container>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/AFF R410.jpg"
              title="AFF R410"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/SFF R410.jpg"
              title="SFF R410"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/AFF R412.jpg"
              title="AFF R412"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/SFF R412.jpg"
              title="SFF R412"
            />
          </Link>
        </Grid>
      </Grid>

      <Element name="item-3">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          LoRa
        </Typography>
      </Element>
      <Grid container>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/Explorer.jpg"
              title="Explorer"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/ONE.jpg"
              title="ONE"
            />
          </Link>
        </Grid>
      </Grid>

      <Element name="item-4">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          2G
        </Typography>
      </Element>
      <Grid container>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/2G ONE.jpg"
              title="2G ONE"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/AFF R412.jpg"
              title="AFF R412"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/SFF R412.jpg"
              title="SFF R412"
            />
          </Link>
        </Grid>
      </Grid>

      <Element name="item-5">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Other
        </Typography>
      </Element>
      <Grid container>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/AUTONOMO.jpg"
              title="AUTONOMO"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/MBILI.jpg"
              title="MBILI"
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/Sensors/tph">
            <CardMedia
              className={classes.media}
              image="http://localhost:8080/boards/MOJA.jpg"
              title="MOJA"
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Boards;
