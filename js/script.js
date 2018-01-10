////OpenWeatherMap API KEY 5b72d586dd7fd8a9036a04859fa2a7c7
////Google API Key AIzaSyAKue3iOUaEZzcFkBk61UV7kTv1qSNGwlI

function json(){
  navigator.geolocation.getCurrentPosition(success);
  function success(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    alert(lat);
    alert(lon);

    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=5b72d586dd7fd8a9036a04859fa2a7c7"
    var gmapsURL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAKue3iOUaEZzcFkBk61UV7kTv1qSNGwlI"

    //Weather Request
    var weatherRequest = new XMLHttpRequest();

    weatherRequest.open('GET', weatherURL+"&"+"lat="+lat+"&lon="+lon);
    weatherRequest.send();
    weatherRequest.responseType = 'text';

    weatherRequest.onload = function(){
      responseObj = weatherRequest.response;
      showWeather(responseObj);
    }

    //Google Location Request
    var mapsRequest = new XMLHttpRequest();

    mapsRequest.open('GET', gmapsURL+"&latlng="+lat+","+lon);
    mapsRequest.send();
    mapsRequest.responseType = 'json';

    mapsRequest.onload = function(){
      responseObj = mapsRequest.response;
      console.log(responseObj);
      showLocation(responseObj);
      alert(responseObj.results[0].formatted_address)
    }
  }
}

function showLocation(data){
  var country = document.createElement('p');
  country.textContent = responseObj.results[0].formatted_address;
  var div = document.getElementById("weatherStats");
  div.appendChild(country);
}
function showWeather(data){
  var parseData = JSON.parse(data);
  var temp = document.createElement('p');
  temp.textContent = parseData.main.temp;
  var div = document.getElementById("weatherStats");
  div.appendChild(temp);
}

(function(){
  json();
})();

