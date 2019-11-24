const express = require("express");
const app = express();

app.post("/", (req,res) => {
    req.params.articleTitle; 
    req.params.articleAuthor;     
    res.json('article created successfully!');
    app.listen(3000);
});