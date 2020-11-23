var name=prompt("What is your name?");
var crushname=prompt("What is the name of your crush?");
var n=Math.random();
n=Math.floor(n*100);
if(n<50){
    text=crushname+" is not the one!"
}
else if(n>=50 && n<85){
    text=crushname+ " likes you!"
}
else{
    text="You're deeply in love!"
}
alert("The love percentage of "+name+" and "+crushname+ " is " + n + "% \n"+text);

