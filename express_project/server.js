const express=require("express");
const app=express();
app.get("/",function(req,res){
    res.send("Hello There!");
});
app.get("/about",function(req,res){
    res.send("I am Sumana Basu!");
});
app.get("/contact",function(req,res){
    res.send("Find me!");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
})