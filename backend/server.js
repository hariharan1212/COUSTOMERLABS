const express = require('express');
const axios = require('axios');
const app = express();
const port = 1212; // Port for your backend server
const cors = require('cors')

//CORS middleware
// Enable CORS
app.use(cors({ origin: 'http://localhost:3000' }));

// Parse JSON body
app.use(express.json()); 

// Handle requests to the root path ('/')
app.get('/', (req, res) => {
    res.send('Backend server is running..!'); // Or send HTML
  });

// Route to handle segment data
app.post('/save-segment', (req, res) => {
    const segmentData = req.body; // This will contain the data from the frontend
    console.log('Received segment data:', segmentData);
  
    // Your webhook.site logic goes here
    const webhookURL = "https://webhook.site/13378e88-f7b3-443e-8606-1408a8cc68df";
    axios.post(webhookURL, segmentData)
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        console.error('Error occurred:', error);
        res.status(500).send('Error occurred while saving segment');
      });
  });
  

// Route to handle your request
// app.post('/save-segment', (req, res) => {
//   const webhookURL = "https://webhook.site/13378e88-f7b3-443e-8606-1408a8cc68df";
//   const segmentData = req.body;
//   console.log('Received segment data:', segmentData);

//   axios.post(webhookURL, segmentData)
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(error => {
//       console.error('Error occurred:', error);
//       res.status(500).send('Error occurred while saving segment');
//     });
// });

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
