const dayCount=document.querySelector("h3#dayCount");

function countDown(){
    const concertDay=new Date("sep 17,2022 19:00:00");
    const today=new Date();
    const remainTime=concertDay - today;

    const day = String(Math.floor(remainTime/(1000*60*60*24)));
    const hours=String(Math.floor((remainTime/(1000*60*60))%24)).padStart(2,"0");
    const minutes=String(Math.floor((remainTime/(1000*60))%60)).padStart(2,"0");
    const seconds=String(Math.floor(remainTime/1000%60)).padStart(2,"0");

    dayCount.innerText=`The Golden Hour 콘서트까지 ${day}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`
}


countDown();
setInterval(countDown,1000);