import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  ListItemText,
  ListItem,
  List,
  Box,
  Typography,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { green } from "@material-ui/core/colors";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles((theme) => ({
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
      <List component="nav" aria-labelledby="nested-list-subheader" button>
        <ListItem
          button
          component={NavLink}
          activeClassName={classes.activeClass}
          to="/"
          exact
          style={{ height: "5vh" }}
        >
          <ListItemText
            disableTypography
            primary={<Typography variant="overline">Start</Typography>}
          />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          activeClassName={classes.activeClass}
          to="/getting_started"
          style={{ height: "5vh" }}
        >
          <ListItemText
            disableTypography
            primary={
              <Typography variant="overline">Getting Started</Typography>
            }
          />
        </ListItem>
        <ListItem button onClick={handleClick} style={{ height: "5vh" }}>
          <ListItemText
            disableTypography
            primary={<Typography variant="overline">Boards</Typography>}
          />
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
              style={{ height: "5vh" }}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography variant="caption">Select your board!</Typography>
                }
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick1} style={{ height: "5vh" }}>
          <ListItemText
            disableTypography
            primary={<Typography variant="overline">Sensors</Typography>}
          />
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
              style={{ height: "5vh" }}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="caption">All sensors</Typography>}
              />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/grove-fet"
              style={{ height: "5vh" }}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="caption">Grove-Fet</Typography>}
              />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/tph"
              style={{ height: "5vh" }}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="caption">TPH</Typography>}
              />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={NavLink}
              activeClassName={classes.activeClass}
              to="/Sensors/tph_v2"
              style={{ height: "5vh" }}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="caption">TPH v2</Typography>}
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick2} style={{ height: "5vh" }}>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="overline">Shields and Bees</Typography>
            }
          />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              style={{ height: "5vh" }}
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="caption">Starred</Typography>}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  };

  return (
    <Box className={classes.list1}>
      <Typography variant="subtitle1" gutterBottom>
        SODAQ Support pages
      </Typography>
      <FixedSizeList height={400} width={230} itemSize={1} itemCount={1}>
        {Row}
      </FixedSizeList>
    </Box>
  );
};

export default NestedList1;
