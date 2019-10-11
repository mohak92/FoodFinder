
var apiKey = "0490112252c7a9dead536c20b8c14c10";
var apiKeyWeather = "d593e2d9c9a4edb4bda4173346b7b4e7";
var city;
var selectedCategory;
var loader = document.querySelector(".loader");
function getCategories() {
  const categoryURL = `https://developers.zomato.com/api/v2.1/categories`;
  $.ajax({
    headers: {
      "user-key": this.apiKey,
      "Content-Type": "application/json"
    },
    url: categoryURL,
    method: "GET"

  }).then(function (response) {
    catResponse = response.categories;
    $('#searchCategory')
      .append($('<option value="0">', 'Select Category')
        .text('Select Category'));
    for (var i = 0; i < catResponse.length; i++) {
      $('#searchCategory')
        .append($('<option value="' + catResponse[i].categories.id + '">', catResponse[i].categories.name)
          .text(catResponse[i].categories.name));
    }
  });
}

function getCityData(city) {
  const cityURL = "https://developers.zomato.com/api/v2.1/cities?q=" + city;
  $.ajax({
    headers: {
      "user-key": this.apiKey,
      "Content-Type": "application/json"
    },
    url: cityURL,
    method: "GET",
    success: function (data) {
      callback(data);
    }
  });
}

var cityID;
function callback(response) {
  console.log(response.location_suggestions.length);
  if(response.location_suggestions.length === 0){
    cityID = 0;
  } else {
    cityID = response.location_suggestions[0].id;
  }
  console.log(cityID);
  console.log(city);
  if (cityID === 0) {
    console.log("Enter valid city");
    showFeedback("Please enter a valid city !");
  } else {
    showLoader();
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",Burundi&units=imperial&appid=" + apiKeyWeather;
    var queryUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",Burundi&units=imperial&appid=" + apiKeyWeather;

    $.ajax({
      url: queryUrl,
      method: "GET"
    })

      .then(function (response) {
        //console.log(response)

        $("#todaysWeather").html(response.main.temp + " Degrees")
        //console.log(response.main.temp)



      });

    $.ajax({
      url: queryUrl2,
      method: "GET"
    })

      .then(function (response) {
        //console.log(response)
        $("#day1").html(response.list[4].main.temp + " Degrees " + response.list[4].weather[0].main)
        $("#day2").html(response.list[12].main.temp + " Degrees " + response.list[12].weather[0].main)
        $("#day3").html(response.list[20].main.temp + " Degrees " + response.list[20].weather[0].main)
        $("#day4").html(response.list[28].main.temp + " Degrees " + response.list[28].weather[0].main)
        $("#day5").html(response.list[36].main.temp + " Degrees " + response.list[36].weather[0].main)

      });

    $("#weather").show();
    getRestaurandInfo();
  }
}

function getRestaurandInfo() {
  hideLoader();
}


function displayRestaurant() {
  for (var i = 0; i <= 11; i++) {
    var outerDiv = $("<div>");
    var divCard1 = $("<div>");
    var divCard2 = $("<div>");
    var divRowP3 = $("<div>");
    var divCol5 = $("<div>");
    var myImg = $("<img>");
    var divCol5TextCap = $("<div>");
    var h6 = $("<h6>");
    var pAddresss = $("<p>");
    var divCol1 = $("<div>");
    var divBadgeBadgeSuccess = $("<div>");
    var hr = $("<hr>");
    var divRowPy3Ml1 = $("<div>");
    var divCol5TextUppercase = $("<div>");
    var pCousines = $("<p>");
    var pCostForTwo = $("<p>");
    var pOutdoors = $("<p>");
    var divCol7TextUppercase = $("<div>");
    var pCousinesData = $("<p>");
    var pCostForTwoData = $("<p>");
    var pOutdoorsData = $("<p>");
    var hr2 = $("<hr>");
    var divRowTextCenterNoguttersPb3 = $("<div>");
    var divCol6 = $("<div>");
    var aMenu = $("<a>");
    var iMenu = $("<i>");
    var divCol6_2 = $("<div>");
    var aWebsite = $("<a>");
    var iWebsite = $("<i>");

    outerDiv.addClass("col-11 mx-auto my-3 col-md-4");
    divCard1.addClass("card");
    divCard2.addClass("card");
    divRowP3.addClass("row p-3");
    divCol5.addClass("col-5");
    myImg.addClass("mg-fluid img-thumbnail");
    myImg.attr("src", "url");
    myImg.attr("alt", "");
    divCol5TextCap.addClass("col-5 text-capitalize");
    h6.addClass("text-uppercase pt-2 redText");
    h6.text("name");
    pAddresss.text("address");
    divCol1.addClass("col-1");
    divBadgeBadgeSuccess.addClass("badge badge-success");
    divRowPy3Ml1.addClass("row py-3 ml-1");
    divCol5TextUppercase.addClass("col-5 text-uppercase");
    pCousines.text("cousines :");
    pCostForTwo.text("cost for two :");
    pOutdoors.text("outdoor seating :");
    divCol7TextUppercase.addClass("col-7 text-uppercase");
    pCousinesData.text("Chinese");
    pCostForTwoData.text("$ 25");
    pOutdoorsData.text("Yes");
    divRowTextCenterNoguttersPb3.addClass("row text-center no-gutters pb-3");
    divCol6.addClass("col-6");
    aMenu.attr("href", "https://wwww.google.com")
    aMenu.attr("target", "_blank")
    aMenu.addClass("btn redBtn  text-uppercase");
    iMenu.addClass("fas fa-book");
    aMenu.text("Menu");
    divCol6_2.addClass("col-6");
    aWebsite.attr("href", "https://wwww.google.com")
    aWebsite.attr("target", "_blank")
    aWebsite.addClass("btn redBtn  text-uppercase");
    iWebsite.addClass("fas fa-book");
    aWebsite.text("Website");



    divCol5TextCap.append(h6);
    divCol5TextCap.append(pAddresss);
    divCol5.append(myImg);
    divRowP3.append(divCol5)
    divRowP3.append(divCol5TextCap);
    divBadgeBadgeSuccess.append();
    divBadgeBadgeSuccess.append("4.9");
    divCol1.append(divBadgeBadgeSuccess);
    divRowP3.append(divCol1);
    divCard2.append(divRowP3);
    divCard2.append(hr)
    divCol5TextUppercase.append(pCousines);
    divCol5TextUppercase.append(pCostForTwo);
    divCol5TextUppercase.append(pOutdoors);
    divRowPy3Ml1.append(divCol5TextUppercase);
    divCol7TextUppercase.append(pCousinesData);
    divCol7TextUppercase.append(pCostForTwoData);
    divCol7TextUppercase.append(pOutdoorsData);
    divRowPy3Ml1.append(divCol7TextUppercase);
    divCard2.append(divRowPy3Ml1);
    divCard2.append(hr2);
    divCol6.append(aMenu);
    divRowTextCenterNoguttersPb3.append(divCol6);
    divCol6_2.append(aWebsite);
    divRowTextCenterNoguttersPb3.append(divCol6_2);
    divCard2.append(divRowTextCenterNoguttersPb3);
    divCard1.append(divCard2);
    outerDiv.append(divCard1);
    $("#restaurant-list").append(outerDiv);
  }
}

displayRestaurant();

function showFeedback(text) {
  const feedback = document.querySelector(".feedback");
  feedback.classList.add("showItem");
  feedback.innerHTML = `<p>${text}</p>`;
  setTimeout(() => {
    feedback.classList.remove("showItem");
  }, 3000);
}

function showLoader() {
  this.loader.classList.add("showItem");
}

function hideLoader() {
  this.loader.classList.remove("showItem");
}

$(document).ready(function () {
  getCategories();
  $("#weather").hide();
  searchForm.addEventListener("submit", event => {
    event.preventDefault();

    //global variables for openweather api
    city = searchCity.value.toLowerCase();
    selectedCategory = parseInt(searchCategory.value);
    console.log(selectedCategory);
    console.log(city)
    if (city === "" || selectedCategory === 0) {
      console.log("show error");
      showFeedback("please enter a city and select category");
    } else {
      getCityData(city);
    }
  })
});



