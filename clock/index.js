function setDate(){
    const now=new Date();

    const secHand=document.querySelector('.sec-hand')
    const sec=now.getSeconds();
    const secDegrees=((sec/60)*360)+90;
    secHand.style.transform=`rotate(${secDegrees}deg)`;

    const minHand=document.querySelector('.min-hand')
    const min=now.getMinutes();
    const minDegrees=((min/60)*360)+90;
    minHand.style.transform=`rotate(${minDegrees}deg)`;

    const hourHand=document.querySelector('.hour-hand')
    const hour=now.getHours();
    const hourDegrees=((hour/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);