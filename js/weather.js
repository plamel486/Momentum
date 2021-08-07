
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY="ed083ba697faee2d6c895628f3294794";



function ok (location){
    const lat=location.coords.latitude;
    const lng=location.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(URL).
    then(response => response.json()).
    then(data => {
        city.innerText = data.name;
        const currentTemp=Math.round(data.main.temp*100)/100;
        weather.innerText = `${data.weather[0].main} / ${currentTemp}℃`;
        console.log(data.name,data.weather[0].main)
    });
    
}

function fail(){
    alert("fail....");
}


navigator.geolocation.getCurrentPosition(ok,fail);