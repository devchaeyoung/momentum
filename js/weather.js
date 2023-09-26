const API_KEY = "bbdf2fecf861af6577aaf2fa7807da8c";

const lang = "en";
function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&unit=metric`;
  fetch(url)
    .then(res => {
      res.json();
      console.log(url);
    })
    .then(data => {
      const weatherSpan = document.querySelector("#weather span:first-child");
      const citySpan = document.querySelector("#weather span:last-child");
      citySpan.innerText = data.name;
      weatherSpan.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
    .catch(e => console.log(e));
}

function onGeoError(e) {
  console.log(`can't find current location ${e}`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
