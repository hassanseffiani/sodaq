import React from "react";
import AppBar from "./component/appBar"
import Search from "./component/search"

const Init = (props) => {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <AppBar open={open} setOpen={setOpen} />
      <Search open={open} setOpen={setOpen} />
    </div>
  );
};

export default Init;