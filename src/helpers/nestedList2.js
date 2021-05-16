import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

import Axios from "axios";
import { useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  nav: {
    paddingTop: theme.spacing(10),
  },
}));

const NestedList1 = () => {
  // const classes = useStyles();
  const location = useLocation();
  const [Array1, setArray] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/navlink", {
      // withCredentials: true,
      // cancelToken: source.token,
    })
      .then((response) => {
        console.log(location.pathname);
        switch (location.pathname) {
          case "/Sensors/grove-fet":
            setArray(response.data.Sensors.GroveFet);
            break;
          case "/Sensors/tph":
            setArray(response.data.Sensors.Tph);
            break;
          case "/Sensors/tph_v2":
            setArray(response.data.Sensors.TphV2);
            break;
          case "/":
            setArray(response.data.Start);
            break;
          case "/getting_started":
            setArray(response.data.GettingStarted);
            break;
          case "/Boards":
            setArray(response.data.Boards);
            break;
          default:
            break;
        }
      })
      .catch((error) => {});
  }, [location]);
  if (!Array1.length) return null;

  return (
    <nav>
      <h1>Table of contents</h1>
      {Array1.map((element, iKey) => {
        return (
          <Fragment key={iKey}>
            <Link
              activeClass="active"
              to={element.target}
              spy={true}
              smooth={true}
              duration={250}
              style={{ display: "inline-block", margin: "20px" }}
            >
              {element.label}
            </Link>
          </Fragment>
        );
      })}
    </nav>
  );
};

export default NestedList1;
