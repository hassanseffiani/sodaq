import React, { useState } from "react";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "90%", // 16:9
  },
}));

const Grove = () => {
  const classes = useStyles();
  const [isCopied, setIsCopied] = useState(false);

  const codeSnippet = `void setup() {
  pinMode(7,OUTPUT);
}

void loop() {
  digitalWrite(7,HIGH);
  delay(1000);
  digitalWrite(7,LOW);
  delay(1000);
}`;
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div>
      <h1>SODAQ Grove-Fet</h1>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/grove_fet.jpg"
          title="Paella dish"
        />
      </Card>
      The Grove-Fet is a Grove-module that is able to switch loads on or off.
      The switching is done by a N-channel MOSFET. The module grants the ability
      to switch a high current with a logic level signal (3.3V to 5V ).
      <h1>Characteristics</h1>
      <p>Max power supply voltage = 30V</p>
      <p>Max current = 10A</p>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/grove_fet_pinout.png"
          title="Paella dish"
        />
      </Card>
      <h1>How can I use the Grove-Fet?</h1>
      <p>
        In this example the Grove-Fet is used with a Sodaq Autonomo. The
        Autonomo is an Arduino compatible development board. The module is being
        fed with 3.3V from the Autonomo and has an LED as load. The Grove-Fet is
        controlled by digital pin D7. When D7 is high, the MOSFET will conduct
        and the LED will be lit.
      </p>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/grove_fet_connect.png"
          title="Paella dish"
        />
      </Card>
      <h2>Autonomo example</h2>
      <div className="code-snippet">
        <div className="code-section">
          <pre>{codeSnippet}</pre>
          <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Grove;
