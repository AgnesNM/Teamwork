const app = express();

app.get("/", (req,res) => {
    req.params.articleTitle;          
    req.params.gifArticle;
    req.params.comment;    
    app.listen(3000);
});