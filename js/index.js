const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar .logo img");
const nav_links = document.querySelector(" nav .nav-links");
const title = document.querySelector(" nav .logo h4");
const developed = document.querySelector("  nav .developed");
var click = false;
function drawer() {
  if (click === false) {
    click = true;
    // navbar.style.width = "90%";
    navbar.style.width = "90%";
    logo.style.opacity = 1;
    nav_links.style.opacity = 1;
    title.style.opacity = 1;
    developed.style.opacity = 1;
  } else {
    click = false;
    navbar.style.width = 0;
    logo.style.opacity = 0;
    nav_links.style.opacity = 0;
    title.style.opacity = 0;
    developed.style.opacity = 0;
  }

  console.log(click);
}

const toast = document.querySelector("main .section1 #toast-container #toast");
const toastContainer = document.querySelector(
  "main .section1 #toast-container "
);

function showToast(message) {
  toast.innerText = message;
  toast.style.opacity = 1;
  setTimeout(() => {
    toast.style.opacity = 0;
  }, 2000);
}

function search() {
  var search_value = document.querySelector("#search").value;

  if (search_value === "") {
    console.log("empty");
    // alert("Enter the City ... ! ");
    showToast("Enter the City ... ! ");
  } else {
    const apiKey = "b07cf1efb25a42f5bd4074df1e1a6099";
    const apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${search_value}&key=${apiKey}&days=7`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        document.querySelector(
          "#place_name"
        ).innerHTML = `${data.city_name}, ${data.country_code}`;

        document.querySelector("#wind").innerHTML = `${(
          data.data[0].wind_spd * 3.6
        ).toFixed(2)} km/h`;

        document.querySelector(
          "#rain_possi"
        ).innerHTML = `${data.data[0].pop}%`;

        document.querySelector("#uv").innerHTML = Math.round(data.data[0].uv);

        document.querySelector(
          "#place_temperature"
        ).innerHTML = `${data.data[0].temp}&deg;`;

        document.querySelector(
          "#real-temperature"
        ).innerHTML = `${data.data[0].temp}&deg;`;

        var weather_code = data.data[0].weather.code;
        if (
          weather_code === 200 ||
          weather_code === 201 ||
          weather_code == 202
        ) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/thunder.png";
        } else if (
          weather_code === 230 ||
          weather_code === 231 ||
          weather_code === 232 ||
          weather_code === 233
        ) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/storm.png";
        } else if (
          weather_code === 300 ||
          weather_code === 301 ||
          weather_code === 302
        ) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/raining.png";
        } else if (
          weather_code === 500 ||
          weather_code === 501 ||
          weather_code === 511 ||
          weather_code === 522
        ) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/light-rain.png";
        } else if (weather_code === 502) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/hail.png";
        } else if (weather_code === 521) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/weather-app.png";
        } else if (weather_code === 600 || weather_code === 610) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/snow.png";
        } else if (
          weather_code === 601 ||
          weather_code === 602 ||
          weather_code === 622 ||
          weather_code === 623
        ) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/snow (1).png";
        } else if (weather_code === 611 || weather_code === 612) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/wind.png";
        } else if (weather_code === 621) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/snow.png";
        } else if (
          weather_code === 700 ||
          weather_code === 711 ||
          weather_code === 721 ||
          weather_code === 731 ||
          weather_code === 741 ||
          weather_code === 751
        ) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/cloudy-day (1).png";
        } else if (weather_code === 800) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/sun.png";
        } else if (weather_code === 801 || weather_code === 802) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/clouds.png";
        } else if (weather_code === 803) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/cloudy-day.png";
        } else if (weather_code === 804) {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/cloudy (1).png";
        } else {
          document.querySelector(
            `main .section1 .weatherInfo .weatherInfo-img #status`
          ).src = "../img/rain.png";
        }

        for (let i = 0; i <= 6; i++) {
          var weather_code = data.data[i].weather.code;
          if (
            weather_code === 200 ||
            weather_code === 201 ||
            weather_code == 202
          ) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/thunder.png";
          } else if (
            weather_code === 230 ||
            weather_code === 231 ||
            weather_code === 232 ||
            weather_code === 233
          ) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/storm.png";
          } else if (
            weather_code === 300 ||
            weather_code === 301 ||
            weather_code === 302
          ) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/raining.png";
          } else if (
            weather_code === 500 ||
            weather_code === 501 ||
            weather_code === 511 ||
            weather_code === 522
          ) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/light-rain.png";
          } else if (weather_code === 502) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/hail.png";
          } else if (weather_code === 521) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/weather-app.png";
          } else if (weather_code === 600 || weather_code === 610) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/snow.png";
          } else if (
            weather_code === 601 ||
            weather_code === 602 ||
            weather_code === 622 ||
            weather_code === 623
          ) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/snow (1).png";
          } else if (weather_code === 611 || weather_code === 612) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/wind.png";
          } else if (weather_code === 621) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/snow.png";
          } else if (
            weather_code === 700 ||
            weather_code === 711 ||
            weather_code === 721 ||
            weather_code === 731 ||
            weather_code === 741 ||
            weather_code === 751
          ) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/cloudy-day (1).png";
          } else if (weather_code === 800) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/sun.png";
          } else if (weather_code === 801 || weather_code === 802) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/clouds.png";
          } else if (weather_code === 803) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/cloudy-day.png";
          } else if (weather_code === 804) {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/cloudy (1).png";
          } else {
            document.querySelector(
              `main .section2 .forecast_items .item #img${i}`
            ).src = "../img/rain.png";
          }

          document.querySelector(
            `main .section2 .forecast_items .item #status${i}`
          ).innerHTML = data.data[i].weather.description;

          if (i == 0) {
            continue;
          }

          document.querySelector(
            `main .section2 .forecast_items .item #item${i}`
          ).innerHTML = data.data[i].datetime;
        }
      })
      .catch((error) => {
        console.error("Error Fetching Data ", error);
      });

    const apiUrl1 = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${search_value}&key=${apiKey}&hours=24`;

    fetch(apiUrl1)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        //main .todaysForcast .forecastItems .forecastItem #status13
        for (let i = 1; i <= 24; i += 4) {
          var weather_code = data.data[i].weather.code;
          if (
            weather_code === 200 ||
            weather_code === 201 ||
            weather_code == 202
          ) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/thunder.png";
          } else if (
            weather_code === 230 ||
            weather_code === 231 ||
            weather_code === 232 ||
            weather_code === 233
          ) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/storm.png";
          } else if (
            weather_code === 300 ||
            weather_code === 301 ||
            weather_code === 302
          ) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/raining.png";
          } else if (
            weather_code === 500 ||
            weather_code === 501 ||
            weather_code === 511 ||
            weather_code === 522
          ) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/light-rain.png";
          } else if (weather_code === 502) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/hail.png";
          } else if (weather_code === 521) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/weather-app.png";
          } else if (weather_code === 600 || weather_code === 610) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/snow.png";
          } else if (
            weather_code === 601 ||
            weather_code === 602 ||
            weather_code === 622 ||
            weather_code === 623
          ) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/snow (1).png";
          } else if (weather_code === 611 || weather_code === 612) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/wind.png";
          } else if (weather_code === 621) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/snow.png";
          } else if (
            weather_code === 700 ||
            weather_code === 711 ||
            weather_code === 721 ||
            weather_code === 731 ||
            weather_code === 741 ||
            weather_code === 751
          ) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/cloudy-day (1).png";
          } else if (weather_code === 800) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/sun.png";
          } else if (weather_code === 801 || weather_code === 802) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/clouds.png";
          } else if (weather_code === 803) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/cloudy-day.png";
          } else if (weather_code === 804) {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/cloudy (1).png";
          } else {
            document.querySelector(
              `main .todaysForcast .forecastItems .forecastItem #status${i}`
            ).src = "../img/rain.png";
          }

          let time1 = new Date(data.data[i].timestamp_local);
          time1 = `${time1.getHours()}:${time1.getMinutes()} ${time1.getHours() > 12 ? "PM" : "AM"
            }`;
          // console.log(i);
          document.querySelector(
            `main .todaysForcast .forecastItems .forecastItem #time${i}`
          ).innerHTML = time1;

          document.querySelector(
            `main .todaysForcast .forecastItems .forecastItem #temp${i}`
          ).innerHTML = `${data.data[i].temp}&deg;`;
        }
      })
      .catch((error) => {
        console.error("Error Fetching Data ", error);
      });
  }

  document.querySelector("#search").value = "";
}
