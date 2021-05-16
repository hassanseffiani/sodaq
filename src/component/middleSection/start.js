import React from "react";
import { Element } from "react-scroll";
import AllSensors from "./sensors/allSensors";

const Start = () => {
  return (
    <div>
      <h1>How can we help you?</h1>
      <Element name="item-1">
        <h3>Boards</h3>
      </Element>

      <Element name="item-10">
        <h3>Sensors</h3>
      </Element>
      <AllSensors hide={true} />
    </div>
  );
};

export default Start;
