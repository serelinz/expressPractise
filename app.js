var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(req, res) {
    res.render('home');
});

app.get("/fallinlovewith/:thing", function(req,res) {
    var thing = req.params.thing;
    res.render("love", {thingVar : thing});
});

app.get("/posts", function(req,res) {
    
     console.log("The posts page has started!")
    var posts = [
        {title:"post1", author:"Monday"},
        {title:"post2", author:"Tuesday"},
        {title:"post3", author:"Wednesday"},
        {title:"post4", author:"Thursday"},
        {title:"post5", author:"Friday"},
        {title:"post6", author:"Saturday"},
        {title:"post7", author:"Sunday"},
      ];
      res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started!")
});