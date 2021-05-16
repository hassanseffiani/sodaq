import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import NestedList1 from "../helpers/nestedList1";
import NestedList2 from "../helpers/nestedList2";
import Start from "./middleSection/start";
import GettingStarted from "./middleSection/gettingStarted"
import AllSensors from "./middleSection/sensors/allSensors";
import GroveFet from "./middleSection/sensors/grove-fet";
import Tph from "./middleSection/sensors/tph";
import Tphv2 from "./middleSection/sensors/tphv2";
import Boards from "./middleSection/boards/boards";
import NotFound from "../pages/NotFound";
import NotFoundHide from "../hooks/NotFoundHide";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  toolbar: theme.mixins.toolbar,
  middleSection:{
    padding: theme.spacing(8),
  }
}));

const MiddleSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={2} lg={2}>
          <NestedList1 />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8} className={classes.middleSection}>
          <Grid container>
            <Grid item xs>
              <Switch>
                <Route exact path="/">
                  <Start />
                </Route>
                <Route path="/getting_started">
                  <GettingStarted />
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
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} md={2} lg={2}>
          <NotFoundHide>
            <NestedList2 />
          </NotFoundHide>
        </Grid>
      </Grid>
    </div>
  );
};

export default MiddleSection;
