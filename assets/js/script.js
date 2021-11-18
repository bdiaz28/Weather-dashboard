var cityFormEl = document.querySelector("#city-form");
var cityListEl = document.querySelector(".city-list");

var cityFormHandler = function(event) {
    event.preventDefault();
    var cityNameInput = document.querySelector("input[name='city-name']").value;

    if(!cityNameInput) {
        alert("You forgot to pick a city!");
        return false;
    };

    var cityDataObj = {
        name: cityNameInput
    };

    createCityEl(cityDataObj)
  };

  var createCityEl = function (cityDataObj){
    var citySearchEl = document.createElement('li');
    citySearchEl.className = "city-search";

    var cityInfoEl = document.createElement("div");
    cityInfoEl.className = "city-info";
    cityInfoEl.innerHTML = "<h6 class='city'>" + cityDataObj.name;
    citySearchEl.appendChild(cityInfoEl);

    cityFormEl.appendChild(citySearchEl);
  };

cityFormEl.addEventListener("submit", cityFormHandler);

var getCityWeather = function(weather) {
    var apiURL = "https://api.openweathermap.org/data/2.5/box/city?bbox={bbox}&appid={eb10a7c189b70fd7bbac87395b87ebbe}" + weather;
    
    fetch(apiURL)
        .then(function(response) {
            if(response.ok) {
            console.log(response);
                response.json().then(function(data){
                    console.log(data);
                    displayWeather(data, city);
                });
            } else {
                alert("Error: " + response.statusText);
             }
            })
            .catch(function(error){
                alert("Unable to connect to Open Weather Map");
            });
        };
    
    // var displayWeather = function(city, citySearched){

    //     citySearchedEl.textContent = citySearched

    //     cityContainerEl.textContent = 

    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
            
    //     }
    
    //     }




