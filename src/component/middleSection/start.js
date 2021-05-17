import { Typography } from "@material-ui/core";
import React from "react";
import { Element } from "react-scroll";
import AllSensors from "./sensors/allSensors";

const Start = () => {
  return (
    <div>
      <Typography className="titleGrey" variant="h4" gutterBottom>
        How can we help you?
      </Typography>
      <Element name="item-1">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Boards
        </Typography>
      </Element>
      <Element name="item-10">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Sensors
        </Typography>
      </Element>
      <AllSensors hide={true} />
    </div>
  );
};

export default Start;
