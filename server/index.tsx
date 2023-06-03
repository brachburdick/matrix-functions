// import express from 'express';
// import cors from 'cors';
// //import { sendDMXValue } from './controller/dmxController';

// const app = express();
// const port = 3001; // Change this to any port you want your server to run on

// app.use(cors()); // This allows your server to accept cross-origin requests
// app.use(express.json()); // This allows your server to parse JSON request bodies

// // Here's an example route handler for sending DMX values
// app.post('/dmx', (req, res) => {
//   const { channel, value } = req.body;
//   sendDMXValue(channel, value)
//     .then(() => res.sendStatus(200))
//     .catch((error) => res.status(500).send(error));
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });