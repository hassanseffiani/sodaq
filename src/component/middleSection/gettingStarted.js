import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Link } from "@material-ui/core";
import { Element } from "react-scroll";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "90%", // 16:9
  },
}));

const GettingStarted = () => {
  const classes = useStyles();
  const [isCopied, setIsCopied] = useState(false);
  const [isCopied1, setIsCopied1] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  const codeSnippet = `http://downloads.sodaq.net/package_sodaq_avr_index.json`;
  const codeSnippet1 = `http://downloads.sodaq.net/package_sodaq_samd_index.json`;
  const codeSnippet2 = `http://downloads.sodaq.net/test/package_test_sodaq_samd_index.json`;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  const onCopyText1 = () => {
    setIsCopied1(true);
    setTimeout(() => {
      setIsCopied1(false);
    }, 1000);
  };
  const onCopyText2 = () => {
    setIsCopied2(true);
    setTimeout(() => {
      setIsCopied2(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Getting Started</h1>
      <Element name="item-1">
        <h2>Setting up your Arduino IDE</h2>
      </Element>
      <p>
        Make sure you have the latest{" "}
        <Link href="https://www.arduino.cc/en/software">Arduino IDE.</Link>
      </p>
      <p>For Windows we recommend the installer.</p>
      <p>
        When your Arduino IDE is installed, it might be necessary to restart
        your computer. In some cases, if you don’t restart your computer, the
        IDE will not launch.
      </p>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/getting_started/arduino_windows_installer.jpg"
          title="arduino_windows_installer"
        />
      </Card>
      <Element name="item-2">
        <h2>Board files</h2>
      </Element>
      <p>
        When your IDE is all started, we should add the URL before we can
        install the libraries. Click on File > Preferences and at the bottom you
        should see ‘Additional Boards Manager URLs’. This is where you need to
        paste the following URL:
      </p>
      <Element name="item-3">
        <h2>Stable</h2>
      </Element>
      <p>AVR (Moja, Mbili, Ndogo, Tatu)</p>
      <p>Latest version: 1.2.0</p>
      <div className="code-snippet">
        <div className="code-section">
          <pre>{codeSnippet}</pre>
          <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
      <p>SAMD (Sara SFF, Sara AFF, Explorer, Autonomo, One)</p>
      <p>Latest version: 1.8.6</p>
      <div className="code-snippet">
        <div className="code-section">
          <pre>{codeSnippet1}</pre>
          <CopyToClipboard text={codeSnippet1} onCopy={onCopyText1}>
            <span>{isCopied1 ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
      <Element name="item-4">
        <h2>Beta</h2>
      </Element>
      <p>SAMD (Sara SFF, Sara AFF, Explorer, Autonomo, One)</p>
      <p>Current beta version: 1.8.9</p>
      <div className="code-snippet">
        <div className="code-section">
          <pre>{codeSnippet2}</pre>
          <CopyToClipboard text={codeSnippet2} onCopy={onCopyText2}>
            <span>{isCopied2 ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        The Beta boardfiles are not fully tested! By using these boardfiles you
        can help us test the compatibility. Let us know on our forum if you have
        any issues.
      </Alert>
      <Element name="item-5">
        <h2>Arduino</h2>
      </Element>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/getting_started/arduino_preferences.png"
          title="arduino_preferences"
        />
      </Card>
      <Alert variant="filled" severity="info">
        <AlertTitle>Note</AlertTitle>
        You can use multiple URLs at the same time.
      </Alert>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/getting_started/arduino_preferences_multi_url.png"
          title="arduino_preferences"
        />
      </Card>
      <p>
        When you have pasted the URL, click ‘OK’ and you’re ready for the next
        step.
      </p>
      <Element name="item-6">
        <h2>Installation</h2>
      </Element>
      <p>Click on Tools > Board:… > Boards Manager…</p>
      <p>Search for SODAQ.</p>
      <p>Click on a board collection, an install button will appear.</p>
      <p>Install the latest version of your selected board collection.</p>
      <Element name="item-7">
        <h2>Select Board and Port</h2>
      </Element>
      <p>Select your board from the menu:</p>
      <p>Click on Tools > Board:… > your board</p>
      <p>Connect your board to your computer.</p>
      <p>Select the com port of your device.</p>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/getting_started/arduino_board_port_selection.jpg"
          title="arduino_board_port_selection"
        />
      </Card>
      <p>
        Don’t let the name behind the port confuse you. The names will not
        always be as you expect. Example: SODAQ ONE and Arduino Zero have the
        same Cortex-M0 microcontroller. The name behind the port will most of
        the time show the first SAMD board in the list. e.g. SODAQ SARA, Arduino
        Zero and not SODAQ ONE as you would expect. Always select the correct
        board under the board selection!! Selecting a board with same
        microcontroller will compile and upload, but it will NOT work and may
        break your device!!
      </p>
      <Element name="item-8">
        <h2>Libraries</h2>
      </Element>
      <h4>
        <Element name="item-9">
          <strong>Library manager</strong>
        </Element>
      </h4>
      <p>Click on Sketch > Include Libraries > Manage Libraries…</p>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/getting_started/arduino_library_manager.png"
          title="arduino_library_manager"
        />
      </Card>
      <p>In most libraries you can find some examples.</p>
      <p>In the Arduino IDE go to File > Examples > Sodaq_xxxx > example</p>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/getting_started/arduino_examples.jpg"
          title="arduino_examples"
        />
      </Card>
      <Element name="item-10">
        <h2>GitHub</h2>
      </Element>
      <p>The latest verion of the library is always on GitHub.</p>
      <p>
        You can find all our opensource software on our{" "}
        <Link href="https://github.com/SodaqMoja?tab=repositories">
          GitHub page.
        </Link>
      </p>
      <Element name="item-11">
      <h2>Serial Monitor</h2>
      </Element>
      <p>For most applications we need to enable “Both NL & CR”.</p>
      <p>Or send the commands new line and carriage return manually.</p>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/getting_started/arduino_serial_monitor.png"
          title="arduino_serial_monitor"
        />
      </Card>
    </div>
  );
};

export default GettingStarted;
