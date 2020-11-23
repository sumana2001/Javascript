function fibonacciGenerator (n) {
    var o = [];
    var i = 0;
    if(n==1){
        o = [0];
    }
    else if(n==2){
        o = [0,1];
    }
    else{
        o = [0,1];
        for(i=2;i<n;i++){
            o.push(o[o.length - 1] + o[o.length - 2]);
        }
        
    }
    return(o);
}

var result=fibonacciGenerator (10);
console.log(result);