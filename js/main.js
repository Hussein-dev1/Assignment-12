let nnn;
const http = new XMLHttpRequest();
function findMyCoordinates() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const bdcAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;
        localStorage.setItem("API", bdcAPI);
        nnn = GETAPI(bdcAPI);
      },
      (err) => {}
    );
    return true;
  } else {
    return false;
  }
}
async function GETAPI(bdcAPI) {
  try {
    const response = await fetch(bdcAPI);
    if (response.ok) {
      const results = await response.json();
      console.log(results.locality);
      return results.locality;
    } else {
      console.error("API Error:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Fetch Error:", error.message);
    return null;
  }
}

findMyCoordinates();
console.log(findMyCoordinates());
const URL_BASE = `https://api.weatherapi.com/v1/forecast.json?key=520622a207b74df3bb5104609241906`;
async function fetchh() {
  var response;
  if (findMyCoordinates()) {
    response = await fetch(
      `${URL_BASE}&q=${await GETAPI(localStorage.getItem("API"))}&days=3&tp=24`
    );
  } else {
    response = await fetch(`${URL_BASE}&q=cairo&days=3&tp=24`);
  }
  var data = await response.json();
  console.log(data);
  document.getElementById("namecountry").innerHTML = data.location.name;

  document.getElementById("day1tqmpmin").innerHTML =
    data.forecast.forecastday[0].day.maxtemp_c + "°C";
  document.getElementById("day1tqmpmax").innerHTML =
    data.forecast.forecastday[0].day.mintemp_c + "°C";
  const imageUrl = data.forecast.forecastday[0].day.condition.icon;
  const imageElement = document.getElementById("state1");
  imageElement.src = imageUrl;
  document.getElementById("day2tqmpmin").innerHTML =
    data.forecast.forecastday[1].day.maxtemp_c + "°C";
  document.getElementById("day2tqmpmax").innerHTML =
    data.forecast.forecastday[1].day.mintemp_c + "°C";
  const imageUrl2 = data.forecast.forecastday[1].day.condition.icon;
  const imageElement2 = document.getElementById("state2");
  imageElement2.src = imageUrl2;
  document.getElementById("day3tqmpmax").innerHTML =
    data.forecast.forecastday[2].day.maxtemp_c + "°C";
  document.getElementById("day3tqmpmin").innerHTML =
    data.forecast.forecastday[2].day.mintemp_c + "°C";
  const imageUrl3 = data.forecast.forecastday[2].day.condition.icon;
  const imageElement3 = document.getElementById("state3");
  imageElement3.src = imageUrl3;
  document.getElementById("rain").innerHTML =
    data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
  document.getElementById("cloud").innerHTML =
    data.forecast.forecastday[0].day.maxwind_kph + "km/h";
  const states = data.forecast.forecastday[0].day.condition.text;
  document.getElementById("word1").innerHTML = states;

  const states2 = data.forecast.forecastday[1].day.condition.text;
  document.getElementById("word2").innerHTML = states2;
  const states3 = data.forecast.forecastday[2].day.condition.text;
  document.getElementById("word3").innerHTML = states3;
}
fetchh();
var inputbox = document.getElementById("input-box");
var inputbtn = document.getElementById("input-btn");

inputbtn.addEventListener("click", async function () {
  var value = inputbox.value;
  var response = await fetch(`${URL_BASE}&q=${value}&days=3&tp=24`);
  var data = await response.json();
  console.log(data);
  document.getElementById("namecountry").innerHTML = data.location.name;

  document.getElementById("day1tqmpmin").innerHTML =
    data.forecast.forecastday[0].day.maxtemp_c + "°C";
  document.getElementById("day1tqmpmax").innerHTML =
    data.forecast.forecastday[0].day.mintemp_c + "°C";
  const imageUrl = data.forecast.forecastday[0].day.condition.icon;
  const imageElement = document.getElementById("state1");
  imageElement.src = imageUrl;
  document.getElementById("day2tqmpmin").innerHTML =
    data.forecast.forecastday[1].day.maxtemp_c + "°C";
  document.getElementById("day2tqmpmax").innerHTML =
    data.forecast.forecastday[1].day.mintemp_c + "°C";
  const imageUrl2 = data.forecast.forecastday[1].day.condition.icon;
  const imageElement2 = document.getElementById("state2");
  imageElement2.src = imageUrl2;
  document.getElementById("day3tqmpmax").innerHTML =
    data.forecast.forecastday[2].day.maxtemp_c + "°C";
  document.getElementById("day3tqmpmin").innerHTML =
    data.forecast.forecastday[2].day.mintemp_c + "°C";
  const imageUrl3 = data.forecast.forecastday[2].day.condition.icon;
  const imageElement3 = document.getElementById("state3");
  imageElement3.src = imageUrl3;
  document.getElementById("rain").innerHTML =
    data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
  document.getElementById("cloud").innerHTML =
    data.forecast.forecastday[0].day.maxwind_kph + "km/h";
  const states = data.forecast.forecastday[0].day.condition.text;
  document.getElementById("word1").innerHTML = states;
  const states2 = data.forecast.forecastday[1].day.condition.text;
  document.getElementById("word2").innerHTML = states2;
  const states3 = data.forecast.forecastday[2].day.condition.text;
  console.log(states3);
  document.getElementById("word3").innerHTML = states3;
  inputbox.value = "";
});
element1 = document.getElementById("emailinput");
element2 = document.getElementById("subinput");
element2.addEventListener("click", function () {
  element1.value = "";
});
function getDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()]; 
  const day = currentDate.getDate();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = dayNames[currentDate.getDay()]; 
  const day2 = dayNames[currentDate.getDay() + 1]; 
  const day3 = dayNames[currentDate.getDay() + 2]; 
  localStorage.setItem("day", dayOfWeek);
  localStorage.setItem("day2", day2);
  localStorage.setItem("day3", day3);
  document.getElementById("day1").innerHTML = dayOfWeek;
  document.getElementById("DAte").innerHTML =
    `${currentDate.getDate()}` + month;
  document.getElementById("nameday").innerHTML = day2;
  document.getElementById("nameday2").innerHTML = day3;
}
getDate();
inputbox.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    var value = inputbox.value;
    var response = await fetch(`${URL_BASE}&q=${value}&days=3&tp=24`);
    var data = await response.json();
    console.log(data);
    document.getElementById("namecountry").innerHTML = data.location.name;

    document.getElementById("day1tqmpmin").innerHTML =
      data.forecast.forecastday[0].day.maxtemp_c + "°C";
    document.getElementById("day1tqmpmax").innerHTML =
      data.forecast.forecastday[0].day.mintemp_c + "°C";
    const imageUrl = data.forecast.forecastday[0].day.condition.icon;
    const imageElement = document.getElementById("state1");
    imageElement.src = imageUrl;
    document.getElementById("day2tqmpmin").innerHTML =
      data.forecast.forecastday[1].day.maxtemp_c + "°C";
    document.getElementById("day2tqmpmax").innerHTML =
      data.forecast.forecastday[1].day.mintemp_c + "°C";
    const imageUrl2 = data.forecast.forecastday[1].day.condition.icon;
    const imageElement2 = document.getElementById("state2");
    imageElement2.src = imageUrl2;
    document.getElementById("day3tqmpmax").innerHTML =
      data.forecast.forecastday[2].day.maxtemp_c + "°C";
    document.getElementById("day3tqmpmin").innerHTML =
      data.forecast.forecastday[2].day.mintemp_c + "°C";
    const imageUrl3 = data.forecast.forecastday[2].day.condition.icon;
    const imageElement3 = document.getElementById("state3");
    imageElement3.src = imageUrl3;
    document.getElementById("rain").innerHTML =
      data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    document.getElementById("cloud").innerHTML =
      data.forecast.forecastday[0].day.maxwind_kph + "km/h";
    const states = data.forecast.forecastday[0].day.condition.text;
    document.getElementById("word1").innerHTML = states;
    const states2 = data.forecast.forecastday[1].day.condition.text;
    document.getElementById("word2").innerHTML = states2;
    const states3 = data.forecast.forecastday[2].day.condition.text;
    console.log(states3);
    document.getElementById("word3").innerHTML = states3;
    inputbox.value = "";
  }
});
