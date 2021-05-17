import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Link, Typography } from "@material-ui/core";
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
    paddingTop: "48%", // 16:9
  },
  media1: {
    height: 0,
    paddingTop: "85%", // 16:9
  },
  media2: {
    height: 0,
    paddingTop: "57%", // 16:9
  },
  media3: {
    height: 0,
    paddingTop: "43.5%", // 16:9
  },
  media4: {
    height: 0,
    paddingTop: "82%", // 16:9
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
      <Typography className="titleGrey" variant="h4" gutterBottom>
        Getting Started
      </Typography>
      <Element name="item-1">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Setting up your Arduino IDE
        </Typography>
      </Element>
      <Typography variant="body1" gutterBottom>
        Make sure you have the latest{" "}
        <Link href="https://www.arduino.cc/en/software">Arduino IDE.</Link>
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
        For Windows we recommend the installer.
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
        When your Arduino IDE is installed, it might be necessary to restart
        your computer. In some cases, if you don’t restart your computer, the
        IDE will not launch.
      </Typography>
      <br />
      <CardMedia
        className={classes.media}
        image="http://localhost:8080/getting_started/arduino_windows_installer.jpg"
        title="arduino_windows_installer"
      />
      <br />
      <br />
      <Element name="item-2">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Board files
        </Typography>
      </Element>
      <br />
      <Typography variant="body1" gutterBottom>
        When your IDE is all started, we should add the URL before we can
        install the libraries. Click on File > Preferences and at the bottom you
        should see ‘Additional Boards Manager URLs’. This is where you need to
        paste the following URL:
      </Typography>
      <br />
      <Element name="item-3">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Stable
        </Typography>
      </Element>
      <br />
      <Typography variant="body1" gutterBottom>
        AVR (Moja, Mbili, Ndogo, Tatu)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Latest version: 1.2.0
      </Typography>
      <div className="code-snippet1">
        <div className="code-section">
          <pre>{codeSnippet}</pre>
          <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
      <Typography variant="body1" gutterBottom>
        SAMD (Sara SFF, Sara AFF, Explorer, Autonomo, One)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Latest version: 1.8.6
      </Typography>
      <div className="code-snippet1">
        <div className="code-section">
          <pre>{codeSnippet1}</pre>
          <CopyToClipboard text={codeSnippet1} onCopy={onCopyText1}>
            <span>{isCopied1 ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
      <br />
      <Element name="item-4">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Beta
        </Typography>
      </Element>
      <Typography variant="body1" gutterBottom>
        SAMD (Sara SFF, Sara AFF, Explorer, Autonomo, One)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Current beta version: 1.8.9
      </Typography>
      <br />
      <div className="code-snippet1">
        <div className="code-section">
          <pre>{codeSnippet2}</pre>
          <CopyToClipboard text={codeSnippet2} onCopy={onCopyText2}>
            <span>{isCopied2 ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
      <br />
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        The Beta boardfiles are not fully tested! By using these boardfiles you
        can help us test the compatibility. Let us know on our forum if you have
        any issues.
      </Alert>
      <br />
      <Element name="item-5">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Arduino
        </Typography>
      </Element>
      <br />
      <CardMedia
        className={classes.media1}
        image="http://localhost:8080/getting_started/arduino_preferences.png"
        title="arduino_preferences"
      />
      <br />
      <br />
      <Alert variant="filled" severity="info">
        <AlertTitle>Note</AlertTitle>
        You can use multiple URLs at the same time.
      </Alert>
      <br />
      <CardMedia
        className={classes.media1}
        image="http://localhost:8080/getting_started/arduino_preferences_multi_url.png"
        title="arduino_preferences"
      />
      <br />
      <Typography variant="body1" gutterBottom>
        When you have pasted the URL, click ‘OK’ and you’re ready for the next
        step.
      </Typography>
      <br />
      <Element name="item-6">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Installation
        </Typography>
      </Element>
      <br />
      <Typography variant="body1" gutterBottom>
        Click on Tools > Board:… > Boards Manager…
      </Typography>
      <Typography variant="body1" gutterBottom>
        Search for SODAQ.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click on a board collection, an install button will appear.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Install the latest version of your selected board collection.
      </Typography>
      <br />
      <Element name="item-7">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Select Board and Port
        </Typography>
      </Element>
      <br />
      <Typography variant="body1" gutterBottom>
        Select your board from the menu:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click on Tools > Board:… > your board
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
        Connect your board to your computer.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Select the com port of your device.
      </Typography>
      <CardMedia
        className={classes.media1}
        image="http://localhost:8080/getting_started/arduino_board_port_selection.jpg"
        title="arduino_board_port_selection"
      />
      <br />
      <Typography variant="body1" gutterBottom>
        Don’t let the name behind the port confuse you. The names will not
        always be as you expect. Example: SODAQ ONE and Arduino Zero have the
        same Cortex-M0 microcontroller. The name behind the port will most of
        the time show the first SAMD board in the list. e.g. SODAQ SARA, Arduino
        Zero and not SODAQ ONE as you would expect. Always select the correct
        board under the board selection!! Selecting a board with same
        microcontroller will compile and upload, but it will NOT work and may
        break your device!!
      </Typography>
      <br />
      <Element name="item-8">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Libraries
        </Typography>
      </Element>
      <Typography variant="h6" gutterBottom>
        <Element name="item-9">Library manager</Element>
      </Typography>
      <Typography variant="body2" gutterBottom>
        Click on Sketch > Include Libraries > Manage Libraries…
      </Typography>
      <CardMedia
        className={classes.media2}
        image="http://localhost:8080/getting_started/arduino_library_manager.png"
        title="arduino_library_manager"
      />
      <br />
      <Typography variant="body1" gutterBottom>
        In most libraries you can find some examples.
      </Typography>
      <Typography variant="body1" gutterBottom>
        In the Arduino IDE go to File > Examples > Sodaq_xxxx > example
      </Typography>
      <CardMedia
        className={classes.media3}
        image="http://localhost:8080/getting_started/arduino_examples.jpg"
        title="arduino_examples"
      />
      <br />
      <Element name="item-10">
        <Typography className="titleVeryDark" variant="h6" gutterBottom>
          GitHub
        </Typography>
      </Element>
      <Typography variant="body1" gutterBottom>
        The latest verion of the library is always on GitHub.
      </Typography>
      <Typography variant="body1" gutterBottom>
        You can find all our opensource software on our{" "}
        <Link href="https://github.com/SodaqMoja?tab=repositories">
          GitHub page.
        </Link>
      </Typography>
      <br />
      <Element name="item-11">
        <Typography className="titleVeryDark" variant="h5" gutterBottom>
          Serial Monitor
        </Typography>
      </Element>
      <Typography variant="body1" gutterBottom>For most applications we need to enable “Both NL & CR”.</Typography>
      <Typography variant="body1" gutterBottom>Or send the commands new line and carriage return manually.</Typography>
      <br />
      <CardMedia
        className={classes.media4}
        image="http://localhost:8080/getting_started/arduino_serial_monitor.png"
        title="arduino_serial_monitor"
      />
    </div>
  );
};

export default GettingStarted;
