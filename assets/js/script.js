var searchButton = document.getElementById('searchbutton');
var date = document.getElementById('date');

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
    var city = document.getElementById('input').value;
    console.log(city);
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid=f1e9804071ae403822444ebea900347d&units=imperial';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (var i=0; i<1; i++) {
                var dayForecast = document.createElement('div');
                var date = document.createElement('p');
                var temp = document.createElement('p');
                var wind = document.createElement('p');
                var humidity = document.createElement('p');

                date.textContent = data[list.i.dt];
                temp.textContent = 'Temp: '+list.data[i].main.temp;
                wind.textContent = 'Wind: '+list.data[i].wind.speed;
                humidity.textContent = 'Humidity: '+list.data[i].main.humidity;

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