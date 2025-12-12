const apikey = "9fd9dc78b236e8b6bca1bdc0818733d0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        } else if (data.weather[0].main == "Haze") {
            weathericon.src = "images/haze.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
