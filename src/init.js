import React from "react";
import AppBar from "./component/appBar";
import MiddleSection from "./component/middleSection";
import Footer from "./component/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";

const Init = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Router>
        <AppBar open={open} setOpen={setOpen} />
        <CssBaseline />
        <Container maxWidth="lg" fixed >
          <MiddleSection />
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

export default Init;
