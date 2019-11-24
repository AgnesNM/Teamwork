const express = require("express");
const app = express();

app.put("/", (req,res) => {
    req.params.articleTitle;    
    req.params.articleAuthor;    
    res.send("your changes have been successfully saved");
    app.listen(3000);
});