import React, { useState } from "react";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { Element } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "90%", // 16:9
  },
}));

const Tph = () => {
  const classes = useStyles();
  const [isCopied, setIsCopied] = useState(false);

  const codeSnippet = `#include <Wire.h>
#include <Sodaq_BMP085.h>
#include <Sodaq_SHT2x.h>

// MBili / Tatu
//#define debugSerial Serial
// Autonomo
#define debugSerial SerialUSB
//TPH BMP sensor
Sodaq_BMP085 bmp;

void setup() {
  // put your setup code here, to run once:
  debugSerial.begin(57600);
  setupTPH();
}

void loop() {
  // put your main code here, to run repeatedly:
  debugSerial.println("Sending payload: TempSHT21T, TempBMP, PressureBMP, HumiditySHT21T");
  String reading = takeTPHReading();
  debugSerial.println(reading);
}

void setupTPH()
{
  //Initialize the wire protocol for the TPH sensors
  Wire.begin();

  //Initialize the TPH BMP sensor
  bmp.begin();
}

String takeTPHReading()
{
  //Create a String type data record in csv format
  //TempSHT21, TempBMP, PressureBMP, HumiditySHT21
  String data = String(SHT2x.GetTemperature())  + ", ";
  //BMPTemp is commented out, the data will be to long if you also send batt volt.
  data += String(bmp.readTemperature()) + ", ";
  data += String(bmp.readPressure() / 100)  + ", ";
  data += String(SHT2x.GetHumidity());

  return data;
}`;
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Temperature Pressure Humidity</h1>
      <p>
        The TPH-board is a new sensor board for measuring the Temperature,
        Pressure and the Humidity. This board has the Sensirion SHT21 humidity
        sensor and the Bosch Sensortec BMP180 pressure sensor (Barometer) (both
        capable of measuring temperature).
      </p>
      <p>
        Both the SHT21 and the BMP180 are connected through the I2C/TWI with the
        easy Grove-header. Pull-up resistors are available on the TPH-board, but
        if undesired you can disconnect them through the cut-trace on the back.
      </p>
      <Element name="item-1">
        <h2>TPH-board specifications:</h2>
      </Element>
      <ul>
        <li>Size: 26 * 19 mm</li>
        <li>3 volt compatible</li>
        <li>Grove compatible</li>
        <li>Sensirion SHT21 humidity sensor</li>
        <li>Bosch Sensortec BMP180 pressure sensor</li>
        <li>Double temperature sensor (SHT21 & BMP180)</li>
        <li>Operating temp: range (-40 -> +85 )degrees Celcius</li>
        <li>I2C pull-up resistors with cut-trace</li>
      </ul>
      <Element name="item-2">
        <h2>Example</h2>
      </Element>
      <p>
        Below we included some sample code that can be applied best in use with
        our boards such as the Autonomo, Mbili or the Tatu. With this sketch you
        are able to create string of data from the temperature, humidity and
        pressure sensors on the board.
      </p>
      <Element name="item-3">
        <h1>Autonomo Wiring</h1>
      </Element>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://localhost:8080/sensors/autonomo_tph.jpg"
          title="autonomo_tph"
        />
      </Card>
      <Element name="item-4">
        <h2>Code</h2>
      </Element>
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

export default Tph;
