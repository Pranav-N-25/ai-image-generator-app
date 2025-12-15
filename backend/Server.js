const express = require('express');

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send(`<b style="color:red;font-size:5em;width:100%;height:100%;display:flex;jutify-content:center;item-align:center;">Hello Server</b> `);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
