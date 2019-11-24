const express = require("express");
const app = express();

app.get("/", (req,res) => {
    req.params.articleTitle;
    req.params.articleId;
    res.send("article shared successfully!");
    app.listen(3000);
});