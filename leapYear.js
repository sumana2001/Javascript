var year=prompt("Enter a year");
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            alert("Leap Year");
        }
        else{
            alert("Not a Leap Year");
        }
    }
    else{
        alert("Leap Year");
    }
}
else{
    alert("Not a Leap Year");
}