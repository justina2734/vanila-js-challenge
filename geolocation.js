const API_KEY="765673c7d8652eafbc0416194bce5303";

function ifSuccess(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    console.log("You are in", lat, lon);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
       .then(response=>response.json())
       .then(data=>{
        const city = document.querySelector("#weather span:last-child");
        const weather = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function ifError(){
    alert("사용자의 위치를 찾을 수 없어 날씨를 알 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(ifSuccess,ifError);