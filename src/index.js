const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors  = require('cors');
const PORT = process.env.PORT || 9000;
const bodyParser = require('body-parser');
require ('dotenv').config();
const PlayerDatos = require('./routes/playerDatos');


//Configs
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', PlayerDatos);
// Connect to MongoDB

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// Midd