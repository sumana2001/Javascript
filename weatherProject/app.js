var express=require("express");
var https=require("https");
var bodyParser=require("body-parser");
var app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const query=req.body.cityName;
    const apikey="5308a6d3ec5e5e6498c5957568987fb9";
    const units="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+units;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const desc=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The temperature in "+query+ " is "+ temp+" degree Celcius</h1>")
            res.write("<h5>The weather is currently "+desc+"</h5>")
            res.write("<img src="+imageurl+">")
            res.send()
        })
    });
})

app.listen(3000,function(){
    console.log("Server started at port 3000");
})

