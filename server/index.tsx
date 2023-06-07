const { DMX,EnttecUSBDMXProDriver }= require("dmx-ts")
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
//const  EnttecUsbDmxPro  = require('dmx-ts');
let universe;

//const universe = yield dmx.addUniverse('demo', new EnttecUSBDMXProDriver('/dev/tty.usbserial-EN286139'));


let driver;

const init = async () => {try {
      universe = await dmx.addUniverse('demo', new EnttecUSBDMXProDriver('/dev/tty.usbserial-EN286139'));
  } catch (err) {console.error(err);}};
const on = async () => {try {
             universe.updateAll(250);
              console.log('on');
  } catch (err) {console.error(err);}};
const off = async () => {try {
    universe.updateAll(0);
     console.log('off');
} catch (err) {console.error(err);}};
const disconnect = async () => {try {
  universe.close();
  } catch (err) {console.error(err);}};



app.get('/init', (req, res)=>{
  init();
  res.send('init')
})
app.get('/on', (req, res)=>{
  on();
  res.send('on')
})
app.get('/off', (req, res)=>{
  off();
  res.send('off')
})
app.get('/disconnect', (req, res)=>{
  disconnect();
  res.send('disconnect')
})

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