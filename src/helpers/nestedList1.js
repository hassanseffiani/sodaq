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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
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

  return (
    <Box width="60%">
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
        <ListItem button component={Link} to="/">
          <ListItemText primary="Start" />
        </ListItem>
        <ListItem button>
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
              component={Link}
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
              component={Link}
              to="/Sensors"
            >
              <ListItemText primary="All sensors" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/Sensors/grove-fet"
            >
              <ListItemText primary="Grove-Fet" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/Sensors/tph"
            >
              <ListItemText primary="TPH" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
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
    </Box>
  );
};

export default NestedList1;
