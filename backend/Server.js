const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const PORT = 3000;
const ChatRoute = require('./routes/chatRoute.js');
const imageRoute = require('./routes/imageRoute.js');
const userRoute = require("./routes/userRoute.js");
dotenv.config();
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});

console.log(process.env.ENV);
app.get('/', (req, res) => {
    res.send(`<b style="color:red;font-size:5em;width:100%;height:100%;display:flex;jutify-content:center;item-align:center;">Hello Server</b> `);
});

app.use('/api/chat',ChatRoute);
app.use("/api/image",imageRoute);
app.use("/api/user",userRoute);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
