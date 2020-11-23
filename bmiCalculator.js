function bmiCalculator(w,h){
    var bmi = Math.floor(w/(h*h));
    return bmi;
}

var bmi = bmiCalculator(65, 1.8); 
alert(bmi);