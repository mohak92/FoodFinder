$( document ).ready(function() {
//global variables for openweather api
var apiKey = "d593e2d9c9a4edb4bda4173346b7b4e7";
var city = "";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",Burundi&units=imperial&appid=" + apiKey;
var queryUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",Burundi&units=imperial&appid=" + apiKey;
$.ajax({
    url: queryUrl,
    method: "GET"
  })

  .then(function(response) {
    console.log(response)

    $("#todaysWeather").html(response.main.temp + " Degrees")
    console.log(response.main.temp)



  });

  $.ajax({
    url: queryUrl2,
    method: "GET"
  })

  .then(function(response) {
    console.log(response)
    for(var i = 0; i <= list.length)
    $("#day1").html(list[3].main.temp + " Degrees")



  });





});