import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import NestedList1 from "../helpers/nestedList1";
import NestedList2 from "../helpers/nestedList2";

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
            The Main section
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
