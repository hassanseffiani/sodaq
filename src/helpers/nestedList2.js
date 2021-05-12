import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  // ListItemText,
  // ListItem,
  Box,
  ListSubheader,
  List,
} from "@material-ui/core";

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

  return (
    <Box width="60%">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Table of contents
          </ListSubheader>
        }
        className={classes.root}
      >
        {/* <ListItem button>
          <ListItemText primary="Sent mail" />
        </ListItem> */}
      </List>
    </Box>
  );
};

export default NestedList1;
