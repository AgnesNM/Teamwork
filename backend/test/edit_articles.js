const express = require("express");
const app = express();

app.put("/", (req,res) => {
    req.params.articleTitle;
    req.params.articleId;
    req.params.articleAuthor;
    req.params.authorId;
    res.send("your changes have been successfully saved");
    app.listen(3000);
});