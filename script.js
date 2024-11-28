const inputBox = document.querySelector(".inputBox");
const error = document.querySelector(".error");
const SearchBtn = document.querySelector(".SearchBtn");
const temperature = document.querySelector(".temperature");
const Wind = document.querySelector(".Wind");
const Humidity = document.querySelector(".Humidity");
const wcImage = document.querySelector(".wcImage");
const weathercon = document.querySelector(".weathercon");
const Location = document.querySelector(".Location");

SearchBtn.addEventListener("click", function () {
   let query = inputBox.value;
   let apikey = "f07e4aaa57ad404292345233241211";
   let url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${query}&aqi=no;`;
   if (!query) {
      error.style.display = "block";
   } else {
      fetch(url)
         .then((Response) => {
            return Response.json();
         })
         .then((data) => {
            let WeatherStatus = data;
            console.log(WeatherStatus);
            Location.textContent = query;
            wcImage.src = `http:${WeatherStatus.current.condition.icon}`;
            weathercon.textContent = `${WeatherStatus.current.condition.text}`;
            temperature.textContent = `Temperature : ${WeatherStatus.current.temp_c}℃`;
            Wind.textContent = `Wind : ${WeatherStatus.current.wind_kph}mph`;
            Humidity.textContent = ` Humidity : ${WeatherStatus.current.humidity}%`;
         });
   }
});
