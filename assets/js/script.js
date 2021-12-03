
var button = document.querySelector('.button')
var city = document.querySelector('.city')
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var display = document.querySelector('.display');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=imperial&appid=d2dda80a2efc7b2c45dfb062aa425497')
    .then(response => response.json())
    .then(data => {
        var name = data['name'];
        var temp = data['main']['temp'];
        var feels_like = data['main']['feels_like']
        var humidity = data['main']['humidity']
        console.log(data)

        name.innerHTML = name
       temp.innerHTML = temp
       feels_like.innerHTML = feels_like
       humidity.innerHTML = humidity

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
              <h5 class="card-title">${dateString}</h5>
              <p class="card-text">Local Weather. Plan ahead</p>
              <p class="card-info">temp: ${temp}</p>
              <p class="card-info">feels like: ${feels_like}</p>
              <p class="card-info">humidity: ${humidity}</p>
              <a href="#" class="button">Go somewhere</a>
            </div>
          </div> `;
        }

        }) .catch(error => {
            console.log(error)
        })
})})
