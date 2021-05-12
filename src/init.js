import React from "react";
import AppBar from "./component/appBar";
import MiddleSection from "./component/middleSection";
import Footer from "./component/footer"

const Init = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
        <AppBar open={open} setOpen={setOpen} />
        <MiddleSection />
        <Footer />
    </div>
  );
};

export default Init;