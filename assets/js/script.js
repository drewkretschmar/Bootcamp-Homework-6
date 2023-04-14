var searchButton = document.getElementById('searchbutton');
var date = document.getElementById('date');
var citySearch = document.getElementById('input')

searchButton.addEventListener("click", function(event) {
    event.preventDefault();

    var cityName = input.value.trim();
    localStorage.setItem("City", JSON.stringify(cityName));
    console.log('test');
});

function test() {
    console.log('test');
    return;
};

function cityTest() {
    var cityname = document.getElementById('input').value;
    console.log(cityname);
    return;
};

function time() {
    date.textContent = dayjs().format('MM/DD/YYYY h:mm:ss A')
    return;
};
setInterval(time,1000);

function runForecast() {
    var forecast = document.getElementById('forecast');
    var current = document.getElementById('current');
    var city = document.getElementById('input').value;
    console.log(city);
    var fiveDayForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid=f1e9804071ae403822444ebea900347d&units=imperial';
    var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=f1e9804071ae403822444ebea900347d&units=imperial';
    fetch(currentWeather)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var searchedCity = document.getElementById('cityname');
        var temp = document.getElementById('temp');
        var wind = document.getElementById('wind');
        var humidity = document.getElementById('humidity');

        searchedCity.textContent = data.name;
        temp.textContent = 'Temp: '+data.main.temp+'°F';
        wind.textContent = 'Wind: '+data.wind.speed+' mph';
        humidity.textContent = 'Humidity: '+data.main.humidity+'%';
    });
    fetch(fiveDayForecast)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (var i=0; i<5; i++) {
                var dayForecast = document.createElement('div');
                dayForecast.className = 'forecast';
                var searchedCity = document.createElement('p');
                var date = document.createElement('p');
                var temp = document.createElement('p');
                var wind = document.createElement('p');
                var humidity = document.createElement('p');

                date.textContent = 'Date: '//+data.main.dt_txt;
                temp.textContent = 'Temp: '//+data.main.temp;
                wind.textContent = 'Wind: '//+data.wind.speed;
                humidity.textContent = 'Humidity: '//+data.main.humidity;
                
                dayForecast.appendChild(searchedCity);
                dayForecast.appendChild(date);
                dayForecast.appendChild(temp);
                dayForecast.appendChild(wind);
                dayForecast.appendChild(humidity);
                forecast.appendChild(dayForecast);
            }
        });
};

// forecast days array index 0, 8, 16, 24, 32
//