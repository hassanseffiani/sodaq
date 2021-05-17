import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

import Axios from "axios";
import { useLocation } from "react-router";
import { FixedSizeList } from "react-window";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  list1: {
    paddingTop: theme.spacing(8),
    position: "sticky",
    top: "1rem",
  },
  activeClass: {
    color: green[500],
  },
  listCss: {
    // fontSize: "0.7em", //Insert your required size
    // paddingRight: theme.spacing(8),
  },
}));

const NestedList1 = () => {
  const classes = useStyles();
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
  const Row = (props) => {
    return (
      <Fragment>
        
        <List className={classes.listCss}>
          {Array1.map((element, iKey) => {
            return (
              <Fragment key={iKey}>
                <Link
                  activeClass={classes.activeClass}
                  to={element.target}
                  spy={true}
                  smooth={true}
                >
                  <ListItem button style={{ height: "5vh" }}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="overline">
                          {element.label}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>
              </Fragment>
            );
          })}
        </List>
      </Fragment>
    );
  };
  if (!Array1.length) return null;

  return (
    <Box className={classes.list1}>
      <Typography variant="subtitle1" gutterBottom>
        Table of contents
      </Typography>
      <FixedSizeList height={400} width={300} itemSize={1} itemCount={1}>
        {Row}
      </FixedSizeList>
    </Box>
  );
};

export default NestedList1;
