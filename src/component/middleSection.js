import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import NestedList1 from "../helpers/nestedList1";
import NestedList2 from "../helpers/nestedList2";
import Start from "./middleSection/start";
import AllSensors from "./middleSection/sensors/allSensors";
import GroveFet from "./middleSection/sensors/grove-fet"
import Tph from "./middleSection/sensors/tph";
import Tphv2 from "./middleSection/sensors/tphv2";
import Boards from "./middleSection/boards/boards";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    padding: theme.spacing(2),
    // margin: "auto",
    // maxWidth: 500,
  },
}));

const MiddleSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3}>
            <NestedList1 />
          </Grid>
          <Grid item xs={4}>
            <Switch>
              <Route exact path="/">
                <Start />
              </Route>
              <Route exact path="/Sensors">
                <AllSensors />
              </Route>
              <Route path="/Sensors/grove-fet">
                <GroveFet />
              </Route>
              <Route path="/Sensors/tph">
                <Tph />
              </Route>
              <Route path="/Sensors/tph_v2">
                <Tphv2 />
              </Route>
              <Route exact path="/Boards">
                <Boards />
              </Route>
            </Switch>
          </Grid>
          <Grid item xs={3}>
            <NestedList2 />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default MiddleSection;
