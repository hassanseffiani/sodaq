import React from "react";
import AllSensors from "./sensors/allSensors";

const Start = () => {
  return (
    <div>
      <h1>How can we help you?</h1>
      <h3>Boards</h3>
      
      <h3>Sensors</h3>
      <AllSensors hide={true} />
    </div>
  );
};

export default Start;
