
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var display = document.querySelector('.display');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=d2dda80a2efc7b2c45dfb062aa425497')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        console.log(data)

        name.innerHTML =nameValue
       

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=d2dda80a2efc7b2c45dfb062aa425497`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            display.innerHTML= '';
        for(let i = 1; i < 6; i++){
            let date= new Date(data.daily[i].dt*1000)
            let dateString = date.toGMTString();
            console.log(data.daily[i].dt*1000)
            display.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Date:${dateString}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div> `;
        }

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=60442978a2ab29de03399296c31fa7c2`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        temp.innerHTML= '';
    for(let i = 1; i < 6; i++){
        let temp= new Temp(data.daily[i].temp*1000)
        tempString.replace(/\b(\d{1,3})(?=[FC]\b)/, "$1°");
        temp.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="http://openweathermap.org/img/wn/${data.daily[i].temp[0].icon}.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Date:${forecastString}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> `;
    
    }

        }) .catch(error => {
            console.log(error)
        })
})
})
    })

// var cityFormEl = document.querySelector("#city-form");
// var cityListEl = document.querySelector("#list-city");
// var cityIdCounter = 0;
// var cities = [];


// var cityFormHandler = function(event) {
//     event.preventDefault();
//     var cityName = document.querySelector("input[name='city-name']").value;

//     if(!cityName) {
//         alert("You forgot to pick a city!");
//         return false;
//     };

//     var cityDataObj = {
//         name: cityName
//     };

//     createCityEl(cityDataObj)
//   };

//   var createCityEl = function (cityDataObj){
//     var citySearchEl = document.createElement('li');
//     citySearchEl.className = "city-search";

//     citySearchEl.setAttribute("data-city-id", cityIdCounter);

//     var cityInfoEl = document.createElement("div");
//     cityInfoEl.className = "city-info";
//     cityInfoEl.innerHTML = "<h6 class='city'>" + cityDataObj.name;
//     citySearchEl.appendChild(cityInfoEl);

//     cityFormEl.appendChild(citySearchEl);

//     cityDataObj.id = cityIdCounter;

//     cities.push(cityDataObj);

//     cityIdCounter++;
//   };


// cityFormEl.addEventListener("submit", cityFormHandler);

// var getCityWeather = function(weather) {
//     var apiURL = "http://api.openweathermap.org/data/2.5/box/city?bbox={bbox}&appid={d2dda80a2efc7b2c45dfb062aa425497}" + weather;
    
//     fetch(apiURL)
//         .then(function(response) {
//             if(response.ok) {
//             console.log(response);
//                 response.json().then(function(data){
//                     console.log(data);
//                     displayWeather(data, city);
//                 });
//             } else {
//                 alert("Error: " + response.statusText);
//              }
//             })
//             .catch(function(error){
//                 alert("Unable to connect to Open Weather Map");
//             });
//         };
    
//     var displayWeather = function(city, citySearched){

//         citySearched.querySelector("h6.city-name").textContent = cityNameInput;


//         for (var i = 0; i < cities.length; i++) {
//             if (cities[i].id === parseInt(cityId)) {
//               cities[i].name = cityNameInput;
//         }
//     }};




