app.post("/", (req,res) => {   
    req.params.gifTitle;
    req.params.image;
    res.send("gif created successfully!");
    app.listen(3000);
});