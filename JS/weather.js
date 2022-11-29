const API_KEY = "b3401531229b511debbcd3c7b97528ab";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}℃`;
        console.log(`${data.name}`)
    });
}
function onGeoError(){
    alert("위치를 받아오지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
