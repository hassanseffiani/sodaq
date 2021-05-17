import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Card, Typography, Grid } from "@material-ui/core";
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
        <Grid item xs={6}></Grid>
      </Grid>
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
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/SFF R410.jpg"
            title="SFF R410"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/AFF R412.jpg"
            title="AFF R412"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/SFF R412.jpg"
            title="SFF R412"
          />
        </Link>
      </Card>
      <Element name="item-2">
        <h2>LTE-M</h2>
      </Element>
      <Card className={classes.root}>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/AFF R410.jpg"
            title="AFF R410"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/SFF R410.jpg"
            title="SFF R410"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/AFF R412.jpg"
            title="AFF R412"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/SFF R412.jpg"
            title="SFF R412"
          />
        </Link>
      </Card>
      <Element name="item-3">
        <h2>LoRa</h2>
      </Element>
      <Card className={classes.root}>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/Explorer.jpg"
            title="Explorer"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/ONE.jpg"
            title="ONE"
          />
        </Link>
      </Card>
      <Element name="item-4">
        <h2>2G</h2>
      </Element>
      <Card className={classes.root}>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/2G ONE.jpg"
            title="2G ONE"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/AFF R412.jpg"
            title="AFF R412"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/SFF R412.jpg"
            title="SFF R412"
          />
        </Link>
      </Card>
      <Element name="item-5">
        <h2>Other</h2>
      </Element>
      <Card className={classes.root}>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/AUTONOMO.jpg"
            title="AUTONOMO"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/MBILI.jpg"
            title="MBILI"
          />
        </Link>
        <Link to="/Sensors/tph">
          <CardMedia
            className={classes.media}
            image="http://localhost:8080/boards/MOJA.jpg"
            title="MOJA"
          />
        </Link>
      </Card>
    </div>
  );
};

export default Boards;
