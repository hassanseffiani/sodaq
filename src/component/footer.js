import React, { useEffect, useState } from "react";
import { Typography, Paper, IconButton, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import NotFoundHide from "../hooks/NotFoundHide";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[900]
        : theme.palette.grey[200],
  },
  copyright: {
    color: "#A0A0A0",
  },
  menuButton: {
    color: "#A0A0A0",
  },
}));

const StickyFooter = () => {
  const classes = useStyles();
  const match = useLocation();
  const [First, setFirst] = useState(true);
  const [Next, setNext] = useState("Getting Started");
  const [Previous, setPrevious] = useState("");

  useEffect(() => {
    if (match.pathname === "/") setFirst(false);
    if (match.pathname === "/Boards") {
      setPrevious("Getting Started");
      setNext("Overview");
    }
    if (match.pathname === "/Sensors") {
      setPrevious("Universal Tracker");
      setNext("Grove-Fet");
    }
    if (match.pathname === "/Sensors/grove-fet") {
      setPrevious("All sensors");
      setNext("TPH");
    }
    if (match.pathname === "/Sensors/tph") {
      setPrevious("Grove-Fet");
      setNext("TPH v2");
    }
    if (match.pathname === "/Sensors/tph_v2") {
      setPrevious("TPH");
      setNext("Select your bee/shield!");
    }
  }, [match]);

  return (
    <div className={classes.root}>
      <NotFoundHide>
        <Paper variant="outlined">
          <Collapse in={First}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Link to="/Sensors/tph">
                <ArrowBackIcon />
              </Link>
              <Typography
                className={classes.title}
                variant="caption"
                gutterBottom
              >
                Previous
              </Typography>
              <Typography
                className={classes.title}
                variant="caption"
                gutterBottom
              >
                {Previous}
              </Typography>
            </IconButton>
          </Collapse>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Typography
              className={classes.title}
              variant="caption"
              gutterBottom
            >
              {Next}
            </Typography>
            <Typography
              className={classes.title}
              variant="caption"
              gutterBottom
            >
              Next
            </Typography>
            <ArrowForwardIcon />
          </IconButton>
        </Paper>
      </NotFoundHide>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" className={classes.copyright}>
            {"Copyright © "}
            {`2019-${new Date().getFullYear()} `}
            <Link color="inherit" href="https://support.sodaq.com/">
              SODAQ
            </Link>{" "}
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => window.open("https://github.com/SodaqMoja")}
          >
            <FiGithub />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
            onClick={() => window.open("https://twitter.com/sodaqboards")}
          >
            <FiTwitter />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => window.open("https://linkedin.com/company/sodaq")}
          >
            <FiLinkedin />
          </IconButton>
        </Container>
      </footer>
    </div>
  );
};

export default StickyFooter;
