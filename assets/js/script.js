var searchButton = document.getElementById('searchbutton').addEventListener('click', getApi);
var city = document.getElementById('input').value;
var date = document.getElementById('date');

function test() {
    console.log('test');
};

function time() {
    date.textContent = dayjs().format('MM/DD/YYYY h:mm:ss A')
}
setInterval(time,1000);

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=f1e9804071ae403822444ebea900347d';
//change q parameter to inputField search
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
};

function homework() {

};