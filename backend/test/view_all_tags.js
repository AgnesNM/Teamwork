const app = express();

app.get("/", (req,res) => {
    req.params.articleTitle;  
    req.params.articleCategory;      
    app.listen(3000);
});