import React, { useState, useEffect, useRef } from "react";
import {
  InputBase,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Collapse,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Search as SearchIcon } from "@material-ui/icons";
import { FaBookReader } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "22px",
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
    color: "#ffffff",
  },
  toolbar: {
    minHeight: 36,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#ffffff",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    marginRight: theme.spacing(8),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    color: "#ffffff",
  },
  disabledLinkCss: {
    color: "inherit",
    textDecoration: "none",
  },
}));

const SearchAppBar = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [Title, setTitle] = useState("SODAQ Support pages");
  const [AutoComplet, setAutoComplet] = useState(false);

  const Option = [
    { id: 1, title: "Getting Started" },
    { id: 2, title: "Select your sensor" },
    { id: 3, title: "test the seciond array" },
  ];

  // scroll
  const navRef = useRef();
  navRef.current = Title;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        switch (location.pathname) {
          case "/":
            setTitle("Start");
            break;
          case "/getting_started":
            setTitle("Getting Started");
            break;
          case "/Boards":
            setTitle("Select your board!");
            break;
          case "/Sensors":
            setTitle("All Sensors");
            break;
          case "/Sensors/grove-fet":
            setTitle("Grove-Fet");
            break;
          case "/Sensors/tph":
            setTitle("TPH");
            break;
          case "/Sensors/tph_v2":
            setTitle("TPH v2");
            break;
          default:
            break;
        }
      } else {
        setTitle("SODAQ Support pages");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const redirectTo = (event, value) => {
    switch (value.title) {
      case "Getting Started":
        history.push({
          pathname: "/getting_started",
        });
        break;
      case "Select your sensor":
        history.push({
          pathname: "/Sensors",
        });
        break;

      default:
        break;
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar} variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link to="/" className={classes.disabledLinkCss}>
              <FaBookReader />
            </Link>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {Title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onClick={() => setAutoComplet(true)}
            />
            <Collapse in={AutoComplet}>
              <Autocomplete
                id="combo-box-demo"
                options={Option}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Combo box" variant="outlined" />
                )}
                onChange={(event, value) => redirectTo(event, value)} // prints the selected value
              />
            </Collapse>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
