var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(req, res) {
    res.render('home');
});

app.get("/fallinlovewith/:thing", function(req,res) {
    var thing = req.params.thing;
    res.render("love", {thingVar : thing});
});

var posts = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
      
app.get("/posts", function(req,res) {
    
     console.log("The posts page has started!")
    
      res.render("posts", {posts: posts});
});

app.post("/addpost", function(req,res){
    var newpost = req.body.newpost;
    posts.push(newpost);
    res.redirect("/posts")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started!")
});