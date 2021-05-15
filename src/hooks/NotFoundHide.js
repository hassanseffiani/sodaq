import React, { useState, useEffect } from "react";
import { Collapse } from "@material-ui/core";
import { useLocation } from "react-router";

const NotFoundHide = (props) => {
  const match = useLocation();
  const [matchBool, setmatchBool] = useState(true);

  useEffect(() => {
    const check = ["/", "/Sensors", "/Boards","/Sensors/grove-fet","/Sensors/tph","/Sensors/tph_v2"];
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
  return <Collapse in={matchBool}>{props.children}</Collapse>;
};

export default NotFoundHide;
