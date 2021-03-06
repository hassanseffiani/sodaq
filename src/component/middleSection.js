import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import NestedList1 from "../helpers/nestedList1";
import NestedList2 from "../helpers/nestedList2";
import Start from "./middleSection/start";
import GettingStarted from "./middleSection/gettingStarted";
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
  middleSection: {
    paddingTop: "8vh"
  }
}));

const MiddleSection = () => {
  const classes = useStyles();
  // center the middle section
  // css for the table of content
  // global css for the items dial l middle section to be fast
  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={2} lg={2}>
          <NestedList1 />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={5}
          md={7}
          lg={7}
          alignItems="center"
          direction="row"
        >
          <Container maxWidth="lg" fixed className={classes.middleSection}>
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
          </Container>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <NotFoundHide>
            <NestedList2 />
          </NotFoundHide>
        </Grid>
      </Grid>
    </div>
  );
};

export default MiddleSection;
