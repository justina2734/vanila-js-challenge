const clock=document.querySelector("h1#clock");

function nowTime(){
    const date= new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}`
}

nowTime();
setInterval(nowTime,1000);




