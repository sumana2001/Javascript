var tweet=prompt("Write your tweet!");
var tweetnew=tweet.slice(0,140);
alert("You have "+(140-tweetnew.length)+" characters left");
alert(tweetnew);
