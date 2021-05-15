import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "sticky",
    top: "1rem",
    minWidth: "275",
    overflow: "auto",
  },
  list2: {
    position: "sticky",
    top: "1rem",
    minWidth: "275",
  },
}));

const NestedList1 = () => {
  const classes = useStyles();

  return (
    <nav aria-label="Table of contents" className={classes.navbar}>
      Hello world! asdaskldj salkdasjdlk sadklasjdk saldkjsad
    </nav>
  );
};

export default NestedList1;
