import React from "react";
import { Typography, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

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

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <ArrowBackIcon />
          <Typography className={classes.title} variant="caption" gutterBottom>
            Previous
          </Typography>
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <Typography className={classes.title} variant="caption" gutterBottom>
            Next
          </Typography>
          <ArrowForwardIcon />
        </IconButton>
      </Paper>
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
