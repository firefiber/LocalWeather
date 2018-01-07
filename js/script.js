////OpenWeatherMap API KEY 5b72d586dd7fd8a9036a04859fa2a7c7

function json(){
  navigator.geolocation.getCurrentPosition(success);
  function success(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    //alert(lat);
    //alert(lon);

    var url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=5b72d586dd7fd8a9036a04859fa2a7c7"
    var newAJAX = new XMLHttpRequest();

    newAJAX.open('GET', url+"&"+"lat="+lat+"&lon="+lon);
    newAJAX.send();
    newAJAX.responseType = 'text';

    newAJAX.onload = function(){
      responseObj = newAJAX.response;
      showWeather(responseObj);
    }
  }
}

function showWeather(data){
  var parseData = JSON.parse(data);
  var country = document.createElement('p');
  var temp = document.createElement('p');
  country.textContent = parseData.name;
  temp.textContent = parseData.main.temp;
  var div = document.getElementById("weatherStats");
  div.appendChild(country);
  div.appendChild(temp);
}

(function(){
  json();
})();

