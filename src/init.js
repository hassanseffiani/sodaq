import React from "react";
import AppBar from "./component/appBar";
import MiddleSection from "./component/middleSection";
import Footer from "./component/footer";
import { BrowserRouter as Router } from "react-router-dom";

const Init = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AppBar open={open} setOpen={setOpen} />
      <Router>
        <MiddleSection />
      </Router>
      <Footer />
    </div>
  );
};

export default Init;
