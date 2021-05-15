import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  IconButton,
  Collapse,
  Link as ALink,
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
        break;
      case "/Boards":
        setFirst(true);
        setPrevious("Getting Started");
        setNext("Overview");
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
        <Paper variant="outlined">
          <Collapse in={First}>
            <Link to="/Sensors/tph">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <ArrowBackIcon />
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
            </Link>
          </Collapse>
          <Link to={Link2}>
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
          </Link>
        </Paper>
      </NotFoundHide>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" className={classes.copyright}>
            {"Copyright © "}
            {`2019-${new Date().getFullYear()} `}
            <ALink color="inherit" href="https://support.sodaq.com/">
              SODAQ
            </ALink>{" "}
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
