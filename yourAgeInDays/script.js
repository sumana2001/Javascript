function ageInDays(){
    var birthYear=prompt('What is your birthyear?');
    var days=(2020-birthYear)*365;
    var h1=document.createElement('h1');
    var textans=document.createTextNode('You are '+days+' years old!');
    h1.setAttribute('id','age');
    h1.appendChild(textans);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('age').remove();
}