import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  ListItemText,
  ListItem,
  ListSubheader,
  List,
  Box,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { green } from "@material-ui/core/colors";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  activeClass: {
    color: green[500],
  },
  list1: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: "1rem",
    // minWidth: "275",
  },
}));

const NestedList1 = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const Row = (props) => {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            SODAQ Support pages
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem
          button
          component={NavLink}
          activeClassName={classes.activeClass}
          to="/"
          exact
        >
          <ListItemText primary="Start" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          activeClassName={classes.activeClass}
          to="/getting_started"
        >
          <ListItemText primary="Getting Started" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Boards" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Boards"
            >
              <ListItemText primary="Select your board!" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick1}>
          <ListItemText primary="Sensors" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors"
              exact
            >
              <ListItemText primary="All sensors" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/grove-fet"
            >
              <ListItemText primary="Grove-Fet" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/tph"
            >
              <ListItemText primary="TPH" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/tph_v2"
            >
              <ListItemText primary="TPH v2" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick2}>
          <ListItemText primary="Shields and Bees" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  };

  return (
    <Box className={classes.list1}>
      <FixedSizeList height={500} width={200} itemSize={1} itemCount={1}>
        {Row}
      </FixedSizeList>
      {/* <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            SODAQ Support pages
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem
          button
          component={NavLink}
          activeClassName={classes.activeClass}
          to="/"
          exact
        >
          <ListItemText primary="Start" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          activeClassName={classes.activeClass}
          to="/getting_started"
        >
          <ListItemText primary="Getting Started" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Boards" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Boards"
            >
              <ListItemText primary="Select your board!" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick1}>
          <ListItemText primary="Sensors" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors"
              exact
            >
              <ListItemText primary="All sensors" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/grove-fet"
            >
              <ListItemText primary="Grove-Fet" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/tph"
            >
              <ListItemText primary="TPH" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/tph_v2"
            >
              <ListItemText primary="TPH v2" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick2}>
          <ListItemText primary="Shields and Bees" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List> */}
    </Box>
  );
};

export default NestedList1;
