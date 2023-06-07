const express=require( 'express');
const cors = require('cors');
const DMX = require('dmx');
const { nextTick } = require('process');
const dmx = new DMX();
const app = express();
const iName = 'ENTTEC'
app.use(cors());
const PORT = 3001; 
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

const universe = {}
for(let i =0; i<12; i++){
  universe[i] = 0
}


//const universe = dmx.addUniverse('demo', 'enttec-usb-dmx-pro', '/dev/cu.usbserial-EN099731')
app.get('/addUniverse', (req, res) => {
  dmx.addUniverse(iName, 'enttec-open-usb-dmx', '/dev/tty.usbserial-EN286139')
  res.send('Connected to Enttec interface');
});

app.get('/update', (req, res) => {
  
dmx.update(iName, {1:150, 2:50, 3:30, 4:0, 5:10, 6:255, 7:0, 8:0, 9:0, 10:0, 11:0})
  res.send('universe values updated')
});

app.get('/util', (req, res) => {
  res.send(dmx)
})
  



app.post('/dmx', (req, res) => {
  const { channel, value } = req.body;
  sendDMXValue(channel, value)
    .then(() => res.sendStatus(200))
    .catch((error) => res.status(500).send(error));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});