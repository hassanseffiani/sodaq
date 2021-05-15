import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  // Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "sticky",
    top: "1rem",
    minWidth: "275",
    overflow: "auto",
  },
}));

const NestedList1 = () => {
  const classes = useStyles();

  return (
    // <Box width="60%">
      <nav aria-label="Table of contents" className={classes.navbar}>
        Hello world!
      </nav>
    // </Box>
  );
};

export default NestedList1;
