import React, { useState, useEffect } from "react";
import { Collapse } from "@material-ui/core";
import { useLocation } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list2: {
    position: "sticky",
    top: "1rem",
    minWidth: "275",
  },
}));

const NotFoundHide = (props) => {
  const classes = useStyles();
  const match = useLocation();
  const [matchBool, setmatchBool] = useState(true);

  useEffect(() => {
    const check = [
      "/",
      "/Sensors",
      "/Boards",
      "/Sensors/grove-fet",
      "/Sensors/tph",
      "/Sensors/tph_v2",
    ];
    if (
      check[0] !== match.pathname &&
      check[1] !== match.pathname &&
      check[2] !== match.pathname &&
      check[3] !== match.pathname &&
      check[4] !== match.pathname &&
      check[5] !== match.pathname
    ) {
      setmatchBool(false);
    }
  }, [match]);
  return (
    <Box width="60%" className={classes.list2}>
      <Collapse in={matchBool}>{props.children}</Collapse>
    </Box>
  );
};

export default NotFoundHide;
