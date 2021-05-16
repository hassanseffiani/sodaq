import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  IconButton,
  Collapse,
  Link as ALink,
  Grid,
} from "@material-ui/core";
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
    minHeight: "10vh",
  },
  footer: {
    padding: theme.spacing(1.5),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[900]
        : theme.palette.grey[200],
  },
  paper: {
    padding: theme.spacing(2.5),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[800]
        : theme.palette.grey[200],
  },
  copyright: {
    fontSize: "100%",
    width: "15vw",
    color: "#A0A0A0",
  },
  menuButton: {
    blockSize: "3vw",
    color: "#A0A0A0",
  },
  title: {
    color: "##fffafa",
  },
}));

const StickyFooter = () => {
  const classes = useStyles();
  const location = useLocation();
  const [First, setFirst] = useState(true);
  const [Next, setNext] = useState("Getting Started");
  const [Link1, setLink1] = useState("");
  const [Link2, setLink2] = useState("");
  const [Previous, setPrevious] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setFirst(false);
        setNext("Getting Started");
        setLink2("/getting_started");
        break;
      case "/getting_started":
        setFirst(true);
        setPrevious("Start");
        setNext("Select your board!");
        setLink1("/");
        setLink2("/Boards");
        break;
      case "/Boards":
        setFirst(true);
        setPrevious("Getting Started");
        setNext("Overview");
        setLink1("/getting_started");
        setLink2("/");
        break;
      case "/Sensors":
        setFirst(true);
        setPrevious("Universal Tracker");
        setNext("Grove-Fet");
        setLink1("");
        setLink2("/Sensors/grove-fet");
        break;
      case "/Sensors/grove-fet":
        setFirst(true);
        setPrevious("All sensors");
        setNext("TPH");
        setLink1("/Sensors");
        setLink2("/Sensors/tph");
        break;
      case "/Sensors/tph":
        setFirst(true);
        setPrevious("Grove-Fet");
        setNext("TPH v2");
        setLink1("/Sensors/grove-fet");
        setLink2("/Sensors/tph_v2");
        break;
      case "/Sensors/tph_v2":
        setFirst(true);
        setPrevious("TPH");
        setNext("Select your bee/shield!");
        setLink1("/Sensors/tph");
        setLink2("");
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <div className={classes.root}>
      <NotFoundHide>
        <Paper variant="outlined" className={classes.paper} square>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Collapse in={First}>
                <Link to={Link1}>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    style={{paddingLeft: "5vw" }}
                    aria-label="open drawer"
                  >
                    <ArrowBackIcon />
                    <Typography
                      variant="caption"
                      gutterBottom
                      style={{ textAlign: "left" }}
                    >
                      Previous
                      <Grid item>
                        <Typography
                          className={classes.title}
                          variant="subtitle2"
                          gutterBottom
                        >
                          {Previous}
                        </Typography>
                      </Grid>
                    </Typography>
                  </IconButton>
                </Link>
              </Collapse>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Link to={Link2}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <Typography
                    variant="caption"
                    gutterBottom
                    style={{ textAlign: "right", paddingLeft: "15vw" }}
                  >
                    Next
                    <Grid item>
                      <Typography
                        className={classes.title}
                        variant="subtitle2"
                        gutterBottom
                      >
                        {Next}
                      </Typography>
                    </Grid>
                  </Typography>
                  <ArrowForwardIcon />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </NotFoundHide>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="body2" className={classes.copyright}>
                {"Copyright © "}
                {`2019-${new Date().getFullYear()} `}
                <ALink color="inherit" href="https://support.sodaq.com/">
                  SODAQ
                </ALink>{" "}
              </Typography>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={2}>
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
                onClick={() =>
                  window.open("https://linkedin.com/company/sodaq")
                }
              >
                <FiLinkedin />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
};

export default StickyFooter;
