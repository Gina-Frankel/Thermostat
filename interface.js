$(document).ready(function () {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.temperature);

  $("#temperature-up").click(function () {
    thermostat.upTemperature();
    updateTemperature();
  });

  $("#temperature-down").click(function () {
    thermostat.downTemperature();
    updateTemperature();
  });

  $("#temperature-reset").click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $("#powersaving-button").click(function () {
    if (thermostat.powerSaveMode === true) {
      document.getElementById("powersaving-button").value =
        "Power Save Mode On";
      thermostat.changePowerSaveMode();
    } else if (thermostat.powerSaveMode === false) {
      document.getElementById("powersaving-button").value =
        "Power Save Mode Off";
      thermostat.changePowerSaveMode();
      updateTemperature();
    }
  });

  function displayWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    var token = "&appid=57620a548157da39949371bfc209c2c6&units=metric";
    $.get(url + city + token, function (data) {
      $("#current-temperature").text(data.main.temp);
    });
  }

  $("#select-city").submit(function (event) {
    event.preventDefault();
    var city = $("#current-city").val();
    displayWeather(city);
  });

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.usage);
  }
});
