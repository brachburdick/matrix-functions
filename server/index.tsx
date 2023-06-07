const { DMX }= require("dmx-ts")
const express = require('express');
const cors = require('cors');
const app = express();
const dmx = new DMX();
const iName = 'ENTTEC'
const serialPort = '/dev/tty.usbserial-EN286139'
app.use(cors());
const PORT = 3001; 
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
const  EnttecUsbDmxPro  = require('dmx-ts');

let driver;
//setup verification
try {
    driver = new dmx.EnttecUsbDmxPro('serialPort'); // replace with the actual path to your device
    dmx.addUniverse('uni1', driver)
    console.log('Connection to DMX interface initiated.');
  } catch(err) {
    console.error('Error initiating connection to DMX interface:', err);
  }
  app.use((req, res, next) => {
    try {
      // Attempt to perform a trivial operation on the driver to check if the connection is still alive
      driver.setChannel(1, 0);
      console.log('DMX interface connection active.');
      next();
    } catch(err) {
      console.error('DMX interface connection check failed:', err);
      res.status(500).send({ error: 'DMX interface connection check failed.' });
    }
  });


app.post('/update-dmx', (req, res) => {
  const { dmxValues } = req.body;  // Get DMX values from request body
  try {
    for (const [channel, value] of Object.entries(dmxValues)) {
      driver.setChannel(parseInt(channel), value);
    }
    res.sendStatus(200);
  } catch(err) {
    res.status(500).send({ error: 'An error occurred while setting DMX values.' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});