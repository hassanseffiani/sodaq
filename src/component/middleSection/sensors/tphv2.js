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

const TphV2 = () => {
  const classes = useStyles();
  const [isCopied, setIsCopied] = useState(false);

  const codeSnippet = `#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

#define SEALEVELPRESSURE_HPA (1013.25)

Adafruit_BME280 bme; // I2C

void setup() {
  SerialUSB.begin(9600);
  SerialUSB.println(F("BME280 test"));

  if (!bme.begin()) {
    SerialUSB.println("Could not find a valid BME280 sensor, check wiring!");
    while (1);
  }
}

void loop() {
    SerialUSB.print("Temperature = ");
    SerialUSB.print(bme.readTemperature());
    SerialUSB.println(" *C");

    SerialUSB.print("Pressure = ");

    SerialUSB.print(bme.readPressure() / 100.0F);
    SerialUSB.println(" hPa");

    SerialUSB.print("Approx. Altitude = ");
    SerialUSB.print(bme.readAltitude(SEALEVELPRESSURE_HPA));
    SerialUSB.println(" m");

    SerialUSB.print("Humidity = ");
    SerialUSB.print(bme.readHumidity());
    SerialUSB.println(" %");

    SerialUSB.println();
    delay(2000);
}`;
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Temperature Pressure Humidity v2</h1>
      <p>A temperature, pressure and humidity sensor based on the BME280.</p>
      <h3>Library</h3>
      <p>Go to the library manager and install the required libraries.</p>
      <ol>
        <li>Adafruit_Sensor</li>
        <li>Adafruit_BME280</li>
      </ol>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/arduino_library_manager.png"
          title="arduino_library_manager"
        />
      </Card>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/tphv2_lib1.png"
          title="tphv2_lib1"
        />
      </Card>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/tphv2_lib2.png"
          title="tphv2_lib2"
        />
      </Card>
      <h2>Autonomo Example</h2>
      <p>Use the I2C connector, marked as SDA/SCL.</p>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/I2C_autonomo_shield.png"
          title="I2C_autonomo_shield"
        />
      </Card>
      <div className="code-snippet">
        <div className="code-section">
          <pre>{codeSnippet}</pre>
          <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
      <h2>Schematic</h2>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/tph_v2_rev2.png"
          title="tph_v2_rev2"
        />
      </Card>
    </div>
  );
};

export default TphV2;
