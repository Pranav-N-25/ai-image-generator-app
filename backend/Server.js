//Required framework import block 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// API Routes
const imageRoute = require('./routes/imageRoute.js');
const userRoute = require("./routes/userRoute.js");

// Initial Configuration
dotenv.config();
const app = express();
const PORT = 3000;

// DataBase Connection
mongoose.connect(process.env.MONGODB_URL,{dbName:"SAAI"})
    .then(response => {
        console.log('MongoDB Connection Succeeded.')
    })
    .catch(error => {
        console.log('Error in DB connection: ' + error)
    });

// API Request handling moethods
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);
app.use("/api/image", imageRoute);
app.use("/api/user", userRoute);

// Server Root URL
app.get('/', (req, res) => {
    res.send(`<b style="color:red;font-size:5em;width:100%;height:100%;display:flex;jutify-content:center;item-align:center;">Hello Server</b> `);
});

// Listening to the port Number 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
