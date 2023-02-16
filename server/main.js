require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { cropRoute } = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => res.send('<h1><strong>Hello World, and welcome to COCO-Health API<strong><h1>'));
// Crop route
app.use('/api/crop', cropRoute);

app.listen(port, () => {
    console.log("🚀 ~ Server up on port:", port)
});