const express = require("express");
const app = express();

app.get("/", (req,res) => {
    req.params.gifTitle;    
    res.send("gif shared successfully!");
    app.listen(3000);
});